import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import { UseAuthContext } from './UseAuthContext';
import LoadingScreenIndex from '../../components/templates/loading';

AuthGuard.propTypes = {
    children: PropTypes.node,
};

export default function AuthGuard({ children }) {
    const { isAuthenticated, isInitialized } = UseAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isInitialized) {
            const path = location.pathname.toLowerCase();
            
            const isAuthPage = /^\/(login|register)/.test(path);
            const isProfilePage = /^\/profile/.test(path);
            const isPrivatePage = /^\/home/.test(path);

            if (isAuthenticated && isAuthPage) {
                navigate('/home');
            } else if (!isAuthenticated && isProfilePage) {
                navigate('/');
            } else if (!isAuthenticated && isPrivatePage) {
                navigate('/')
            }
        }
    }, [isAuthenticated, isInitialized, location.pathname, navigate]);

    if (!isInitialized) {
        return <LoadingScreenIndex />
    }

    return <>{children}</>;
}