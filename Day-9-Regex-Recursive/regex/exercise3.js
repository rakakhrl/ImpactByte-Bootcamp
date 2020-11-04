function searchEngine(query) {
  let r = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/i;

  let result = query.match(r);
  if (result === null) {
    return "Maaf yang anda cari tidak ada";
  } else {
    return result[0];
  }
}

console.log(searchEngine("status covid hari ini"));
console.log(searchEngine("Bootcamp Impact Byte"));
console.log(searchEngine("Bagaimana cara memulai keributan"));
