
import { test } from 'picomatch';
import { filterEspecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

const verse = document.querySelector('.card1');
const infoVerse = document.querySelector('.back');
verse.addEventListener('mouseenter', enter)
 function enter(){
 infoVerse.innerHTML=`<img src="image/verse.jpg"
 alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
 <li id="name1">Nome:${'test'}</li>
 <li id="status1">STATUS</li>
 <li id="spicies1">Especie</li>
 <li id="gender1">Genero</li>
 <li id="origin1">Origen</li>
 <li id="code1">1</li>
 </section>`
 };

let page = 1;          //contador
const arrowLeft = document.querySelector('.arrow-left'); //pega o elemento (css) 'se usar . pega a classe # pega o ID'
const arrowRight = document.querySelector('.arrow-right');

arrowRight.addEventListener('click', function (e) {
  e.preventDefault();
  if (page >= 1) {
    page += 1
    const thirdCard = (page * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;

    document.querySelector('.row-wrapper').innerHTML = `
    <section class="card1">
    <ul>
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[firstCard].id}.jpeg" class="item current-item">
      
    </ul>
  </section>
  <section class="card2">
    <ul>
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[secondCard].id}.jpeg" class="item current-item">
      
    </ul>
  </section>
  <section class="card3">
    <ul>
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[thirdCard].id}.jpeg" class="item current-item">
      
    </ul>
  </section>`
  } else if (page = 164) {  //164.3333333
    alert('Você já está no ultimo personagem 👀');
  }
});

arrowLeft.addEventListener('click', function (e) {
  e.preventDefault();
  if (page > 1) {
    page -= 1;
    const thirdCard = page * 3;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;

    document.querySelector('.row-wrapper').innerHTML = `
  <section class="card1">
   <ul>
     <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${firstCard}.jpeg" class="item current-item">
     
   </ul>
 </section>
 <section class="card2">
   <ul>
     <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${secondCard}.jpeg" class="item current-item">
     
   </ul>
 </section>
 <section class="card3">
   <ul>
     <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${thirdCard}.jpeg" class="item current-item">
     
   </ul>
 </section>`
  } else {
    alert('Você já está no primeiro personagem 👀');
  }
});

const specie = document.getElementById("species");
page = 1

specie.addEventListener('click', function (e) {
  e.preventDefault();
  // const newSize = data.resultsHuman.length -1
  if (page >= 1) {
    page += 1
    const thirdCard = (page * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;
    const humans = filterEspecies(data.results, "Human");
    const alien = filterEspecies(data.results, "Alien");
  
    document.querySelector('.one').innerHTML = `
      <style>
      .2{
      position:relative;     
      }
      </style>
        <section id="1" class = "container">
        <button id="1" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="1" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="1" class="row-wrapper">
        <section id="1" class="card1">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humans[firstCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card2">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humans[secondCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card3">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humans[thirdCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        </section>
        </section>
        
      
        <main class ="two">
        <section id="2" class = "container">
        <button id="2" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="2" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="2" class="row-wrapper">
        <section id="2" class="card1">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${alien[firstCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card2">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${alien[secondCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card3">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${alien[thirdCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
      </section>
    </section>
    </main>`
  } else if (page = 81) {  //164.3333333
    alert('Você já está no ultimo personagem 👀');
  }
});












const status = document.getElementById("status");


status.addEventListener('click', function (e) {
  e.preventDefault();

  console.log("Clicou em estado de vida");
});

const gender = document.getElementById("gender");


gender.addEventListener('click', function (e) {
  e.preventDefault();

  alert("Clicou em genero");
});

const origin = document.getElementById("origin");


origin.addEventListener('click', function (e) {
  e.preventDefault();

  alert("Clicou em planeta");
});
