import { useContext } from 'react';

import { AppContext } from './AppContext.jsx';

export const UseAppContext = () => {
    const context = useContext(AppContext);
  
    if (!context) throw new Error('UseAppContext context must be used inside AppProvider');
  
    return context;
};