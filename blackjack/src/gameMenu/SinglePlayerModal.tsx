import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SinglePlayerModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [playerName, setPlayerName] = useState(''); //this is the state for the player's name

    //implementing the start game logic on start button is clicked
    const HandleStartGame = () => {
        console.log('Starting game with player: ${playerName}');
        onClose(); //after start button is clicked the modal will close
    };

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    width: {
                        xs: '90%',
                        sm: '75%',
                        md: '70%',
                        lg: '60%',
                        xl: '55%'
                    },
                    position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#2d3e50',
                        border: '4px solid #fde3a8',
                        borderRadius: '6px',
                        boxShadow: 24,
                        p: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        gap: 2,

                    '& h2': {
                        fontFamily: '"PT Sans Narrow", sans-serif',
                        fontSize: '2.4rem',
                        color: '#fde3a8'
                    },
                    '& h4': {
                        fontFamily: '"PT Sans Narrow", sans-serif',
                        fontSize: '1.4rem',
                        color: '#fde3a8'
                    },
                    // '& input': {
                    //     fontFamily: '"PT Sans Narrow", sans-serif',
                    //     fontSize: '2.4rem',
                    //     padding: '10px',
                    //     border: '2px solid #fde3a8',
                    //     borderRadius: '6px',
                    //     margin: '20px 0',
                    //     width: '100%',
                    //     boxSizing: 'border-box'
                    // },  
                    '& button': {
                        fontFamily: '"PT Sans Narrow", sans-serif',
                        fontSize: '2.4rem',
                        padding: '8px 15px',
                        border: '2px solid #000',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        color: '#fde3a8',
                        transition: '0.3s',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: '#fde3a8',
                        '&:active': {
                          backgroundColor: '#6c726f',
                          
                        }
                      },
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you ready? Enter your name!
                </Typography>
                <Typography id="modal-modal-title" variant="body2" component="h4">
                    <em>- If you don't feel lucky, just click outside this pop-up to exist.</em>
                </Typography>
                <input
                    type="text"
                    placeholder="Gambler's name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '100%',
                        border: '2px solid #fde3a8',
                        borderRadius: '6px',
                        fontStyle: 'oblique',
                        fontSize: '16px',
                        marginTop: '20px',
                        marginBottom: '20px',
                        backgroundColor: '#fde6b1'
                    }}
                />
                <button onClick={HandleStartGame}>Start</button>
            </Box>
        </Modal>
    );
};


export default SinglePlayerModal;
