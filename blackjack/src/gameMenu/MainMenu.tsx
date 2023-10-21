import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

//I choosed the styled utility because is dynamic based on props 
const GameMenuContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2a5c5d'
});

const StyledMenuButtons = styled(Button)({
    textTransform: 'none',
    margin: '20px 0',
    padding: '10px 30px',
    width: '200px',
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#9a2619',
    borderColor: '#ffffff',
    '&:hover': {
        borderColor: '#9a2619',
    }
});

const MainMenu: React.FC = () => {
  return (
    <GameMenuContainer>
      <StyledMenuButtons variant="outlined">Play</StyledMenuButtons> 
      <StyledMenuButtons variant="outlined">Rules</StyledMenuButtons>
      <StyledMenuButtons variant="outlined">About Game</StyledMenuButtons>
    </GameMenuContainer>
  );
}

export default MainMenu;
