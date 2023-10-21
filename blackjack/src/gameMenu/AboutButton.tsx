import React from 'react';
import Button from '@mui/material/Button';

const AboutButton: React.FC = () => {
    return (
        <Button variant="contained" color="primary" onClick={() => console.log('About Game button clicked')}>About Game</Button>
    );
}

export default AboutButton;
