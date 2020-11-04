function bingung(number) {
  if (number === 1) {
    return 3;
  } else {
    return 2 * bingung(number - 1);
  }
}

console.log(bingung(1));
console.log(bingung(2));
console.log(bingung(3));
console.log(bingung(4));
console.log(bingung(5));
console.log(bingung(6));
console.log(bingung(7));
