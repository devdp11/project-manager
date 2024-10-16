import { createContext, useReducer, useCallback, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BASE_URL, ValidPassword } from './constants';

import AlertIndex from '../../components/templates/alert';

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    access_token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIAL':
            return {
                isInitialized: true,
                isAuthenticated: action.payload.isAuthenticated,
                access_token: action.payload.access_token,
            };
        case 'AUTHENTICATE':
            return {
                ...state,
                isAuthenticated: true,
                access_token: action.payload.access_token,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                access_token: null,
            };
        default:
            return state;
    }
};

export const AppContext = createContext(null);

AppProvider.propTypes = {
    children: PropTypes.node,
};

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isInitialized, setIsInitialized] = useState(false);

    const [alert, setAlert] = useState(null);

    /* API REQUESTS */
    const checkresponse = async (response) => {
        if (response.status === 403 || response.status === 401) {
            const body = await response.clone().json();
        
            if (body.message === "Access Denied - Token Expired") {
                console.log("Token expired, refreshing ...");
            }
        } else {
            console.log("Token not expired ... ");
        }
    
        return response;
    };

    const defaultOptions = (token) => ({
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    
    const GET = async (route, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'GET',
        });
    
        await checkresponse(response);  
        return response.json();         
    };
    
    const POST = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        });
    
        await checkresponse(response);  
        return response.json();         
    };
    
    const PATCH = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    
        await checkresponse(response);  
        return response.json();         
    };
    
    const PUT = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        });
    
        await checkresponse(response);  
        return response.json();         
    };
    
    const DELETE = async (route, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'DELETE',
        });
    
        await checkresponse(response);  
        return response.json();         
    };

    /* AUTH FUNCTIONS */
    const handletokens = (access_token, refresh_token) => {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
    
        setAlert({
            type: 'success',
            description: 'You have authenticated successfully',
        });

        dispatch({
            type: 'AUTHENTICATE',
            payload: { access_token },
        });
    };

    const register = useCallback(async (name, email, password, confirmPassword) => {
        try {
            if (password === confirmPassword) {
                if (!ValidPassword.test(password)) {
                    const response = await POST('auth/signup', { name, email, password });
            
                    if (response.status === 201) {
                        const { access_token, refresh_token } = response.data;
                        handletokens(access_token, refresh_token);

                    } else {
                        setAlert({
                            type: 'warning',
                            description: "Error creating account. Try again",
                        });
                    }
                } else {
                    setAlert({
                        type: 'info',
                        description: "Passwords must have at least one upper/lower, number/special character and 8 letters.",
                    });
                }
                
            } else {
                setAlert({
                    type: 'info',
                    description: "Passwords must match",
                });
            }
        } catch (error) {
            setAlert({
                type: 'error',
                description: "Something went wrong. Try again",
            });
        }
    }, []);

    const login = useCallback(async (email, password) => {
        try {
            const response = await POST('auth/signin', { email, password });
            
            if (response.status === 200) {
                const { access_token, refresh_token } = response.data;
                handletokens(access_token, refresh_token);

            } else {
                setAlert({
                    type: 'warning',
                    description: "Invalid credentials. Try again",
                });
            }
        } catch (error) {
            setAlert({
                type: 'error',
                description: 'Something went wrong. Try again',
            });
        }
    }, []);

    const logout = useCallback( async () => {
        const response = await POST('auth/logout');

        if (response.status === 200) {

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            
            dispatch({ type: 'LOGOUT' });

            setAlert({
                type: 'success',
                description: "Logout sucessfully",
            });
        } else {
            setAlert({
                type: 'warning',
                description: "Logout unsuccessful. Try again",
            });
        }
    }, []);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');

        if (access_token) {
            dispatch({
                type: 'INITIAL',
                payload: { 
                    isAuthenticated: true,
                    access_token
                }
            });
        } else {
            setIsInitialized(true);
        }
    }, []);

    useEffect(() => {
        if (state.isInitialized) {
            setIsInitialized(true);
        }
    }, [state.isInitialized]);

    const memorizedValue = useMemo(() => ({
        isInitialized,
        isAuthenticated: state.isAuthenticated,
        access_token: state.access_token,
        method: 'custom',
        register, login, logout,
        GET, POST, PATCH, PUT, DELETE,
    }), [state.isAuthenticated, state.access_token, isInitialized, register, login, logout]);

    return (
        <AppContext.Provider value={memorizedValue}>
            {children}

            {alert && (
                <AlertIndex alert_type={alert.type} alert_description={alert.description} onClose={() => setAlert(null)} />
            )}
        </AppContext.Provider>
    );
}