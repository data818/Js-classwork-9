// ! <!-- Homework 1: Change Background Color-->
let ButtonColor = document.getElementById("colorBtn");
let isYellow = false;

colorBtn.addEventListener("click", function () {
  colorBtn.textContent = isYellow ? "Turn Yellow" : "Turn White";
  document.body.style.backgroundColor = isYellow ? "white" : "yellow";
  isYellow = !isYellow;
});

// !<!-- Homework 2: Text Size Toggle -->
const sizeButton = document.getElementById("sizeBtn");
const resizeText = document.getElementById("resizeText");
let isLarge = false;

sizeBtn.addEventListener("click", function () {
  resizeText.style.fontSize = isLarge ? "16px" : "24px";
  sizeBtn.textContent = isLarge ? "Enlarge Text" : "Reset Text";
  isLarge = !isLarge;
});

// !<!-- Homework 3: Image Switcher (Animal Toggle) -->
const animalBtn = document.getElementById("animalBtn");
const animalImg = document.getElementById("animal");
let isCat = true;

animalBtn.addEventListener("click", function () {
  if (isCat) {
    animalImg.src =
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
    animalBtn.textContent = "Show Cat";
  } else {
    animalImg.src =
      "https://www.purina.in/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageTEASER.jpg";
    animalBtn.textContent = "Show Dog";
  }
  isCat = !isCat;
});
// ! <!-- Homework 4: Counter Button -->
let count = 0;
const count1 = document.getElementById("count");
const countButton = document.getElementById("countBtn");

countBtn.addEventListener("click", function () {
  count++;
  count1.textContent = count;
});
