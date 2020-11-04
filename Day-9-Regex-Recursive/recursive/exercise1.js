function countFactorial(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * countFactorial(number - 1);
  }
}

console.log(countFactorial(4));
