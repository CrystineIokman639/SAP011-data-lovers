
import { filterEspecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

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

let page = 1;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

function createCarouselPage(page){
  const thirdCard = (page * 3) - 1;
  const secondCard = thirdCard - 1;
  const firstCard = secondCard - 1;
  if (page >= 1) {
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
  }else if (thirdCard == data.results.length-1){  
    alert('Você já está no ultimo personagem 👀');
  }else if (page <= 1 ){
    alert('Você já está no primeiro personagem 👀');
  }
};

arrowRight.addEventListener('click', function (e) {
  e.preventDefault();
  page += 1;
  createCarouselPage(page);
});

arrowLeft.addEventListener('click', function (e) {
  e.preventDefault();
  page -= 1;
  createCarouselPage(page);
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
    document.querySelector('.one').innerHTML = `
        <section id="1" class = "container">
        <button id="humanL" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="humanR" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="row1" class="row-wrapper">
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
        <button id="alienL" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="alienR" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="row2" class="row-wrapper">
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
    </main>
    <main class ="three">
    <section id="3" class = "container">
        <button id="robotL" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="robotR" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="row3" class="row-wrapper">
        <section id="3" class="card1">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${robot[firstCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card2">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${robot[secondCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card3">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${robot[thirdCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        </section>
        </section>
         <main class ="four">
        <section id="4" class = "container">
        <button id="humanoid" class="arrow-left" aria-label="previous image">&#9664;</button>
        <button id="humanoidR" class="arrow-right" aria-label="next-image">&#9654;</button>
        <section id="row4" class="row-wrapper">
        <section id="4" class="card1">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humanoid[firstCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card2">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humanoid[secondCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
        <section class="card3">
          <ul>
          <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${humanoid[thirdCard].id}.jpeg" class="item current-item">
          </ul>
        </section>
      </section>
    </section>
    </main>
    `
  };
      function createCarouselFilter(page, humans){
        if (page >= 1){
          const thirdCard = (page * 3) -1;
          const secondCard = thirdCard - 1;
          const firstCard = secondCard - 1;
          document.querySelector('#row1').innerHTML = `
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
            </section>`
          }else if(thirdCard == humans.length -1){  
              alert('Você já está no ultimo personagem 👀');
            }else if(page <= 1){
              alert('Você já está no primeiro personagem 👀');
            };
    };
  
    const arrowLeftHuman = document.querySelector('#humanL');
    const arrowRightHuman = document.querySelector('#humanR');

      arrowLeftHuman.addEventListener('click', function (e) {
      e.preventDefault();
      page -= 1;
      createCarouselFilter(page, humans);
      });

      arrowRightHuman.addEventListener('click', function (e) {
      e.preventDefault();
      page += 1;
      createCarouselFilter(page, humans);
      });

});


  





// const status = document.getElementById("status");

// status.addEventListener('click', function (e) {
//   e.preventDefault();

//   console.log("Clicou em estado de vida");
// });

// const gender = document.getElementById("gender");


// gender.addEventListener('click', function (e) {
//   e.preventDefault();

//   alert("Clicou em genero");
// });

// const origin = document.getElementById("origin");


// origin.addEventListener('click', function (e) {
//   e.preventDefault();

//   alert("Clicou em planeta");
// });
