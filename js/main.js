'use strict';
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/* ==========================
      functions
============================ */

function getGrid(gridCells = 100) {
   for (let i = 1; i <= gridCells; i++) {
      const gridCell = document.createElement('div');
      gridCell.innerHTML = i;
      gridCell.classList.add('board__number');
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
let gridCells;
const difficulty = document.getElementById('difficulty');

playBtn.addEventListener('click', function () {
   board.innerHTML = '';
   if (difficulty.value === 'hard') {
      gridCells = 49;
      document.documentElement.style.setProperty('--col-number', '7');
   } else if (difficulty.value === 'medium') {
      gridCells = 81;
      document.documentElement.style.setProperty('--col-number', '9');
   } else if (difficulty.value === 'easy') {
      gridCells = 100;
   }
   getGrid(gridCells);
});
getGrid(gridCells);
