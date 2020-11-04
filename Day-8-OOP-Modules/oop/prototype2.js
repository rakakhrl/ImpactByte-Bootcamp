Number.prototype.apakahPrima = function () {
  if (this === 2) {
    return true;
  } else if (this > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

let num = 11;

console.log(num.apakahPrima());
