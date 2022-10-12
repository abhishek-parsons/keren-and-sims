window.localStorage.setItem("clicked", false);

// hide loader after a few seconds
var loader = document.getElementById("loader");
setTimeout(function () {
  loader.classList.add("animate__animated");
  loader.classList.add("animate__fadeOut");
  setTimeout(function () {
    loader.remove();
  }, 1000);
}, 2000);

function clickFace() {
  var clicked = window.localStorage.getItem("clicked");
  console.log("open");
  window.localStorage.setItem("clicked", true);
  //show q1
  var q1 = document.getElementsByClassName("div2")[0];
  q1.style.display = "block";
  q1.classList.add("animate__animated");
  q1.classList.add("animate__bounceIn");

  //show q2
  var q2 = document.getElementsByClassName("div3")[0];
  q2.style.display = "block";
  q2.classList.add("animate__animated");
  q2.classList.add("animate__bounceIn");

  //show q1
  var q3 = document.getElementsByClassName("div4")[0];
  q3.style.display = "block";
  q3.classList.add("animate__animated");
  q3.classList.add("animate__bounceIn");

  //show q1
  var q4 = document.getElementsByClassName("div5")[0];
  q4.style.display = "block";
  q4.classList.add("animate__animated");
  q4.classList.add("animate__bounceIn");

  //show q1
  var q5 = document.getElementsByClassName("div6")[0];
  q5.style.display = "block";
  q5.classList.add("animate__animated");
  q5.classList.add("animate__bounceIn");

  //show q1
  var q6 = document.getElementsByClassName("div7")[0];
  q6.style.display = "block";
  q6.classList.add("animate__animated");
  q6.classList.add("animate__bounceIn");
}
