// hide loader after a few seconds
var loader = document.getElementById("loader");
setTimeout(function () {
  loader.classList.add("animate__animated");
  loader.classList.add("animate__fadeOut");
}, 1000);
