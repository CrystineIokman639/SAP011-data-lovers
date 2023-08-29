// estas funciones son de ejemplo

export const filterEspecies = (results, specie) => {
  const resultsSpecies = results.filter((itens) => { return itens.species === specie });
  return resultsSpecies;
};


export const orderByAlfa = (results) => {
  results.sort((a,b) => a.name.localeCompare(b.name));
  return results;
};










