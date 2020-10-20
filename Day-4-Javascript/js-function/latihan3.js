const convert = () => {
  let umurKucing = document.getElementById("umur_kucing").value;

  if (umurKucing == 1) {
    document.getElementById(
      "hasil"
    ).innerText = `Umur kucing anda dalam tahun manusia adalah ${15}`;
  } else if (umurKucing == 2) {
    document.getElementById(
      "hasil"
    ).innerText = `Umur kucing anda dalam tahun manusia adalah ${24}`;
  } else if(umurKucing >= 3) {
    let umurManusia = 24 + 4 * (umurKucing - 2);
    document.getElementById(
      "hasil"
    ).innerText = `Umur kucing anda dalam tahun manusia adalah ${umurManusia}`;
} else {
        document.getElementById(
          "hasil"
        ).innerText = 'Mohon masukan umur kucing anda';
  }
};
