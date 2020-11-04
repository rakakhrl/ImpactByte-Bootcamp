function evenNumberTo(number) {
  if (number === 0) {
    console.log(0);
  } else {
    evenNumberTo(number - 1);
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

evenNumberTo(7);
