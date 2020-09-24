'use strict';

/* Adicionar vs AI
  Adicionar inserir nome
  adicionar botão de reiniciar jogo
*/

const gameBoard = (function() {
  const state = [];
  const board = document.getElementById('grid');

  const createTable = (() => {
    for (let i = 0; i < 9; i++) {
      let playCell = document.createElement('a');

      playCell.setAttribute('href', '#');
      playCell.setAttribute('class', `playCell`);
      playCell.setAttribute('id', `cell${i}`);

      board.appendChild(playCell);
    }
  })();

  const createState = (() => {
    for (let i = 0; i < 9; i++) {
      state.push('');
    }
  })();

  return {
    state: state,
  };
})();

const displayController = (() => {
  let turnCounter = 1;

  document.addEventListener('click', (e) => {
    if (e.target.className.includes('playCell')) {
      let number = e.target.id[4];
      playerTurn(number);
      updateTurn();
    }
  });

  const playerTurn = (number) => {
    if (gameBoard.state[number] !== '') return;
    if (turnCounter % 2 != 0 ) {
      player1.play(number);
      if (checkWin()) showWinScreen(1);
      if (checkTie()) showWinScreen(3);
      return ++turnCounter;
    } else {
      player2.play(number);
      if (checkWin()) showWinScreen(2);
      if (checkTie()) showWinScreen(3);
      return ++turnCounter;
    }
  };

  const showWinScreen = (number) => {
    const winText = document.getElementById('endText');

    document.getElementById('wrapper').style.display = 'block';

    if (number === 1) {
      winText.innerHTML = 'Player 1 Wins';
    } else if (number === 2) {
      winText.innerHTML = 'Player 2 Wins';
    } else if (number === 3) {
      winText.innerHTML = 'TIE';
    }
  };

  const updateTurn = () => {
    const turnText = document.getElementById('turnText');

    if (turnText.innerHTML === 'Player 1 (X) Turn') {
      turnText.innerHTML = 'Player 2 (O) Turn';
    } else {
      turnText.innerHTML = 'Player 1 (X) Turn';
    }
  };

  const checkWin = () => {
    const grid = gameBoard.state.slice();

    for (let i = 0; i < 9; i++) {
      if (grid[i] == '') grid [i] = i;
    }

    if (grid[0] == grid[1] && grid[1] == grid[2]) return true;
    else if (grid[3] == grid[4] && grid[4] == grid[5]) return true;
    else if (grid[6] == grid[7] && grid[7] == grid[8]) return true;
    else if (grid[0] == grid[3] && grid[3] == grid[6]) return true;
    else if (grid[1] == grid[4] && grid[4] == grid[7]) return true;
    else if (grid[2] == grid[5] && grid[5] == grid[8]) return true;
    else if (grid[0] == grid[4] && grid[4] == grid[8]) return true;
    else if (grid[2] == grid[4] && grid[4] == grid[6]) return true;
    else return false;
  };

  const checkTie = () => {
    return (gameBoard.state.includes('')) ? false : true;
  };

  const updateBoard = (number, symbol) => {
    const cell = document.getElementById(`cell${number}`);
    let cellText = document.createTextNode(` ${symbol} `);

    cell.appendChild(cellText);

    gameBoard.state[number] = symbol;
  };

  return {
    updateBoard: updateBoard,
  };
})();

const player = (player, symbol, name) => {
  const playerSymbol = symbol;
  const playerType = player;
  const playerName = name;

  const play = (number) => {
    displayController.updateBoard(number, playerSymbol);
  };

  return {play};
};

const player1 = player('human', 'X', 'Jogador1');
const player2 = player('human', 'O', 'Jogador2');