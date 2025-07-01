export function createEmptyBoard() {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function addRandomTile(board) {
  const emptyCells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) emptyCells.push([i, j]);
    }
  }
  if (emptyCells.length === 0) return board;
  const [row, col] = emptyCells[getRandomInt(0, emptyCells.length)];
  const newValue = Math.random() < 0.9 ? 2 : 4;
  const newBoard = board.map(row => [...row]);
  newBoard[row][col] = newValue;
  return newBoard;
}


export function moveLeft(board) {
  let newBoard = board.map(row => [...row]);
  let moved = false;
  let score = 0;

  for (let i = 0; i < 4; i++) {
    let row = newBoard[i].filter(val => val !== 0);
    for (let j = 0; j < row.length - 1; j++) {
      if (row[j] === row[j + 1]) {
        row[j] *= 2;
        score += row[j];
        row[j + 1] = 0;
        moved = true;
      }
    }
    row = row.filter(val => val !== 0);
    while (row.length < 4) row.push(0);
    if (row.some((val, idx) => val !== newBoard[i][idx])) moved = true;
    newBoard[i] = row;
  }
  return { board: newBoard, moved, score };
}

export function moveRight(board) {
  let newBoard = board.map(row => [...row]);
  let moved = false;
  let score = 0;

  for (let i = 0; i < 4; i++) {
    let row = newBoard[i].filter(val => val !== 0);
    for (let j = row.length - 1; j > 0; j--) {
      if (row[j] === row[j - 1]) {
        row[j] *= 2;
        score += row[j];
        row[j - 1] = 0;
        moved = true;
      }
    }
    row = row.filter(val => val !== 0);
    while (row.length < 4) row.unshift(0);
    if (row.some((val, idx) => val !== newBoard[i][idx])) moved = true;
    newBoard[i] = row;
  }
  return { board: newBoard, moved, score };
}

export function moveUp(board) {
  let newBoard = board.map(row => [...row]);
  let moved = false;
  let score = 0;

  for (let col = 0; col < 4; col++) {
    let column = [];
    for (let row = 0; row < 4; row++) {
      if (newBoard[row][col] !== 0) column.push(newBoard[row][col]);
    }
    for (let i = 0; i < column.length - 1; i++) {
      if (column[i] === column[i + 1]) {
        column[i] *= 2;
        score += column[i];
        column[i + 1] = 0;
        moved = true;
      }
    }
    column = column.filter(val => val !== 0);
    while (column.length < 4) column.push(0);
    for (let row = 0; row < 4; row++) {
      if (newBoard[row][col] !== column[row]) moved = true;
      newBoard[row][col] = column[row];
    }
  }
  return { board: newBoard, moved, score };
}

export function moveDown(board) {
  let newBoard = board.map(row => [...row]);
  let moved = false;
  let score = 0;

  for (let col = 0; col < 4; col++) {
    let column = [];
    for (let row = 0; row < 4; row++) {
      if (newBoard[row][col] !== 0) column.push(newBoard[row][col]);
    }
    for (let i = column.length - 1; i > 0; i--) {
      if (column[i] === column[i - 1]) {
        column[i] *= 2;
        score += column[i];
        column[i - 1] = 0;
        moved = true;
      }
    }
    column = column.filter(val => val !== 0);
    while (column.length < 4) column.unshift(0);
    for (let row = 0; row < 4; row++) {
      if (newBoard[row][col] !== column[row]) moved = true;
      newBoard[row][col] = column[row];
    }
  }
  return { board: newBoard, moved, score };
}

export function canMove(board) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) return true;
      if (j < 3 && board[i][j] === board[i][j + 1]) return true;
      if (i < 3 && board[i][j] === board[i + 1][j]) return true;
    }
  }
  return false;
}