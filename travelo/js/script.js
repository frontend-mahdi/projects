const barsBtn = document.getElementById("barsBtn");
const barsBtni = barsBtn.childNodes[1];
const nav = document.getElementById("header-nav");
barsBtn.addEventListener("click", function () {
  if (nav.classList.contains("nav-inline")) {
    barsBtni.classList.remove("fa-times");
    barsBtni.classList.add("fa-bars");

    nav.classList.remove("nav-inline");
    nav.classList.remove("animate__fadeInDown");
  } else {
    barsBtni.classList.remove("fa-bars");
    barsBtni.classList.add("fa-times");

    nav.classList.add("nav-inline");
    nav.classList.add("animate__fadeInDown");
  }
});
