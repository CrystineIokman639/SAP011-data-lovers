// estas funciones son de ejemplo

export const filterEspecies = (results, specie) => {
  const resultsSpecies = results.filter((itens) => { return itens.species === specie });
  return resultsSpecies;
};

export const filterStatus = (results, status) => {
  const resultsStatus = results.filter((itens) => { return itens.status === status });
  return resultsStatus;
};
export const filterGender = (results, gender) => {
  const resultsGender = results.filter((itens) => { return itens.gender === gender });
  return resultsGender;
};
export const filterOrigin = (results, origin) => {
  const resultsOrigin = results.filter((itens) => { return itens.origin === origin });
  return resultsOrigin;
};


export const orderByAlfa = (results) => {
  results.sort((a,b) => a.name.localeCompare(b.name));
  return results;
};










