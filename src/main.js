
import { filterEspecies } from './data.js';
import { filterStatus } from './data.js';
import { filterOrigin } from './data.js';
import { filterGender } from './data.js';
import { orderByAlfa } from './data.js';
import { innerHTMLCarousel } from './carousel.js';
import { carouselHumanFilter } from './carousel.js';
import { createCarouselPage } from './carousel.js';
import { carouselAlienFilter } from './carousel.js';
import { carouselOrderFilter } from './carousel.js';
import data from './data/rickandmorty/rickandmorty.js';

let nav = document.querySelector(".expand");
let menu = document.querySelector(".menu")

nav.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(menu.classList);
  if(menu.classList.contains("menu-block")){
    menu.classList.remove("menu-block");
    menu.classList.add("menu-none");
  }else{
    menu.classList.remove("menu-none");
    menu.classList.add("menu-block");
  }
});

const verse = document.querySelector('.card1');
const infoVerse = document.querySelector('.back');
const row = document.querySelector('.row-wrapper');

verse.addEventListener('mouseenter', enter)
 function enter(name, status, spicies, gender, origin, id){
 infoVerse.innerHTML=`<img src="image/verse.jpg"
 alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
 <li id="name1">Nome:${name}</li>
 <li id="status1">${status}</li>
 <li id="spicies1">${spicies}</li>
 <li id="gender1">${gender}</li>
 <li id="origin1">${origin}</li>
 <li id="code1">${id}</li>
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

const status = document.getElementById("status");
const alive = filterStatus(data.results, "Alive");
const dead = filterStatus(data.results, "Dead");
const unknow = filterStatus(data.results, "Unknow");

let pageAlive = 1;
let pageDead = 1;
let pageUnknow = 1;

status.addEventListener('click', function (e) {
  e.preventDefault();
  if (pageAlive >= 1) {
    const thirdCard = (page * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;
    page += 1
    const titleAlive = "Vivo:";
    const titleDead = "Morto:";
    const titleUnkwon = "Desconhecido:";
    
    document.querySelector('.one').innerHTML = innerHTMLCarousel(titleAlive,"row1", "aliveL", "aliveR", alive[firstCard].id, alive[secondCard].id, alive[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel(titleDead,"row2", "deadL", "deadR", dead[firstCard].id, dead[secondCard].id, dead[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel(titleUnkwon,"row3", "unknowL", "unknowR", unknow[firstCard].id, unknow[secondCard].id, unknow[thirdCard].id);
    
  };
    const arrowLeftAlive = document.querySelector('#aliveL');
    const arrowRightAlive = document.querySelector('#aliveR');
      arrowLeftAlive.addEventListener('click', function (e) {
      e.preventDefault();
      pageAlive -= 1;
      carouselHumanFilter(pageAlive, alive);
      });

      arrowRightAlive.addEventListener('click', function (e) {
      e.preventDefault();
      pageAlive += 1;
      carouselHumanFilter(pageAlive, alive);
      });

    const arrowLeftDead = document.querySelector('#deadL');
    const arrowRightDead = document.querySelector('#deadR');

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


  





