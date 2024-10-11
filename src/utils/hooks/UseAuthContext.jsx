import { useContext } from 'react';

import { AuthContext } from './AuthContext.jsx';

export const UseAuthContext = () => {
    const context = useContext(AuthContext);
  
    if (!context) throw new Error('UseAuthContext context must be used inside AuthProvider');
  
    return context;
};