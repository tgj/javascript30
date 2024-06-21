window.addEventListener("keydown", (e) => {
  let sound;
  const key = e.key.toUpperCase();
  switch (key) {
    case "A":
      sound = "clap";
      break;
    case "S":
      sound = "hihat";
      break;
    case "D":
      sound = "kick";
      break;
    case "F":
      sound = "openhat";
      break;
    case "G":
      sound = "boom";
      break;
    case "H":
      sound = "ride";
      break;
    case "J":
      sound = "snare";
      break;
    case "K":
      sound = "tom";
      break;
    case "L":
      sound = "tink";
      break;
    default: // ignore class
  }

  if (sound) {
    const audio = new Audio(`sounds/${sound}.wav`);
    const keyCode = key.charCodeAt();
    const keyButton = document.querySelector(`[data-key="${keyCode}"]`);
    const playingClass = "playing";
    keyButton.classList.add(playingClass);
    audio.play().then(() => {
      setTimeout(() => {
        keyButton.classList.remove(playingClass);
      }, 50);
    });
  }
});

const keyButtons = document.querySelectorAll("[data-key]");
console.log(keyButtons);
