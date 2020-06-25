const date = document.getElementById("date").innerHTML = new Date().getFullYear();

const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const navClose = document.getElementById("nav--close");

navBtn.addEventListener("click", () => {
  nav.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("showNav");
});
