function getName() {
  return document.getElementById("nama_input").value;
}

function getRadioValue() {
  let items = document.getElementsByName("barang");
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      return items[i].value;
    }
  }
}

const beliBarang = () => {
  let name = getName();
  let item = getRadioValue();

  console.log(name)
  console.log(item)

  if (name && item) {
    alert(`Terimakasih ${name} sudah membeli ${item} dari toko Badut Sehat Sejahtera.`)
  } else {
    alert('Mohon isi nama dan pilih badut yang anda inginkan.')
  }
};

