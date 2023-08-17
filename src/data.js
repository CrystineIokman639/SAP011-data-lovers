// estas funciones son de ejemplo

export const filterEspecies = (dataRM) => {
const resultsHuman = dataRM.filter(itens => itens.species=== "Human");
const resultsAlien = dataRM.filter(itens => itens.species=== "Alien");
const resultsRobot = dataRM.filter(itens => itens.species=== "robot");
const resultsHumanoid = dataRM.filter(itens => itens.species=== "Humanoid");
const resultsUnknow = dataRM.filter(itens => itens.species=== "Unknown");
const resultsPoopybutthole = dataRM.filter(itens => itens.species=== "Poopybutthole");
const resultsMytholog = dataRM.filter(itens => itens.species=== "Mytholog");
const resultsAnimal = dataRM.filter(itens => itens.species=== "Animal");
const resultsVampire = dataRM.filter(itens => itens.species=== "Vampire");
const resultsCronnenberg = dataRM.filter(itens => itens.species=== "Cronenberg");
const resultsDisease = dataRM.filter(itens => itens.species=== "Disease");
const resultsParasite = dataRM.filter(itens => itens.species=== "Parasite");


};

export const anotherExample = () => {
  return 'OMG';
};

//   function filterEspecies(dataRM){
//     const resultsRM = dataRM.filter(dataRM =>(dataRM === "Human", "Alien", "robot", "Humanoid", "Unknown",
//     "Poopybutthole", "Mytholog", "Animal", "Vampire",
//     "Cronenberg", "Disease", "Parasite"));
//     console.log( resultsRM );
    
//     const mapHuman = resultsRM.map(resultsRM => `${resultsRM.Human}` + "Human" );
//     console.log( mapHuman );

//   return filterEspecies;
// };






 
