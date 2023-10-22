import React, { useState } from 'react' //react hook useState
// import { CSSTransition } from 'react-transition-group';
import './MainMenu.css';
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

//styling the h1 (Title)
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

//styling the h2 (Subtitle)
const GameSubtitle = styled('h2')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    fontSize: '1rem',
    marginBottom: '1rem',
    letterSpacing: '2px',
    color: '#fde3a8'
  },
  //phone view
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

//tooltip for the multiplayer button
const Tooltip = styled('span')({
  visibility: 'hidden',
  backgroundColor: 'transparent',
  color: '#fde3a8',
  textAlign: 'center',
  padding: '4px 12px',
  borderRadius: '6px',
  position: 'absolute',
  zIndex: 1,
  top: '100%', 
  left: '35%',
  marginTop: '10px',
  marginLeft: '-60px',
  opacity: 1,
  transition: 'opacity 0.3s'
});

//styling the rules menu container
const RulesContainer = styled('div')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {  
    padding: '25px',
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {

  }, 
  
  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {

  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {

  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {

  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {

  }
});

//styling the text used in rules menu
const RulesMenuText = styled('p')({
  //extra small phone view (prtrait)
  '@media (min-width: 375px) and (max-width: 576px)': {  
    fontSize: '1.2rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },
  
  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
  
  }, 
    
  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
  
  },
  
  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
  
  },
  
  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
  
  },
  
  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
  
  }
});

//button with tooltip (multiplayer button)
const ButtonWithTooltip = styled(StyledMenuButtons)({
  position: 'relative',
  '&:hover span': {
    visibility: 'visible',
    opacity: 1
  }
});

//defining the type for the props (modifying the game title when the rules menu is displayed)
type GameTitleProps = {
  small?: boolean
};

const GameTitleForMenus = styled('h1')<GameTitleProps>(({ small }) => ({
  color: '#fde3a8',
  fontSize: small ? '3rem' : '2.5rem',
  marginTop: small ? '30px' : '50px',
  // ... other styles
}));

const MainMenu: React.FC = () => {
  //this state will determine if the main menu is displayed or if the play menu is displayed
  const [isPlayMenuClicked, setIsPlayMenuClicked] = useState(false); //toggle between main menu and play menu
  const [isRulesClicked, setIsRulesClicked] = useState(false);
  const [isRulesMenuActive, setIsRulesMenuActive] = useState(false); //toggle between rule menu tue/false for changing the title and subtitle size

  return (
    //my styled components GameMenu which holds the buttons, GameTitle and GameSubtitle
    <GameMenuContainer>
      {isRulesMenuActive ? (
      <GameTitleForMenus small={isRulesMenuActive}>
        <HighlightedLetter>B</HighlightedLetter>lack
        <HighlightedLetter>j</HighlightedLetter>ack
      </GameTitleForMenus>
      ) : (
      <GameTitle>
        <HighlightedLetter>B</HighlightedLetter>lack
        <HighlightedLetter>j</HighlightedLetter>ack
      </GameTitle>
      )}
      <GameSubtitle>
        <HighlightedSubtitle>- </HighlightedSubtitle><em>Play it wise!</em><HighlightedSubtitle> -</HighlightedSubtitle>
      </GameSubtitle>
      {isPlayMenuClicked && !isRulesClicked ? (
        //the menu that shows up after the play buttons is clicked
        <>
      <ButtonContainer>
        <StyledMenuButtons variant="outlined">Singleplayer</StyledMenuButtons> 
        <ButtonWithTooltip variant="outlined">Multiplayer<Tooltip>Feature coming soon!</Tooltip></ButtonWithTooltip>
        {/* just switching between true or false value for setIsPlayMenuClicked */}
        <StyledMenuButtons variant="outlined" onClick={() => setIsPlayMenuClicked(false)}>Back</StyledMenuButtons> 
      </ButtonContainer>
        </>
      ) : !isPlayMenuClicked && isRulesClicked ? (
        // display the game rules and the back button
      <RulesContainer>
        <RulesMenuText>Here are the <HighlightedLetter>rules</HighlightedLetter> for newbies...but even for experimented players can be helpfull too!</RulesMenuText>
        <RulesMenuText><em>The <HighlightedLetter>Blackjack</HighlightedLetter> game is played with a deck of <HighlightedLetter>52</HighlightedLetter> cards.
          When the game starts everyone place a bet. The <HighlightedLetter>dealer </HighlightedLetter>delas <HighlightedLetter>1 </HighlightedLetter>
          card faced up to each player, and <HighlightedLetter>1</HighlightedLetter> card faced up to themselves.</em></RulesMenuText>
        <RulesMenuText><em>One more card faced up for the players, besides the <HighlightedLetter>dealer's </HighlightedLetter>one, 
        his second card is faced down.</em></RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <RulesMenuText>Rule 2: ...</RulesMenuText>
        <StyledMenuButtons variant="outlined" onClick={() => {
          setIsRulesClicked(false);
          setIsRulesMenuActive(false); 
        }}>Back</StyledMenuButtons>
      </RulesContainer>
      ) : (
        //the main menu
        <>
      <ButtonContainer>
        {/* adding the onClick event on each button from the main menu */}
        <StyledMenuButtons variant="outlined" onClick={() => setIsPlayMenuClicked(true)}>Play</StyledMenuButtons> 
        <StyledMenuButtons variant="outlined" onClick={() => {
          setIsRulesClicked(true);
          setIsRulesMenuActive(true);
        }}>Rules</StyledMenuButtons>
        <StyledMenuButtons variant="outlined">About Game</StyledMenuButtons>
      </ButtonContainer>
        </>
      )}
    </GameMenuContainer>
  );
}

export default MainMenu;
