const path = function (file) {
  return `files/${file}`
}

window.addEventListener('load', player.start())

window.onload = () => {
  document.getElementById("audio").play();
  let audio = document.getElementById("audio");
  audio.volume = 0.1;
}