
import { filterEspecies } from './data.js';
import { orderByAlfa } from './data.js';
import { innerHTMLCarousel } from './carousel.js';
import { carouselHumanFilter } from './carousel.js';
import { createCarouselPage } from './carousel.js';
import { carouselAlienFilter } from './carousel.js';
import { carouselOrderFilter } from './carousel.js';
import data from './data/rickandmorty/rickandmorty.js';

// let menu = document.querySelector(".nav");
// menu.addEventListener('click', function (e) {
//   e.preventDefault();
//   menu.style.display = "block";
//   if(menu.style.display == "block"){
//     let newMenu = menu.style.display = "none";
//   }
//   return newMenu
// });

const verse = document.querySelector('.card1');
const infoVerse = document.querySelector('.back');
const row = document.querySelector('.row-wrapper');

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

let pageA = 1;
let pageO = 1;
let pageAll = 1;
let pageH = 1;
let page = 1;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowRight.addEventListener('click', function (e) {
  e.preventDefault();
  pageAll += 1;
  const thirdCard = (pageAll * 3) - 1;
  const secondCard = thirdCard - 1;
  const firstCard = secondCard - 1;
  console.log(pageAll, firstCard, secondCard,thirdCard);
  createCarouselPage(pageAll,row, data.results[firstCard].id, data.results[secondCard].id, data.results[thirdCard].id);
});

arrowLeft.addEventListener('click', function (e) {
  e.preventDefault();
  pageAll -= 1;
  const thirdCard = (pageAll * 3) - 1;
  const secondCard = thirdCard - 1;
  const firstCard = secondCard - 1;
  console.log(pageAll, firstCard, secondCard,thirdCard);
  console.log(pageAll);
  createCarouselPage(page, row, data.results[firstCard].id, data.results[secondCard].id, data.results[thirdCard].id);
});

const alpha = document.getElementById("order");
const results = data.results;
const ordened = orderByAlfa(results);

alpha.addEventListener('click', function (e) {
  e.preventDefault();
  if (page >= 1) {
    const thirdCard = (pageO * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;
    pageO += 1
    const titleOrder = "A-Z:";
   
    document.querySelector('.one').innerHTML = innerHTMLCarousel(titleOrder,"row1", "orderL", "orderR", ordened[firstCard].id, ordened[secondCard].id, ordened[thirdCard].id);
  };
    const arrowLeftOrder = document.querySelector('#orderL');
    const arrowRightOrder = document.querySelector('#orderR');
      arrowLeftOrder.addEventListener('click', function (e) {
      e.preventDefault();
      pageO -= 1;
      carouselOrderFilter(pageO, ordened);
      });

      arrowRightOrder.addEventListener('click', function (e) {
      e.preventDefault();
      pageO += 1;
      carouselOrderFilter(pageO, ordened);
      });

});

const specie = document.getElementById("species");
const humans = filterEspecies(data.results, "Human");
const alien = filterEspecies(data.results, "Alien");
const robot = filterEspecies(data.results, "Robot");
const humanoid = filterEspecies(data.results, "Humanoid");

specie.addEventListener('click', function (e) {
  e.preventDefault();
  if (page >= 1) {
    const thirdCard = (page * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;
    page += 1
    const titleH = "humanos:";
    const titleA = "Aliens:";
    const titleR = "Robos:";
    const titleHD = "Humanoides:";
    document.querySelector('.one').innerHTML = innerHTMLCarousel(titleH,"row1", "humanL", "humanR", humans[firstCard].id, humans[secondCard].id, humans[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel(titleA,"row2", "alienL", "alienR", alien[firstCard].id, alien[secondCard].id, alien[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel(titleR,"row3", "robotL", "robotR",robot[firstCard].id, robot[secondCard].id, robot[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel(titleHD,"row4", "humanoidL", "humanoidR",humanoid[firstCard].id, humanoid[secondCard].id, humanoid[thirdCard].id);
  };
    const arrowLeftHuman = document.querySelector('#humanL');
    const arrowRightHuman = document.querySelector('#humanR');
      arrowLeftHuman.addEventListener('click', function (e) {
      e.preventDefault();
      pageH -= 1;
      carouselHumanFilter(pageH, humans);
      });

      arrowRightHuman.addEventListener('click', function (e) {
      e.preventDefault();
      pageH += 1;
      carouselHumanFilter(pageH, humans);
      });

    const arrowLeftAlien = document.querySelector('#alienL');
    const arrowRightAlien = document.querySelector('#alienR');

    arrowLeftAlien.addEventListener('click', function (e) {
      e.preventDefault();
      console.log("arrowLeftAlien");
      pageA -= 1;
      carouselAlienFilter(pageA, alien);
      });

      arrowRightAlien.addEventListener('click', function (e) {
      e.preventDefault();
      pageA += 1;
      carouselAlienFilter(pageA, alien);
      });

});


  





