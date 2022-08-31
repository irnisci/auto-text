let textEl = document.querySelector(".text");
let speedEl = document.querySelector("#speed");
let text = "Wellcome to our page...!";

let index = 1;
let speed = 300 / speedEl.value;

makeText();

function makeText() {
  textEl.innerHTML = text.slice(0, index);

  index++;
  if (index > text.length) {
    index = 1;
  }

  setTimeout(makeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
