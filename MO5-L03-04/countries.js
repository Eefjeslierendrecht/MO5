// pak de landen van de personen
const getCountries = personData =>
personData
  .map(person => person.region)
  .reduce(keepUnique)
  .sort();

// maak html element met de landen
const generateCountryHTML = country => {
  const li = document.createElement("li");
  li.innerHTML = country;
  return li;
};

// laat de landen zien in de resultlist
const displayCountries = () =>
  getCountries(randomPersonData)
    .map(generateCountryHTML)
    .forEach(addToResultList);

// eventlistener van de landen knop
document
  .querySelector(".countries")
  .addEventListener("click", displayCountries);