// Variables
let cl = console.log;
const scriptUrl = "https://script.google.com/macros/s/AKfycbzXDdmlKP_QUaoYxPM7YR0eY_8TkvpUc2uI_MZVX0qfZRxp8CK57cuwUKertidpwsf0/exec";

// DOM Elements
const idInput = document.getElementById("id-input");
const loading = document.getElementById("loading");
const quantityInput = document.getElementById("quantity-input");
const stepBtns = document.querySelectorAll(".step-btn");
const processBtn = document.getElementById("process");

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

// Student Id Input
idInput.addEventListener("input", () => {
  idInput.classList.remove("valid");
  const match = idInput.value.match(/[?&]s=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/i);
  const id = match ? match[1] : null;
  if (!id) return;
  idInput.classList.add("valid");
  idInput.value = id;
});

// Process Button
processBtn.addEventListener("click", () => {
  const studentId = document.querySelector("#id-input.valid").value;
  const itemCount = quantityInput.value;
  if (!studentId) return;

  showLoading();
  window.location.href = `${scriptUrl}?id=${studentId}&quantity=${itemCount}`;
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
idInput.focus();

document.body.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  idInput.focus();
});
