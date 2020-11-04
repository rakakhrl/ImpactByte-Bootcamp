class Enemy {
  constructor(name, speed, hp, ap, isDead) {
    this.name = name;
    this.speed = speed;
    this.hp = hp;
    this.ap = ap;
    this.isDead = isDead;
  }

  attack() {
    console.log(`${this.name} menyerang!`);
  }

  confused() {
    console.log(`${this.name} kebingungan.`);
  }
}

class Pocong extends Enemy {
  constructor(name, speed, hp, ap, isDead) {
    super(name, speed, hp, ap, isDead);
  }

  jump() {
    console.log(`${this.name} melompat!`);
  }

  superJump() {
    console.log(`${this.name} melompat dengan sangat tinggi!`);
  }
}

class Zombie extends Enemy {
  constructor(name, speed, hp, ap, isDead) {
    super(name, speed, hp, ap, isDead);
  }

  walk() {
    console.log(`${this.name} berjalan ke arahmu!`);
  }

  running() {
    console.log(`${this.name} berlari ke arahmu!`);
  }
}

const pocong = new Pocong("Pocong kampung sukasari", 10, 2500, 500, false);
const zombie = new Zombie("Zombie kampung sukamaju", 45, 1000, 1500, false);

console.log(pocong.attack());
console.log(pocong.jump());
console.log(pocong.superJump());

console.log(zombie.confused());
console.log(zombie.walk());
console.log(zombie.running());
