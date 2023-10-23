import React, { useState } from 'react' //react hook useState
// import { CSSTransition } from 'react-transition-group';
import SinglePlayerModal from './SinglePlayerModal';
import { Button } from '@mui/material'
import { styled } from '@mui/system'
import './MainMenu.css';

//I choosed the styled utility because is dynamic based on props and I found it more flexible  
//styling the entire game container
const GameMenuContainer = styled('div')({
  //extra small phone view (portrait)
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
  //extra small phone view (portrait)
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
  //extra small phone view (portrait)
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

//styling the back button from rule and about game menu on smaller devices
const BackButtonFromSmallDevices = styled(StyledMenuButtons)({
  //extra small phone view (portrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

//styling the h1 (Title)
const GameTitle = styled('h1')({
  //extra small phone view (portrait)
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
  //extra small phone view (portrait)
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
  //extra small phone view (portrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    padding: '35px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    padding: '45px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    padding: '55px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    padding: '55px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    padding: '55px',
    maxHeight: '80vh',
    overflowY: 'auto'
  }
});

//styling the text used in rules menu
const RulesMenuText = styled('p')({
  //extra small phone view (portrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    fontSize: '1.2rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    fontSize: '1.5rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    fontSize: '1.5rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  }
});

//styling the about menu container
const AboutContainer = styled('div')({
  //extra small phone view (portrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    padding: '25px',
    maxHeight: '80vh',
    overflowY: 'auto'
  }
});

//styling the text used in about menu
const AboutMenuText = styled('p')({
  //extra small phone view (portrait)
  '@media (min-width: 375px) and (max-width: 576px)': {
    fontSize: '1.2rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8',
  },

  //phone view
  '@media(min-width: 577px) and (max-width: 768px)': {
    fontSize: '1.5rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //tablet view
  '@media(min-width: 769px) and (max-width: 993px)': {
    fontSize: '1.5rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //desktop view
  '@media(min-width: 994px) and (max-width: 1200px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //large desktop view
  '@media (min-width: 1201px) and (max-width: 1400px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
  },

  //extra lerge desktop view
  '@media (min-width: 1401px) and (max-width: 1900px)': {
    fontSize: '1.6rem',
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#fde3a8'
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

//defining the type for the props (modifying the game title when the rules and about menus are displayed)
type GameTitleProps = {
  small?: boolean
};

type GameSubtitleProps = {
  small?: boolean
};

//creating the game title changing font in the rules and about menus
const GameTitleForMenus = styled('h1')<GameTitleProps>(({ small }) => ({
  color: '#fde3a8',
  fontSize: small ? '2.5rem' : '3.6rem',
  marginTop: small ? '30px' : '50px',
}));

const GameSubtitleForMenus = styled('h2')<GameSubtitleProps>(({ small }) => ({
  color: '#fde3a8',
  fontSize: small ? '1.3rem' : '2.5rem',
  marginTop: small ? '10px' : '50px',
}));

const MainMenu: React.FC = () => {
  //this state will determine if the main menu is displayed or if the play menu is displayed
  const [isPlayMenuClicked, setIsPlayMenuClicked] = useState(false); //toggle between main menu and play menu
  const [isRulesClicked, setIsRulesClicked] = useState(false);
  const [isRulesMenuActive, setIsRulesMenuActive] = useState(false); //toggle between rule menu tue/false for changing the title and subtitle size
  const [isAboutMenuClicked, setIsAboutMenuClicked] = useState(false);
  const [isAboutMenuActive, setIsAboutMenuActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //determines whether the modal is open or not

  return (
    //renders the modal for singleplayer 
    //my styled components GameMenu which holds the buttons, GameTitle and GameSubtitle
    <GameMenuContainer>
      {/* renders game title */}
      {isRulesMenuActive || isAboutMenuActive ? (
        <GameTitleForMenus small={isRulesMenuActive || isAboutMenuActive}>
          <HighlightedLetter>B</HighlightedLetter>lack
          <HighlightedLetter>j</HighlightedLetter>ack
        </GameTitleForMenus>
      ) : (
        <GameTitle>
          <HighlightedLetter>B</HighlightedLetter>lack
          <HighlightedLetter>j</HighlightedLetter>ack
        </GameTitle>
      )}

      {/* renders game subtitle */}
      {isRulesMenuActive || isAboutMenuActive ? (
        <GameSubtitleForMenus small={isRulesMenuActive || isAboutMenuActive}>
          <HighlightedSubtitle>- </HighlightedSubtitle><em>Play it wise!</em><HighlightedSubtitle> -</HighlightedSubtitle>
        </GameSubtitleForMenus>
      ) : (
        <GameSubtitle>
          <HighlightedSubtitle>- </HighlightedSubtitle><em>Play it wise!</em><HighlightedSubtitle> -</HighlightedSubtitle>
        </GameSubtitle>
      )}

      {/* renders game */}
      {isPlayMenuClicked && !isRulesClicked && !isAboutMenuClicked ? (
        //the menu that shows up after the play buttons is clicked
        <>
          <ButtonContainer>
            <StyledMenuButtons variant="outlined"onClick={() => setIsModalOpen(true)}>Singleplayer</StyledMenuButtons>
            {isModalOpen && <SinglePlayerModal onClose={() => setIsModalOpen(false)} />}
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
            card faced up to each player, and <HighlightedLetter>1</HighlightedLetter> card faced up to themselves. One more card faced up for the players, besides the <HighlightedLetter>dealer's </HighlightedLetter>one,
            his second card is faced down. Once the <HighlightedLetter>dealer </HighlightedLetter>has gone around the table, they will flip thier faced down card.</em></RulesMenuText>
          <RulesMenuText><HighlightedLetter>&#9827;&#9827;&#9827;&#9827; </HighlightedLetter>How to keep track of the score?<HighlightedLetter> &#9827;&#9827;&#9827;&#9827;</HighlightedLetter></RulesMenuText>
          <RulesMenuText><em>If your hand sums more than <HighlightedLetter>21 </HighlightedLetter>is called <HighlightedLetter>BUST</HighlightedLetter>, and you are out of the game this round.</em></RulesMenuText>
          <RulesMenuText><em>If your <HighlightedLetter>2 </HighlightedLetter>faced up cards total <HighlightedLetter>21 </HighlightedLetter>
            you automatically win <HighlightedLetter>ONE AND A HALF TIMES YOUR BET FROM THE DEALER </HighlightedLetter>and you are done for that round. Otherwise the <HighlightedLetter>dealer </HighlightedLetter>
            asks whether you want another card from the top of the deck. If you want one say <HighlightedLetter>HIT</HighlightedLetter>, if you don't want any more cards say <HighlightedLetter>STAY</HighlightedLetter>.</em></RulesMenuText>
          <RulesMenuText><em>If the <HighlightedLetter>dealer's </HighlightedLetter>hand sums <HighlightedLetter>16 </HighlightedLetter>or less, he must draw another card. Otherwise if his
            hand sums <HighlightedLetter>17 </HighlightedLetter>or heighter, he must stay with his hand.</em></RulesMenuText>
          <RulesMenuText><em>If the <HighlightedLetter>dealer BUSTS</HighlightedLetter> every player that's still in that round <HighlightedLetter>WINS TWICE HIS BET</HighlightedLetter>.
            However if the <HighlightedLetter>dealer </HighlightedLetter>doesn't <HighlightedLetter>BUSTS </HighlightedLetter>only the players whose hands sums more that the
            <HighlightedLetter> dealer's </HighlightedLetter>WIN TWICE THEIR BET </em>everyone else loses their initial bet. There is no limit on how many cards can you ask for, but once your hand totals more than <HighlightedLetter>21 </HighlightedLetter>you <HighlightedLetter>BUST </HighlightedLetter>
            and the <HighlightedLetter>dealer </HighlightedLetter>gets your bet.</RulesMenuText>
          <RulesMenuText><em>Once the round is over all of the players place a new bet and another round begins.</em> <HighlightedLetter>ENJOY!</HighlightedLetter></RulesMenuText>
          <BackButtonFromSmallDevices variant="outlined" onClick={() => {
            setIsRulesClicked(false);
            setIsRulesMenuActive(false);
          }}>Back</BackButtonFromSmallDevices>
        </RulesContainer>
      ) : isAboutMenuClicked ? (
        //display the about menu content and the back button
        <AboutContainer>
          <AboutMenuText>Hello there <HighlightedLetter>gambler</HighlightedLetter>, I'm Mr. Blacky, make yourself confortable and let me indroduce you to this card game named <HighlightedLetter>Blackjack </HighlightedLetter>,
            as known as <HighlightedLetter>21'</HighlightedLetter>.</AboutMenuText>
          <AboutMenuText><em>It said that this card game originated in <HighlightedLetter>France </HighlightedLetter>during the 1700', the cards initially were called "Vingt-et-Un".</em></AboutMenuText>
          <AboutMenuText><em>The main goal of this game is to have a hand that totals higher than the <HighlightedLetter>dealer's </HighlightedLetter>one, but doesn't totals
            grather than <HighlightedLetter>21</HighlightedLetter>.</em></AboutMenuText>
          <AboutMenuText><HighlightedLetter>&#9827;&#9827;&#9827;&#9827; </HighlightedLetter>These are the cards!<HighlightedLetter> &#9827;&#9827;&#9827;&#9827;</HighlightedLetter></AboutMenuText>
          <AboutMenuText><em>Cards from <HighlightedLetter>2 </HighlightedLetter>to <HighlightedLetter>10 </HighlightedLetter>are scored using the face values.</em></AboutMenuText>
          <AboutMenuText><em><HighlightedLetter>Jacks</HighlightedLetter>, <HighlightedLetter>Queens </HighlightedLetter>and <HighlightedLetter>Kings</HighlightedLetter> are equal to <HighlightedLetter>10</HighlightedLetter>.</em></AboutMenuText>
          <AboutMenuText><em><HighlightedLetter>Aces </HighlightedLetter>can be either <HighlightedLetter>1 </HighlightedLetter>or <HighlightedLetter>10</HighlightedLetter>. You can choose
            their value throughout the round if you have one of this card.</em></AboutMenuText>
          <AboutMenuText><em>An <HighlightedLetter>Ace </HighlightedLetter> and one from the cards that scores <HighlightedLetter>10 </HighlightedLetter> are equl to <HighlightedLetter>21 </HighlightedLetter>and is
            known as <HighlightedLetter>Blackjack</HighlightedLetter>.</em></AboutMenuText>
          <AboutMenuText><em>That's all, good luck! </em></AboutMenuText>
          <BackButtonFromSmallDevices variant="outlined" onClick={() => {
            setIsAboutMenuClicked(false);
            setIsAboutMenuActive(false);
          }}>Back</BackButtonFromSmallDevices>
        </AboutContainer>
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
            <StyledMenuButtons variant="outlined" onClick={() => {
              setIsAboutMenuClicked(true);
              setIsAboutMenuActive(true);
            }}>About Game</StyledMenuButtons>
          </ButtonContainer>
        </>
      )}
    </GameMenuContainer>
  );
}

export default MainMenu;


