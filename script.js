// For testing with barcode scanner

let cl = console.log;
const scriptUrl = "https://script.google.com/macros/s/AKfycbwnJt9Upng00yeo3FvQ2jAJ7-U1MpPIi0Y2KkrlHT4cTjBcpJFxxl1U8jgbshkSpjaz/exec";
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  console.log(input.value);
  const match = input.value.match(/[?&]s=([^&]+)/);
  const id = match ? match[1] : null;
  if (!id) {
    console.log("no id:", match, id);
    input.value = "";
    return;
  }

  showLoading();
  window.location.href = `${scriptUrl}?id=${id}`;
});

function showLoading() {
  const loading = document.getElementById("loading");
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
