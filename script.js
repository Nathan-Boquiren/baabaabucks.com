// Variables
let cl = console.log;
const scriptUrl = "https://script.google.com/macros/s/AKfycbzhxnJie-FbLrk2_d1g0L0AwUEa0sZ9a_jiAVjMyAOkfnmbEjSMrp6cUZgtyKw-rjkq/exec";

// DOM Elements
const input = document.getElementById("id-input");
const loading = document.getElementById("loading");
const quantityInput = document.getElementById("quantity-input");
const stepBtns = document.querySelectorAll(".step-btn");
const processBtn = document.getElementById("process");

let itemCount = 1;
let id;
let quantity;

// Item Quantity Input

stepBtns.forEach((btn) => {
  btn.addEventListener("pointerdown", () => {
    btn.id === "increase" ? quantityInput.stepUp() : quantityInput.stepDown();
    if (quantityInput.value === quantityInput.max || quantityInput.value === quantityInput.min) {
      btn.classList.add("disabled");
    } else {
      stepBtns.forEach((btn) => btn.classList.remove("disabled"));
    }
  });
});

// Input Event on Scan

input.addEventListener("input", () => {
  input.classList.remove("valid");
  const match = input.value.match(/[?&]s=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/i);
  const valid = match ? match[1] : null;
  if (!valid) return;
  input.classList.add("valid");
  id = valid;
  cl("id: " + id);
});

// Process Button

processBtn.addEventListener("click", () => {
  if (!id) return;
  showLoading();
  const itemCount = quantityInput.value;
  window.location.href = `${scriptUrl}?id=${id}&quantity=${itemCount}`;
});

// Loading

function showLoading() {
  let txt = Array.from(loading.querySelector("h1").innerHTML);
  const spans = txt.map((ch) => `<span>${ch}</span>`).join("");
  loading.querySelector("h1").innerHTML = spans;
  loading.classList.add("show");
  animateTxt();
  setInterval(() => {
    animateTxt();
  }, 2000);
}

function animateTxt() {
  const chs = document.querySelectorAll("h1 span");
  chs.forEach((ch) => ch.classList.remove("animate"));
  void loading.offsetWidth;
  chs.forEach((ch, i) => {
    ch.style.setProperty("--delay", `${i * 30}ms`);
    ch.classList.add("animate");
  });
}

// Input Focus

// input.focus();

document.body.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  input.focus();
});
