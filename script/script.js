// Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Responsive Navbar

function myNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Hide Show Fasilitas List

const button = document.querySelector("#button");
const show = document.querySelector(".show-more");
let x = document.getElementById("hide");

button.addEventListener("click", () => {
  if (show.style.display === "none") {
    show.style.display = "block";
    x.innerHTML = "Hide More";
  } else {
    show.style.display = "none";
    x.innerHTML = "Show More";
  }
});

// Show Search Result