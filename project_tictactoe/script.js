'use strict';

const gameBoard = (function() {
  const state = [];
  const board = document.getElementById('grid');

  const _createTable = (() => {
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

  const updateBoard = (number, symbol) => {
    const cell = document.getElementById(`cell${number}`);
    state[number] = symbol;
    updateBoard (number, symbol);
  };

  return {
    state: state,
    updateBoard: updateBoard,
  };
})();

const displayController = (() => {
  document.addEventListener('click', (e) => {
    if(e.target.className.includes('playCell')) {
      console.log("ohoyworking");
    }
    
  });
})();

const player = () => {

};

