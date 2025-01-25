const getLiveCounts = (i, j, row, col, board) => {
  var deli = [-1, -1, -1, 0, 0, 1, 1, 1];
  var delj = [-1, 0, 1, -1, 1, -1, 0, 1];
  var count = 0;
  for (var k = 0; k < 8; k++) {
    var newi = i + deli[k];
    var newj = j + delj[k];
    if (newi >= 0 && newi < row && newj >= 0 && newj < col && board[newi][newj])
      count++;
  }
  return count;
};

export const gameOfLife = function (board) {
  var row = board.length;
  var col = board[0].length;

  var temp = Array(row)
    .fill()
    .map(() => Array(col).fill(0));

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      var liveCount = getLiveCounts(i, j, row, col, board);
      if (board[i][j] === 0) {
        if (liveCount === 3) temp[i][j] = 1;
      } else {
        if (liveCount === 2 || liveCount === 3) temp[i][j] = 1;
      }
    }
  }
  return temp;
};
