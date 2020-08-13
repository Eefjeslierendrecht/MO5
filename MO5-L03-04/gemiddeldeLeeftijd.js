// 
const GemiddeldeLeeftijd = country => {
    const MensenLand = randomPersonData.filter(
        person => person.region === country
    );

    const amountOfPeople = MensenLand.length;

    if (amountOfPeople === 0) {
        // Don't want to divide by 0.
        return 0;
    }

    const totalAge = MensenLand.reduce(
        (sum, current) => sum + current.age,
        0
    );

    return Math.round(totalAge / amountOfPeople);
};

const ShowGemiddeldeLeeftijdLand = () => {
    emptyResultList();

    const country = event.target.value;
    const average_age = GemiddeldeLeeftijd(country);
    const li = document.createElement("li");
    li.innerHTML = `The average age for ${country} is ${average_age}`;
    addToResultList(li);
};

const LandenButtonHTML = country => {
    const button = document.createElement("input");
    button.type = "button";
    button.value = country;
    button.addEventListener("click", ShowGemiddeldeLeeftijdLand);
    return button;
};

const ShowButtons = () =>
    getCountries(randomPersonData)
        .map(LandenButtonHTML)
        .forEach(addToButtonList);

document
    .querySelector(".GemiddeldeLeeftijd")
    .addEventListener("click", ShowButtons);