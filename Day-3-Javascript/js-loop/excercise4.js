var loopCount = 0;

function showConfirm() {
  let isRepeat = confirm("Apakah anda mau mengulang?");
  console.log(isRepeat);

  while (isRepeat) {
    loopCount++;
    showConfirm();
  }

  alert(`Perulangan sudah dilakukan sebanyak ${loopCount} kali.`);
}
