import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Tile from "./Tile";
import {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  addRandomTile,
  canMove,
  createEmptyBoard
} from "../utils/gameLogic";

function Board({ setScore, resetFlag }) {
  const [board, setBoard] = useState(() => addRandomTile(addRandomTile(createEmptyBoard())));

  // Reset board khi resetFlag thay đổi
  useEffect(() => {
    setBoard(addRandomTile(addRandomTile(createEmptyBoard())));
    setScore && setScore(0);
  }, [resetFlag, setScore]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      let result;
      if (e.key === "ArrowLeft") result = moveLeft(board);
      if (e.key === "ArrowRight") result = moveRight(board);
      if (e.key === "ArrowUp") result = moveUp(board);
      if (e.key === "ArrowDown") result = moveDown(board);

      if (result && result.moved) {
        const newBoard = addRandomTile(result.board);
        setBoard(newBoard);
        setScore && setScore((prev) => prev + result.score);

        // Kiểm tra thắng game
        if (newBoard.flat().includes(2048)) {
          setTimeout(() => {
            alert("You win!");
          }, 100);
        }
        
        // Kiểm tra game over
        if (!canMove(newBoard)) {
          setTimeout(() => {
            alert("Game Over!");
          }, 100);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [board, setScore]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridTemplateRows: 'repeat(4, 100px)',
        gap: '15px',
        backgroundColor: '#bbada0',
        padding: '15px',
        borderRadius: '10px',
        width: 'max-content',
        margin: '0 auto',
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </Box>
  );
}

export default Board;