const scriptUrl = "https://script.google.com/macros/s/AKfycbxs3M-WiCQvs6Bxml7aaqdVTvKvW2LugL4RmMCO7BgpHQZ75YDSKRgqAxYlI2t2alkX/exec";

const config = {
  qrbox: {
    width: 500,
    height: 500,
  },
  fps: 30,
  rememberLastUsedCamera: true,
};
const scanner = new Html5QrcodeScanner("scanner-container", config);

scanner.render(success, error);

function success(result) {
  console.log(result);
  const match = result.match(/[?&]s=([^&]+)/);
  const id = match ? match[1] : null;
  showLoading();
  window.location.href = `${scriptUrl}?id=${id}`;
  scanner.clear();
}

function error(err) {
  console.error(err);
}

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
