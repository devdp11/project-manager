import { createContext, useReducer, useCallback, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BASE_URL } from './constants';

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
        case 'LOGIN':
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

export const AuthContext = createContext(null);

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isInitialized, setIsInitialized] = useState(false);

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
        return await response.json();
    };

    const POST = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await response.json();
    };

    const PATCH = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data),
        });
        return await response.json();
    };

    const PUT = async (route, data = {}, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        });
        return await response.json();
    };

    const DELETE = async (route, options = {}) => {
        const response = await fetch(`${BASE_URL}/${route}`, {
            ...defaultOptions(state.access_token),
            ...options,
            method: 'DELETE',
        });
        return await response.json();
    };

    const login = useCallback(async (email, password) => {
        try {
            const response = await POST('auth/signin', { email, password });
            
            if (response) {
                const access_token = response.access_token;
                
                localStorage.setItem('access_token', access_token);
                
                dispatch({
                    type: 'LOGIN',
                    payload: { access_token },
                });
            } else {
                throw new Error(response.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('access_token');
        dispatch({ type: 'LOGOUT' });
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
        login,
        logout,
        GET,
        POST,
        PATCH,
        PUT,
        DELETE,
    }), [state.isAuthenticated, state.access_token, isInitialized, login, logout]);

    return <AuthContext.Provider value={memorizedValue}>
        {children}
    </AuthContext.Provider>;
}