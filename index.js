// Hey Kiddo.

const ageCheck = function(age) {
    if (age >= 18) {
        return true;
    } return false;
};

const adultCheck = function(age) {
    if (ageCheck(age)) {
        return "Hello there";
    } return "Hey kiddo";
};

const result = adultCheck(17);
// console.log(result);

// VAT Calculations (Value Added Taxes).
// VAT exercise 1.

const vatCalculation = function(number) {
    return number * 0.21;
};

const doCalculation = function(number) {
    const vatPrice = vatCalculation(number);
    const basePrice = number;
    const sum = vatPrice + basePrice;
    console.log(sum);
};

doCalculation(1000);
doCalculation(500);

// VAT exercise 2.

const baseCalculation2 = function(number) {
    return number / 1.21;
};

const doCalculation2 = function(number) {
    const basePrice2 = baseCalculation2(number);
    const vatPrice2 = basePrice2 * 0.21;
    console.log([basePrice2, vatPrice2]);
}

doCalculation2(1210);