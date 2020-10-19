var top;
var left;

function initPos() {
  top = 120;
  left = 200;
  document.getElementById("karakter").style.left = `${left}px`;
  document.getElementById("karakter").style.top = `${top}px`;
}

function walk(direction) {
  switch (direction) {
    case "UP":
      top -= 10;
      document.getElementById("karakter").style.top = `${top}px`;
      break;
    case "RIGHT":
      left += 10;
      document.getElementById("karakter").style.left = `${left}px`;
      break;
    case "DOWN":
      top += 10;
      document.getElementById("karakter").style.top = `${top}px`;
      break;
    case "LEFT":
      left -= 10;
      document.getElementById("karakter").style.left = `${left}px`;
      break;
    default:
      break;
  }
}
