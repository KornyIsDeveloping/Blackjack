import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

//I choosed the styled utility because is dynamic based on props and I found it more flexible  
const GameMenuContainer = styled('div')({
   //phone view
  '@media(min-width: 576px) and (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50'
  },
     
  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50'
  },

  //desktop view
  '@media (min-width: 994px) and (max-width: 1200px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50'
  }
});

const ButtonContainer = styled('div')({
  //phone view
  '@media(min-width: 576px) and (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    gap: '10px'
  },

   //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  }
  
});

const StyledMenuButtons = styled(Button)({
    //phone view
  '@media(min-width: 576px) and (max-width: 768px)': {
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
   },
  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
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
  },
    
  //desktop view
  '@media (min-width: 994px) and (max-width: 1200px)': {
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
  }

});

const GameTitle = styled('h1')({
  //phone view
  '@media(min-width: 576px) and (max-width: 768px)': {
    fontSize: '5rem',
    color: '#fde3a8'
  },
  
  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    fontSize: '6rem',
    color: '#fde3a8'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    fontSize: '7rem',
    color: '#fde3a8'
  },
});

const GameSubtitle = styled('h2')({
  '@media(min-width: 576px) and (max-width: 768px)': {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    letterSpacing: '2px',
    color: '#fde3a8'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    fontSize: '1.4rem',
    marginBottom: '2rem',
    letterSpacing: '3px',
    color: '#fde3a8'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    fontSize: '1.6rem',
    marginBottom: '2rem',
    letterSpacing: '4px',
    color: '#fde3a8'
  },
});

const HighlightedLetter = styled('span')({
  color: '#96281b'
});

const HighlightedSubtitle = styled('span')({
  color: '#96281b'
});

const MainMenu: React.FC = () => {
  return (
    //my styled components GameMenu which holds the buttons, GameTitle and GameSubtitle
    <GameMenuContainer>
      <GameTitle>
        <HighlightedLetter>B</HighlightedLetter>lack
        <HighlightedLetter>j</HighlightedLetter>ack
      </GameTitle>
      <GameSubtitle>
        <HighlightedSubtitle>- </HighlightedSubtitle><em>Play it wise!</em><HighlightedSubtitle> -</HighlightedSubtitle>
      </GameSubtitle>
      <ButtonContainer>
        <StyledMenuButtons variant="outlined">Play</StyledMenuButtons> 
        <StyledMenuButtons variant="outlined">Rules</StyledMenuButtons>
        <StyledMenuButtons variant="outlined">About Game</StyledMenuButtons>
      </ButtonContainer>
    </GameMenuContainer>
  );
}

export default MainMenu;
