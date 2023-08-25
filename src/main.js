

import { filterEspecies, alterHTML } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

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

let page = 1;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

function innerHTMLCard(firstid, secondid, thirdid){
return `<section class="card1">
  <section class="flipper">
    <section class="front">
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${firstid}.jpeg"
        class="item current-item">
    </section> <!-- front -->
    <section class="back">
      <img src="image/verse.jpg"
        alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
    </section> <!-- back -->
  </section> <!-- flipper -->
</section> <!-- card1 -->
<section class="card2">
  <section class="flipper">
    <section class="front">
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${secondid}.jpeg"
        class="item current-item">
    </section> <!-- front -->
    <section class="back">
      <img src="image/verse.jpg"
        alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
    </section> <!-- back -->
  </section> <!-- flipper -->
</section> <!-- card2 -->
<section class="card3">
  <section class="flipper">
    <section class="front">
      <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${thirdid}.jpeg"
        class="item current-item">
    </section> <!-- front -->
    <section class="back">
      <img src="image/verse.jpg"
        alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
    </section> <!-- back -->
  </section> <!-- flipper -->
</section> <!-- card3 -->
</section>`
}; 

function createCarouselPage(page, row, firstid, secondid, thirdid){
  if (page >= 1) {
    row.innerHTML = innerHTMLCard(firstid, secondid, thirdid);
  }else if (thirdCard == data.results.length-1){  
    alert('Você já está no ultimo personagem 👀');
  }else if (page <= 1 ){
    alert('Você já está no primeiro personagem 👀');
  }
};

arrowRight.addEventListener('click', function (e) {
  e.preventDefault();
  page += 1;
  const thirdCard = (page * 3) - 1;
  const secondCard = thirdCard - 1;
  const firstCard = secondCard - 1;
  console.log(page, firstCard, secondCard,thirdCard);
  console.log(page);
  createCarouselPage(page,row, data.results[firstCard].id, data.results[secondCard].id, data.results[thirdCard].id);
});

arrowLeft.addEventListener('click', function (e) {
  e.preventDefault();
  page -= 1;
  const thirdCard = (page * 3) - 1;
  const secondCard = thirdCard - 1;
  const firstCard = secondCard - 1;
  console.log(page, firstCard, secondCard,thirdCard);
  console.log(page);
  createCarouselPage(page, row, data.results[firstCard].id, data.results[secondCard].id, data.results[thirdCard].id);
});

const specie = document.getElementById("species");
const humans = filterEspecies(data.results, "Human");
const alien = filterEspecies(data.results, "Alien");
const robot = filterEspecies(data.results, "Robot");
const humanoid = filterEspecies(data.results, "Humanoid");

function innerHTMLCarousel(idRow, idButtonL, idButtonR, firstID, secondID, thirdID){
  return `<section class = "container">
  <button id="${idButtonL}" class="arrow-left" aria-label="previous image">&#9664;</button>
  <button id="${idButtonR}" class="arrow-right" aria-label="next-image">&#9654;</button>
  <section id="${idRow}" class="row-wrapper">` 
  + innerHTMLCard(firstID, secondID, thirdID)
  +`</section>
   </section>`;
};

specie.addEventListener('click', function (e) {
  e.preventDefault();
  if (page >= 1) {
    const thirdCard = (page * 3) - 1;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;
    page += 1
 
    document.querySelector('.one').innerHTML = innerHTMLCarousel("row1", "humanL", "humanR", humans[firstCard].id, humans[secondCard].id, humans[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel("row2", "alienL", "alienR", alien[firstCard].id, alien[secondCard].id, alien[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel("row3", "robotL", "robotR",robot[firstCard].id, robot[secondCard].id, robot[thirdCard].id);
    document.querySelector('.one').innerHTML += innerHTMLCarousel("row4", "humanoidL", "humanoidR",humanoid[firstCard].id, humanoid[secondCard].id, humanoid[thirdCard].id);
   
  };
      function carouselHumanFilter(page, humans){
        if (page >= 1){
          const thirdCard = (page * 3) -1;
          const secondCard = thirdCard - 1;
          const firstCard = secondCard - 1;
          const row1 = document.querySelector('#row1');
          createCarouselPage(page, row1, humans[firstCard].id, humans[secondCard].id, humans[thirdCard].id);
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
      carouselHumanFilter(page, humans);
      });

      arrowRightHuman.addEventListener('click', function (e) {
      e.preventDefault();
      page += 1;
      carouselHumanFilter(page, humans);
      });

      function carouselAlienFilter(page, alien){
          if (page >= 1){
            const thirdCard = (page * 3) -1;
            const secondCard = thirdCard - 1;
            const firstCard = secondCard - 1;
            const row2 = document.querySelector('#row2');
            createCarouselPage(page, row2, alien[firstCard].id, alien[secondCard].id, alien[thirdCard].id);
            }else if(thirdCard == alien.length -1){  
                alert('Você já está no ultimo personagem 👀');
              }else if(page <= 1){
                alert('Você já está no primeiro personagem 👀');
              };
    };

    const arrowLeftAlien = document.querySelector('#alienL');
    const arrowRightAlien = document.querySelector('#alienR');

    arrowLeftAlien.addEventListener('click', function (e) {
      e.preventDefault();
      console.log("arrowLeftAlien");
      page -= 1;
      carouselAlienFilter(page, alien);
      });

      arrowRightAlien.addEventListener('click', function (e) {
      e.preventDefault();
      page += 1;
      carouselAlienFilter(page, alien);
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
