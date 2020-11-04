class Karyawan {
  constructor(name, age, title, salary) {
    this.name = name;
    this.age = age;
    this.title = title;
    this.salary = salary;
  }

  bekerja() {
    return `${this.name} sedang bekerja dengan giat demi cuan untuk menikah.`;
  }
}

export default Karyawan;
