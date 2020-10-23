let matkul1 = ["Math", "English", "Programming"];
let matkul2 = ["Geography", "Spanish", "Programming"];

let result;

matkul1.forEach((data) => {
  if (matkul2.includes(data)) {
    result = true;
  } else {
    result = false;
  }
});

console.log(result);
