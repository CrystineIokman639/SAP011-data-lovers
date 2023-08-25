// estas funciones son de ejemplo

export const filterEspecies = (results, specie) => {
  const resultsSpecies = results.filter((itens) =>{ return itens.species === specie});
  return resultsSpecies;
};

export function alterHTML(_firstid, _secondid, _thirdid) {
  function innerHTMLCard(firstid, secondid, thirdid) {
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
    </section>`;
  };
  return innerHTMLCard;
}

export const anotherExample = () => {
  return 'OMG';
};


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


 





// const resultsAlien = dataRM.filter(itens => itens.species=== "Alien");
// const resultsRobot = dataRM.filter(itens => itens.species=== "robot");
// const resultsHumanoid = dataRM.filter(itens => itens.species=== "Humanoid");
// const resultsUnknow = dataRM.filter(itens => itens.species=== "Unknown");
// const resultsPoopybutthole = dataRM.filter(itens => itens.species=== "Poopybutthole");
// const resultsMytholog = dataRM.filter(itens => itens.species=== "Mytholog");
// const resultsAnimal = dataRM.filter(itens => itens.species=== "Animal");
// const resultsVampire = dataRM.filter(itens => itens.species=== "Vampire");
// const resultsCronnenberg = dataRM.filter(itens => itens.species=== "Cronenberg");
// const resultsDisease = dataRM.filter(itens => itens.species=== "Disease");
// const resultsParasite = dataRM.filter((itens) =>{ return itens.species === "Parasite"});
// console.log(resultsParasite) ;

// const resultsHuman = dataRM.filter(itens => itens.species=== "Human");