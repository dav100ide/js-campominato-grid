'use strict';
/* ==========================
      functions
============================ */

function printGrid(gridCells = 100) {
   board.innerHTML = '';

   for (let i = 1; i <= gridCells; i++) {
      const gridCell = document.createElement('div');
      gridCell.innerHTML = i;
      gridCell.classList.add('board__number');
      // al click aggiungo la classe che mette un altro background-color
      gridCell.addEventListener('click', function () {
         this.classList.add('board__number-active');
         console.log(this.innerHTML);
      });

      board.append(gridCell);
   }
}

/* ==========================
      main
============================ */
const board = document.querySelector('.board');
const playBtn = document.getElementById('play-btn');
const difficulty = document.getElementById('difficulty');

playBtn.addEventListener('click', function () {
   let gridCells;
   if (difficulty.value === 'hard') {
      gridCells = 49;
      document.documentElement.style.setProperty('--col-number', '7');
   } else if (difficulty.value === 'medium') {
      gridCells = 81;
      document.documentElement.style.setProperty('--col-number', '9');
   } else if (difficulty.value === 'easy') {
      gridCells = 100;
      document.documentElement.style.setProperty('--col-number', '10');
   }
   printGrid(gridCells);
});

printGrid();
