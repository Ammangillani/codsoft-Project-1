let close = document.getElementById("close");
let open = document.getElementById("open");
let nav = document.querySelector(".navsection");

function openmenu() {
  nav.style.right = "0";
}
function closemenu() {
  nav.style.right = "-1000px";
}
nav.addEventListener("click", function () {
  nav.style.right = "-1000px";
});

// document.addEventListener("scroll", () => {
//   const header = document.querySelector(".uparrow");

//   if (window.scrollY > 0) {
//     header.classList.add(".fixed");
//   } else {
//     header.classList.remove(".fixed");
//   }
// });

function scrollUp() {
  const scrollUp = document.getElementById("uparrow");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
