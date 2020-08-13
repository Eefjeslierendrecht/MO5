const CountriesInhabitantsAmount = personData => {
    // voeg region toe aan countries
    let countries = {};
    randomPersonData.forEach(({ region }) => {
        if (region in countries) {
            countries[region]++;
        } else {
            countries[region] = 1;
        }
    });

    // koppel inwonen regio aan countries
    countries = Object.entries(countries);
    countries = countries.map(country => ({
        country: country[0],
        inhabitants: country[1],
    }));

    // sorteer landenlijst naar meeste inwoners
    countries.sort((country1, country2) =>
        sort_helper(country1.inhabitants < country2.inhabitants)
    );
    return countries;
};

// maak li item van land + aantal inwoners
const insertHTMLCountries = ({ country, inhabitants }) => {
    const li = document.createElement("li");
    li.innerHTML = `${country} - ${inhabitants}`;
    return li;
};
// laat de landen en mensen zien
const Showpeople = () =>
    CountriesInhabitantsAmount(randomPersonData)
        .map(insertHTMLCountries)
        .forEach(addToResultList);

// koppel functie aan klikfunctie
document
    .querySelector(".MeesteMensen")
    .addEventListener("click", Showpeople);