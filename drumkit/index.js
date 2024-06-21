const audioMap = new Map();

const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const sounds = [
  "clap",
  "hihat",
  "kick",
  "openhat",
  "boom",
  "ride",
  "snare",
  "tom",
  "tink",
];

for (let i = 0; i < keys.length; i++) {
  const audio = new Audio(`sounds/${sounds[i]}.wav`);
  audio.preload = "auto";
  audio.load();
  audioMap.set(keys[i], audio);
}

const playSound = (key) => {
  let sound;
  switch (key) {
    case "A":
    case "S":
    case "D":
    case "F":
    case "G":
    case "H":
    case "J":
    case "K":
    case "L":
      break;
    default:
      return;
  }
  const keyCode = key.charCodeAt();
  const keyButton = document.querySelector(`[data-key="${keyCode}"]`);
  const playingClass = "playing";
  keyButton.classList.add(playingClass);
  const audio = audioMap.get(key).cloneNode();
  audio.play().then(() => {
    setTimeout(() => {
      keyButton.classList.remove(playingClass);
    }, 50);
  });
};

const keyButtons = document.querySelectorAll("[data-key]");

keyButtons.forEach((kb) => {
  ["click", "touchstart"].forEach((event) => {
    kb.addEventListener(
      event,
      (_) => {
        playSound(String.fromCharCode(kb.dataset.key));
      },
      { passive: true }
    );
  });
});

window.addEventListener("keydown", (e) => {
  playSound(e.key.toUpperCase());
});
