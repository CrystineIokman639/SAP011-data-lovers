import {
    createCarouselPage,
  } from './main.js';
  
  // Suponha que você tenha um elemento DOM para simular o row
  const rowMock = document.createElement('div');
  rowMock.id = 'row1'; // Ajuste isso de acordo com sua estrutura HTML
  
  // Teste para a função createCarouselPage
  test('createCarouselPage deve criar uma página do carrossel com os cards certos', () => { // () tu coloca um argumento, opcional
    const pageAll = 1;
    const firstId = 1;
    const secondId = 2;
    const thirdId = 3;
  
    createCarouselPage(pageAll, rowMock, firstId, secondId, thirdId);
  
    // Verifique se o HTML gerado foi adicionado ao elemento rowMock
    expect(rowMock.innerHTML).toContain('section class="card1"');
    expect(rowMock.innerHTML).toContain('section class="card2"');
    expect(rowMock.innerHTML).toContain('section class="card3"');
    // Adicione mais verificações conforme necessário
  });
  
  // Adicione testes semelhantes para as outras funções, como innerHTMLCarousel, carouselHumanFilter, carouselAlienFilter e carouselOrderFilter.