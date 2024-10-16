import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';

const AlertLayout = ({ alert_type, alert_description, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 10000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
            <Alert severity={alert_type} onClose={onClose}>
                {alert_description}
            </Alert>
        </div>
    );
}

export default AlertLayout;
