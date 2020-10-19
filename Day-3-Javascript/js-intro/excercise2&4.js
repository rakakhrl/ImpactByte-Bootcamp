/* 
  Menampilkan prompt untuk mengisi data nama dan negara.
  Jika data tersebut sudah terisi maka akan muncul popup konfirmasi
  apakah data yang dimasukan sudah benar.
  Jika benar akan muncul alert terimakasih jika salah user diharuskan
  mengisi ulang datanya.
*/
function showPrompt() {
  let name = prompt("Masukan nama anda");
  let country = prompt("Masukan negara anda");

  if (name != null && country != null) {
    let isCorrect = confirm("Apakah data sudah benar?");
    if (isCorrect) {
      alert("Terimakasih sudah mengisi form");
    } else {
      showPrompt();
    }
  }
}
