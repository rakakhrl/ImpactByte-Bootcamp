function showKuis() {
  let kepanjangan = prompt("Apakah kepanjangan dari nama IB");

  switch (kepanjangan) {
    case "Impact Byte":
      alert("Selamat jawaban kamu benar!");
      break;
    default:
      showKuis();
      break;
  }
}
