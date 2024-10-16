import React from 'react';
import AlertLayout from './layout';

const AlertIndex = ({ alert_type, alert_description, onClose }) => {
    return (
        <AlertLayout alert_type={alert_type} alert_description={alert_description} onClose={onClose} />
    );
}

export default AlertIndex;