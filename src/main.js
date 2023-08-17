
import { filterEspecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

let page = 1;          //contador
const arrowLeft = document.querySelector('.arrow-left'); //pega o elemento (css) 'se usar . pega a classe # pega o ID'
const arrowRight = document.querySelector('.arrow-right');

arrowRight.addEventListener('click', function (e) {
    e.preventDefault();
    if(page >= 1){
    page += 1
    const thirdCard = page * 3;
    const secondCard = thirdCard - 1;
    const firstCard = secondCard - 1;

    document.querySelector('.row-wrapper').innerHTML=`
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
 }else if(page = 164){  //164.3333333
  alert('Você já está no ultimo personagem 👀' );
 }
});

arrowLeft.addEventListener('click', function (e) {
  e.preventDefault();
  if(page > 1){
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
}else{
  alert('Você já está no primeiro personagem 👀');
}
});

const specie = document.getElementById("species");


specie.addEventListener('click', function (e) {
  e.preventDefault();

   
  console.log(filterEspecies(data.results));
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
