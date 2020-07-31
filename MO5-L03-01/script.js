console.log("script werkt")
// rest operator
let optellen = sum = (...args) => {
    return args.reduce((acc, item) => {
        return acc + item;

    })
}
console.log(optellen(1, 2, 3, 4));
// 10

// spread operator
let count = telop = (getal1, getal2, getal3) => {
    return getal1 + getal2 + getal3;
}

const aantallen = [1, 2, 3];
console.log(telop(...aantallen));
//6

