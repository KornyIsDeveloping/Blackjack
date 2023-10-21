import React from 'react';
import Button from '@mui/material/Button';

const RulesButton: React.FC = () => {
    return (
        <Button variant="contained" color="primary" onClick={() => console.log('Rules button clicked')}>Rules</Button>
    );
}

export default RulesButton;
