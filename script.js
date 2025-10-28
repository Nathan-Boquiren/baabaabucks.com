// For testing with barcode scanner

let cl = console.log;
const scriptUrl = "https://script.google.com/macros/s/AKfycbygpepfMJC1dX8mTHAho7nF44UgYEhd2ALNr3bA9I1EB9LS0mopsyHalfzYXkK5OGAG/exec";
const input = document.getElementById("input");
const loading = document.getElementById("loading");

input.addEventListener("input", () => {
  const match = input.value.match(/[?&]s=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/i);
  const id = match ? match[1] : null;
  if (!id) return;
  cl("id: " + id);
  showLoading();
  window.location.href = `${scriptUrl}?id=${id}`;
});

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

input.focus();

document.body.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  input.focus();
});
