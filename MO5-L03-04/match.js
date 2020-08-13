const RAM = "Ram";
const STIER = "Stier";
const Tweelingen = "Tweelingen";
const KREEFT = "Kreeft";
const LEEUW = "Leeuw";
const MAAGD = "Maagd";
const WEEGSCHAAL = "Weegschaal";
const SCHORPIOEN = "Schorpioen";
const BOOGSCHUTTER = "Boogschutter";
const STEENBOK = "Steenbok";
const WATERMAN = "Waterman";
const VISSEN = "Vissen";

// We assume every one has a unique credit card number here.
const getPersonWithId = (people, credit_card_number) =>
    people.filter(person => person.credit_card.number === credit_card_number)[0];

const getMatchingSigns = sign =>
    ({
        [RAM]: [RAM, LEEUW, BOOGSCHUTTER, TWEELINGEN, WEEGSCHAAL, WATERMAN],
        [LEEUW]: [RAM, LEEUW, BOOGSCHUTTER, TWEELINGEN, WEEGSCHAAL],
        [BOOGSCHUTTER]: [RAM, LEEUW, BOOGSCHUTTER, TWEELINGEN, WEEGSCHAAL, WATERMAN],
        [STIER]: [STIER, MAAGD, STEENBOK, KREEFT, SCHORPIOEN, VISSEN],
        [MAAGD]: [STIER, MAAGD, STEENBOK, KREEFT, SCHORPIOEN],
        [STEENBOK]: [STIER, MAAGD, STEENBOK, KREEFT, SCHORPIOEN, VISSEN],
        [TWEELINGEN]: [RAM, LEEUW, TWEELINGEN, WEEGSCHAAL, WATERMAN],
        [WEEGSCHAAL]: [LEEUW, BOOGSCHUTTER, TWEELINGEN, WEEGSCHAAL, WATERMAN],
        [WATERMAN]: [RAM, LEEUW, BOOGSCHUTTER, TWEELINGEN, WEEGSCHAAL, WATERMAN],
        [KREEFT]: [STIER, MAAGD, STEENBOK, KREEFT, SCHORPIOEN, VISSEN],
        [SCHORPIOEN]: [STIER, MAAGD, STEENBOK, KREEFT, SCHORPIOEN, VISSEN],
        [VISSEN]: [STIER, STEENBOK, KREEFT, SCHORPIOEN, VISSEN],
    }[sign]);

const getMatchesForSign = (people, sign) => {
    const matchingSigns = getMatchingSigns(sign);
    const matches = people.filter(potentialMatch =>
        matchingSigns.includes(potentialMatch.sign)
    );
    return matches;
}

const getMatchesForPerson = event => {
    const credit_card_number = event.target.dataset.id;

    const people = getPeople(randomPersonData);
    const person = getPersonWithId(person, credit_card_number);
    person.self = true;
    let matches = getMatchesForSign(people, person.sign)
    matches = matches.filter(
        person => person.credit_card_number !== credit_card_number
    );

    displayPeople([person].concat(mathces));
};

const getPersonCardHTML = ({
    name,
    surname,
    self,
    region,
    age,
    birthday,
    sign,
    credit_card,
}) => {
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.innerHTML = `${name} ${surname}`;

    const countrySpan = document.createElement("span");
    nameSpan.classList.add("country");
    countrySpan.innerHTML = `Country: ${region}`;

    const ageSpan = document.createElement("span");
    nameSpan.classList.add("age");
    ageSpan.innerHTML = `Age: ${age}`;

    const birthdaySpan = document.createElement("span");
    birthdaySpan.innerHTML = `Date of birth: ${birthday.dmy}`;

    const signSpan = document.createElement("span");
    signSpan.innerHTML = `Astrological sign: ${sign}`;

    const button = document.createElement("input");
    button.type = "button";
    button.value = `Find matches`;
    // We use data attributes to refer to a specific person
    // We make a (very poor) assumption here that no one has the same credit card number
    button.dataset.id = credit_card.number;
    button.addEventListener("click", getMatchesForPerson);

    const card = document.createElement("div");
    card.classList.add("card");
    if (self) {
        card.classList.add("self");
    }

    card.appendChild(nameSpan);
    card.appendChild(countrySpan);
    card.appendChild(ageSpan);
    card.appendChild(birthdaySpan);
    card.appendChild(signSpan);
    card.appendChild(button);

    return card;
};

const displayPeople = people => {
    emptyResultList();
    emptyButtonList();
    people.map(getPersonCardHTML).forEach(addToButtonList);
};

const getPeople = personData => {
    personData = personData
        .filter(person => person.age > 17)
        .map(person => {
            person.self = false; // TODO: Could make this nicer.
            return person;
        })
        .map(addStarSign);

    personData.sort((person1, person2) =>
        sort_helper(person1.name < person2.name)
    );
    return personData;
};

const matchMaking = () => {
    displayPeople(getPeople(randomPersonData));
};

document.querySelector(".Matchmaking").addEventListener("click", matchMaking);