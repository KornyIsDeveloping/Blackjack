import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

//I choosed the styled utility because is dynamic based on props and I found it more flexible  
//styling the entire game container
const GameMenuContainer = styled('div')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50' 
  },

   //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
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
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#2d3e50'
  }
});

//styling the button container to display buttons inline on with > 768 
const ButtonContainer = styled('div')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    gap: '1px'
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    gap: '5px'
  },

   //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px'
  }
});

//styling buttons from menu
const StyledMenuButtons = styled(Button)({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    textTransform: 'none',
    margin: '20px 0',
    padding: '10px 30px',
    width: '200px',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#fde3a8',
    borderColor: '#fde3a8',
      '&:hover': {
        borderColor: '#fde3a8',
      },
  },

    //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
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
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
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

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
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

//styleing the h1 (Title)
const GameTitle = styled('h1')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    fontSize: '4.5rem',
    color: '#fde3a8'
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
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

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    fontSize: '8rem',
    color: '#fde3a8'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    fontSize: '9rem',
    color: '#fde3a8'
  }
});

//styleing the h2 (Subtitle)
const GameSubtitle = styled('h2')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    fontSize: '1rem',
    marginBottom: '1rem',
    letterSpacing: '2px',
    color: '#fde3a8'
  },

  '@media(min-width: 577px) and (max-width: 768px)': {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    letterSpacing: '2px',
    color: '#fde3a8'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    letterSpacing: '3px',
    color: '#fde3a8'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    fontSize: '1.6rem',
    marginBottom: '1rem',
    letterSpacing: '4px',
    color: '#fde3a8'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    fontSize: '1.7rem',
    marginBottom: '1rem',
    letterSpacing: '5px',
    color: '#fde3a8'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    letterSpacing: '6px',
    color: '#fde3a8'
  }
});

//highlighting certain letters for completing the design
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
