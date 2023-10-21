import React from 'react';
import Button from '@mui/material/Button';

const PlayButton: React.FC = () => {
    return (
        <Button variant="contained" color="primary" onClick={() => console.log('Play button clicked')}>Play</Button>
    );
}

export default PlayButton;
