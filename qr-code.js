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
  window.location = `https://script.google.com/macros/s/AKfycbz-Axfka8Ko1fKD-w5Q8E3eMwla9MaSdo8eHnWc8XJEHaIbKOWPtZX7WDfyqkHaqyeV/exec?id=${id}`;
  scanner.clear();
}

function error(err) {
  console.error(err);
}
