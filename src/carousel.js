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
  
  export function createCarouselPage(pageAll, row, firstid, secondid, thirdid) {
    if (pageAll >= 1) {
      row.innerHTML = innerHTMLCard(firstid, secondid, thirdid);
    } else if (thirdCard == data.results.length - 1) {
      alert('Você já está no ultimo personagem 👀');
    } else if (page <= 1) {
      alert('Você já está no primeiro personagem 👀');
    }
  };
  
  export function innerHTMLCarousel(titleH, idRow, idButtonL, idButtonR, firstID, secondID, thirdID) {
    return `<h3>${titleH}</h3>
      <section class = "container">
      <button id="${idButtonL}" class="arrow-left" aria-label="previous image">&#9664;</button>
      <button id="${idButtonR}" class="arrow-right" aria-label="next-image">&#9654;</button>
      <section id="${idRow}" class="row-wrapper">`
      + innerHTMLCard(firstID, secondID, thirdID)
      + `</section>
       </section>`;
  };

  export function carouselHumanFilter(pageH, humans) {
    if (pageH >= 1) {
      const thirdCard = (pageH * 3) - 1;
      const secondCard = thirdCard - 1;
      const firstCard = secondCard - 1;
      const row1 = document.querySelector('#row1');
      createCarouselPage(pageH, row1, humans[firstCard].id, humans[secondCard].id, humans[thirdCard].id);
    } else if (thirdCard == humans.length - 1) {
      alert('Você já está no ultimo personagem 👀');
    } else if (pageH <= 1) {
      alert('Você já está no primeiro personagem 👀');
    };
  };
  
  export function carouselAlienFilter(pageA, alien) {
    if (pageA >= 1) {
      const thirdCard = (pageA * 3) - 1;
      const secondCard = thirdCard - 1;
      const firstCard = secondCard - 1;
      const row2 = document.querySelector('#row2');
      createCarouselPage(pageA, row2, alien[firstCard].id, alien[secondCard].id, alien[thirdCard].id);
    } else if (thirdCard == alien.length - 1) {
      alert('Você já está no ultimo personagem 👀');
    } else if (pageA <= 1) {
      alert('Você já está no primeiro personagem 👀');
    };
  };

  export function carouselOrderFilter(pageO, ordened) {
    if (pageO >= 1) {
      const thirdCard = (pageO * 3) - 1;
      const secondCard = thirdCard - 1;
      const firstCard = secondCard - 1;
      const row1 = document.querySelector('#row1');
      createCarouselPage(pageO, row1, ordened[firstCard].id, ordened[secondCard].id, ordened[thirdCard].id);
    } else if (thirdCard == ordened.length - 1) {
      alert('Você já está no ultimo personagem 👀');
    } else if (pageO <= 1) {
      alert('Você já está no primeiro personagem 👀');
    };
  };

  export function carouselAliveFilter(pageAlive, alive) {
    if (pageAlive >= 1) {
      const thirdCard = (pageAlive * 3) - 1;
      const secondCard = thirdCard - 1;
      const firstCard = secondCard - 1;
      const row1 = document.querySelector('#row1');
      createCarouselPage(pageAlive, row1, alive[firstCard].id, alive[secondCard].id, alive[thirdCard].id);
    } else if (thirdCard == alive.length - 1) {
      alert('Você já está no ultimo personagem 👀');
    } else if (pageAlive <= 1) {
      alert('Você já está no primeiro personagem 👀');
    };
  };
  
  