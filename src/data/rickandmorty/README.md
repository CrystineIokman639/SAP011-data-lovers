# Rick and Morty

Rick y Morty es una serie de televisión estadounidense de animación para
adultos. La serie tiene gran acogida a nivel mundial, de todo este fandom hay
un grupo que desea poder interactuar y ver la información de los personajes y
de la serie en general.

## Hallazgos

Hicimos una rápida investigación sobre la información que podrían necesitar
nuestros usuarios y encontramos que los datos de mayor interés para ellos son:

Información relevante sobre los personajes, como nombre, género, especie, lugar
de origen, imagen y episodios donde aparece.

Adicionalmente a esta información, para nuestros usuarios es importante poder
ver la lista de personajes que aparecen en la serie, la cantidad de
episodios, los diferentes lugares de origen, para tener mayor información de la
serie.

## Detalles de la data

* Con este set de datos puedes obtener los siguientes datos de un personaje:

  - nombre
  - imagen
  - estado de vida
  - especie
  - género
  - lugar de origen (planeta tierra)
  - lugar donde vive.
  - episodios donde aparece.

* Con este set de datos también puedes obtener lo siguiente:

  - Cantidad de personajes.
  - Cantidad de lugares de origen.
  - Lista de episodios de la serie.
  - Lista de personajes que pertenecen a una cierta locación.
  - Todos los personajes de la serie.

Especie = ["Human", "Alien", "robot", "Humanoid", "Unknown",
"Poopybutthole", "Mytholog", "Animal", "Vampire",
"Cronenberg", "Disease", "Parasite"];
Status = ["alive", "dead", "unknown$"];
Gender = ["Male$", "Female", "Unknown"];
Origin = ["Abadango", "unknown", "Signus 5 Expanse",
  "Purge Planet", Venzenulon 7, Bepis 9, "Earth (Evil Rick's Target Dimension)",
  "Nuptia 4", "Fantasy World", "Bird World", "Gromflom Prime",
  "Rick's Battery Microverse", "The Menagerie", "Hideout Planet",
  "Giant's Town", "Unity's Planet", "Anatomy Park", "Roy: A Life Well Lived",
  "Eric Stoltz Mask Earth", "Glaagablaaga", "Gazorpazorp", "Resort Planet",
  "Hamster in Butt World", "Alphabetrium", "Unity's Planet", "Krootabulon", "Pluto",
  "Fantasy World", "Zeep Xanflorp's Miniverse", "Dorian 5", "Larva Alien's Planet",
  "Mr. Goldenfold's dream", "Mr. Meeseeks Box", "Mega Gargantuan Kingdom",
  "Gear World", "Planet Squanch", "Worldender's lair", "Zeep Xanflorp's Miniverse",
  "Detoxifier", "Krootabulon", "Kyle's Teenyverse, Trunk World",
  "Plopstar", "Rick's Battery Microverse", "Girvonesk", "Snuffles' Dream",
  "Interdimensional Cable", "Greasy Grandma World", "Testicle Monster Dimension",
  "Gear World", "Árboles Mentirosos", "Citadel of Ricks", "Abadango"];
  origin.push(["Earth (C-137)", "Earth (C-500A)", "Earth (5-126)",
  "Earth (Unknown dimension)", "Earth (K-83)", "Earth (K-22)", "Earth (D-99)",
  "Earth (D716)", "Earth (D716-B)", "Earth (D716-C)", "Earth (J-22)",
  "Earth (Phone Dimension)", "Earth (Chair Dimension)", "Earth (Replacement Dimension)",
  "Earth (Pizza Dimension)", "Earth (J19ζ7)", "Post-Apocalyptic Earth","Earth (Giant Telepathic Spiders Dimension)"]);

    




<section class="container">
      <button class="arrow-left" aria-label="previous image">&#9664;</button>
      <button class="arrow-right" aria-label="next-image">&#9654;</button>
      <section class="row-wrapper">
        <section class="card1">
          <section class="flipper">
            <section class="front">
              <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[firstCard].id}.jpeg"
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
              <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[secondCard].id}.jpeg"
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
              <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[thirdCard].id}.jpeg"
                class="item current-item">
            </section> <!-- front -->
            <section class="back">
              <img src="image/verse.jpg"
                alt="rick aparecendo em um portal em baixo e tentando pegar a arma de portal que esta em cima">
            </section> <!-- back -->
          </section> <!-- flipper -->
        </section> <!-- card3 -->
      </section>
    </section>
