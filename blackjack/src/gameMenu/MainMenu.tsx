import React from 'react'
import { Button, ButtonBase, useTheme } from '@mui/material'
import { styled } from '@mui/system'

//I choosed the styled utility because is dynamic based on props 
const GameMenuContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#2d3e50'
});

const StyledMenuButtons = styled(Button)({
  textTransform: 'none',
  margin: '20px 0',
  padding: '10px 30px',
  width: '200px',
  fontSize: '1.2rem',
  textAlign: 'center',
  color: '#fde3a8',
  borderColor: '#fde3a8',
    '&:hover': {
      borderColor: '#fde3a8',
    },
});

const GameTitle = styled('h1')({
  fontSize: '5rem',
  marginBottom: '5rem',
  color: '#fde3a8'
});

const HighlightedLetter = styled('span')({
  color: '#96281b'
});

const MainMenu: React.FC = () => {
  return (
    <GameMenuContainer>
      <GameTitle>
        <HighlightedLetter>B</HighlightedLetter>lack
        <HighlightedLetter>j</HighlightedLetter>ack
      </GameTitle>
      <StyledMenuButtons variant="outlined">Play</StyledMenuButtons> 
      <StyledMenuButtons variant="outlined">Rules</StyledMenuButtons>
      <StyledMenuButtons variant="outlined">About Game</StyledMenuButtons>
    </GameMenuContainer>
  );
}

export default MainMenu;
