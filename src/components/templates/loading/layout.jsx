import { React } from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingScreenLayout = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'background.default', position: 'fixed', top: 0, left: 0, zIndex: 9999 }} >
            <CircularProgress color="inherit" />
        </Box>
    );
}

export default LoadingScreenLayout;