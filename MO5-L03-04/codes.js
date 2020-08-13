
// voeg items toe aan de gewenste array
const keepUnique = (items, item) => {
    if (!Array.isArray(items)) items = [];
    if (!items.includes(item)) items.push(item);
    return items;
  };

 // geen result laat dan dit zien
  const emptyResultList = () =>
    (document.querySelector(".results").innerHTML = "");

// resultlist wordt vastgemaakt aan de list items
  const addToResultList = li =>
    document.querySelector(".results").appendChild(li);
  
 // ??   
  const emptyButtonList = () =>
    (document.querySelector(".sub_buttons").innerHTML = "");

 // ?? 
  const addToButtonList = button =>
    document.querySelector(".sub_buttons").appendChild(button);
  
 // voor elke input (button) volgt een event listener
document.querySelectorAll("nav input").forEach(input =>
    input.addEventListener("click", () => {
      emptyResultList();
      emptyButtonList();
    })
  );

// sorteren 
  const sort_helper = result => {
    if (result) {
      return 1;
    } else {
      return -1;
    }
  };
  
  // wat is het sterrenbeeld per datum
  const pakSterrenbeeld = (month, day) => {
    
    if (month === 1 && day <= 20) return "STEENBOK";
    if (month === 1 && day >= 21) return "WATERMAN";
    if (month === 2 && day <= 19) return "WATERMAN";
    if (month === 2 && day >= 20) return "VISSEN";
    if (month === 3 && day <= 20) return "VISSEN";
    if (month === 3 && day >= 21) return "RAM";
    if (month === 4 && day <= 20) return "RAM";
    if (month === 4 && day >= 21) return "STIER";
    if (month === 5 && day <= 20) return "STIER";
    if (month === 5 && day >= 21) return "TWEELINGEN";
    if (month === 6 && day <= 21) return "TWEELINGEN";
    if (month === 6 && day >= 22) return "KREEFT";
    if (month === 7 && day <= 22) return "KREEFT";
    if (month === 7 && day >= 23) return "LEEUW";
    if (month === 8 && day <= 23) return "LEEUW";
    if (month === 8 && day >= 24) return "MAAGD;"
    if (month === 9 && day <= 21) return "MAAGD;"
    if (month === 9 && day >= 22) return "WEEGSCHAAL;"
    if (month === 10 && day <= 22) return "WEEGSCHAAL;"
    if (month === 10 && day >= 23) return "SCHORPIOEN;"
    if (month === 11 && day <= 21) return "SCHORPIOEN;"
    if (month === 11 && day >= 22) return "BOOGSCHUTTER;"
    if (month === 12 && day <= 21) return "BOOGSCHUTTER;"
    if (month === 12 && day >= 22) return "STEENBOK"
  };

  // wat is het sterrenbeeld van de mensen
  const sterrenbeeldPersoon = person => {
    const month = parseInt(person.birthday.dmy.split("/")[1]);
    const day = parseInt(person.birthday.dmy.split("/")[0]);
    person.sign = pakSterrenbeeld(month, day);
    return person;
  };
