String.prototype.reverseString = function () {
  let reversedString = [];

  for (i = this.length - 1; i >= 0; i--) {
    reversedString.push(this[i]);
  }

  return reversedString.join("");
};

console.log("RAKA".reverseString());
