const theAvengers = [
    ['Iron Man', 'Setrika'],
    ['Hulk', 'Ijo'],
    ['Thor', 'Setrum'],
    ['Captain America', 'Trump'],
    ['Black Widow', 'Laba-Laba'],
];

let result = [];

theAvengers.forEach((hero) => {
  if (hero[0].includes("a")) result.push(hero);
});

console.table(result);
