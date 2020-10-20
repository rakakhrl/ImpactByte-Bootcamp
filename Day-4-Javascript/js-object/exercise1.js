let cat = {
  color: "Orange",
  breed: "Angora",
  age: 3,
  sleep: () => console.log("zzZzZZzzZ"),
  meow: () => console.log("Meow"),
  eat: (food) => {
    if (food == 'fish') {
      console.log("Meoww. (Hmm enak sekali)");
    } else {
      console.log("Meeeoooww. (Apaan nih gaenak)");
    }
  },
};

console.log(cat);
console.log(cat.eat('rock'));
console.log(cat.eat('fish'));