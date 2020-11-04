function checkName(name) {
  const r = /[A-Z]/;
  const isUpper = r.test(name);

  if (isUpper) {
    return "Huruf pertama adalah huruf besar.";
  } else {
    return "Huruf pertama adalah huruf kecil.";
  }
}

console.log(checkName("Raka"));
console.log(checkName("raka"));
