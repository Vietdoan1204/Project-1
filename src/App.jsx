import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);

  const handleNewGame = () => {
    setScore(0);
    setResetFlag(flag => !flag); // Đổi flag để reset Board
  };

  // Cập nhật bestScore khi score tăng
  React.useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score, bestScore]);

  return (
    <Container sx={{ textAlign: 'center', mt: 4, display: 'flex',alignItems: 'center', gap: 5 }}>
      <Box>
      <h1>2048 game</h1>
      <ScoreBoard score={score} bestScore={bestScore} />
      <Button variant="contained" onClick={handleNewGame} sx={{ mb: 2 }}>New Game</Button>
      </Box>
      <Box>
      <Board setScore={setScore} resetFlag={resetFlag} />
      </Box>
    </Container>
  );
}

export default App;
