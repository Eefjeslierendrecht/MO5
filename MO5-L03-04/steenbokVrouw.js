// variabele voorwaarden
const isVrouw = person => person.gender === "female";

const is30plus = person => person.age > 30;

const isSteenbok = person => person.sign === "STEENBOK";

// soorten op alfabet
const sortByName = (person1, person2) =>
  sort_helper(person1.name > person2.name);

// filter de eisen in code 
const pakSteenbokVrouwen = personData =>
  personData
    .filter(isVrouw)
    .filter(is30plus)
    .map(sterrenbeeldPersoon)
    .filter(isSteenbok)
    .sort(sortByName);

// vorm de steenbok vrouw 
const maakSteenbokVrouwenHTML = ({
  name,
  surname,
  photo,
  age,
  birthday,
}) => {
 // inner html de steenbokvrouw per eis
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = `${name} ${surname}`;

  const photoSpan = document.createElement("span");
  photoSpan.innerHTML = photo;

  const ageSpan = document.createElement("span");
  ageSpan.innerHTML = age;

  const birthdaySpan = document.createElement("span");
  birthdaySpan.innerHTML = birthday.dmy;

  const li = document.createElement("li");
  li.appendChild(nameSpan);
  li.appendChild(photoSpan);
  li.appendChild(ageSpan);
  li.appendChild(birthdaySpan);

  return li;
};

// pak de steenbokvrouwen en zet ze in de resultlist
const showSteenbokVrouwen = () => {
  pakSteenbokVrouwen(randomPersonData)
    .map(maakSteenbokVrouwenHTML)
    .forEach(addToResultList);
};

// event listener voor de klik op steenbokvrouwen
document
  .querySelector(".steenbokvrouwen")
  .addEventListener("click", showSteenbokVrouwen);