// persoon boven 18
const isVolwassen = person => person.age > 17;

// verloopdatum
const verloopDatum = credit_card => {
    // split de string 
    const expiration = credit_card.credit_card.expiration.split("/");
    // dit zeg 1/22 dus 20 + 22 is 2022 verloopdatum
    const verloopJaar = parseInt("20" + expiration[1]);
    const verloopMaand = parseInt(expiration[0])-1;
    const verloopDag = 1; 
    credit_card.expiration_date = new Date (
        verloopJaar,
        verloopMaand,
        verloopDag
    );
    return credit_card;
}

// verloop datum moet tussen nu en volgend jaar vanaf vandaag liggen.
// dit moet altijd gelden
const verloopDitJaar = ({expiration_date}) => {
    const eenJaarNu = new Date (
        new Date ().setFullYear(new Date ().getFullYear()+1)
    );
    const nu = new Date();
    return expiration_date > nu && expiration_date < eenJaarNu;
};

// Sorteer naar datum verloop
const sorteerDatum = (card1, card2) => 
sort_helper(card1.expiration_date > card2.expiration_date);

// pak data naar filters
const pakVerloopCreditcard = () => 
    randomPersonData
    .filter(isVolwassen)
    .map(verloopDatum)
    .filter(verloopDitJaar)
    .sort(sorteerDatum);


// maak html en append de data
const maakCCHTML = card => {
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.innerHTML = `${card.name} ${card.surname}`;

    const phone = document.createElement("span");
    phone.innerHTML = `Phone: ${card.phone}`;

    const card_detail = document.createElement("span");
    card_detail.innerHTML = `Card: ${card.credit_card.number}`;

    const verloopt = document.createElement("span");
    verloopt.innerHTML = `Expires: ${card.credit_card.expiration}`;

    li.appendChild(name);
    li.appendChild(phone);
    li.appendChild(card_detail);
    li.appendChild(verloopt)

    return li;
};

// laat creditcards zien in de resultlist
const showCreditCardVerloopt = () =>
pakVerloopCreditcard().map(maakCCHTML).forEach(addToResultList);

// klik event voor button en laat de creditcards zien
document.querySelector(".OuweCreditcards")
.addEventListener("click", showCreditCardVerloopt);