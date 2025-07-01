import React from "react";
import { Box, Typography } from "@mui/material";

const getTileColor = (value) => {
  switch (value) {
    case 0: return "#cdc1b4";
    case 2: return "#eee4da";
    case 4: return "#ede0c8";
    case 8: return "#f2b179";
    case 16: return "#f59563";
    case 32: return "#f67c5f";
    case 64: return "#f65e3b";
    case 128: return "#edcf72";
    case 256: return "#edcc61";
    case 512: return "#edc850";
    case 1024: return "#edc53f";
    case 2048: return "#edc22e";
    default: return "#3c3a32";
  }
};

const getTextColor = (value) => {
  if (value === 2 || value === 4) return "#776e65";
  return "#f9f6f2";
};

function Tile({ value }) {
  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: getTileColor(value),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "3px",
        fontWeight: "bold",
        fontSize: 28,
        boxShadow: value ? 2 : 0,
        transition: "background 0.2s",
        userSelect: "none",
      }}
    >
      {value !== 0 && (
        <Typography
          sx={{
            color: getTextColor(value),
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );
}

export default Tile;