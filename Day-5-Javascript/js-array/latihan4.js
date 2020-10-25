let matkul1 = ["Math", "English", "Programming"];
let matkul2 = ["Geography", "Spanish", "Programming"];

let result = matkul2.filter((data) => matkul1.includes(data));

console.log(result);
