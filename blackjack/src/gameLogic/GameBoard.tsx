import React from 'react';

interface GameBoardProps {
  playerName: string;
}

const GameBoard: React.FC<GameBoardProps> = ({ playerName }) => {
  return (
    <div>
      <h1>Welcome, {playerName}</h1>
      {/* Rest of your game board UI */}
    </div>
  );
}

export default GameBoard;
