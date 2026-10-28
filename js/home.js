function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function site(url) {
  document.body.style.opacity = 0;
  setTimeout(function() {
    window.location.href = url;
  },250);
}