console.log("De javascript werkt")

huiswerkmaken = (vak, callback) => {
console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
setTimeout(function(){
callback()
}, 1000);
}

klaarMetHuiswerk = () => {
    console.log("Kijk, Pap, Mam, ik ben klaar met mijn huiswerk!")
}

huiswerkmaken("wiskunde", klaarMetHuiswerk);
