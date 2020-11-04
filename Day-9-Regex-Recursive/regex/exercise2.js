function checkPhoneNumber(phoneNumber) {
  let r = /\d{10,12}/;
  const isValid = r.test(phoneNumber);

  if (isValid) {
    return "Nomor telpon anda valid.";
  } else {
    return "Nomor telpon anda tidak valid.";
  }
}

console.log(checkPhoneNumber("0812313133"));
console.log(checkPhoneNumber("0adas234asd"));
