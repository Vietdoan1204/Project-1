import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function ScoreBoard({ score, bestScore }) {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 2 }}>
      <Paper elevation={3} sx={{ p: 2, minWidth: 100 }}>
        <Typography variant="subtitle2" color="text.secondary">
          SCORE
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {score}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, minWidth: 100 }}>
        <Typography variant="subtitle2" color="text.secondary">
          BEST
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {bestScore}
        </Typography>
      </Paper>
    </Box>
  );
}

export default ScoreBoard;