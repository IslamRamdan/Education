// Show Navbar

let navBar = document.getElementById("navbar");
let menueButton = document.getElementById("menue");
let closeButton = document.getElementById("close");

function toggleFunction() {
  navBar.classList.toggle("hide-nav");
}

menueButton.addEventListener("click", () => {
  toggleFunction();
});

closeButton.addEventListener("click", () => {
  toggleFunction();
});

// Scroll To Top
let topBtn = document.querySelector(".top");

window.onscroll = () => {
  check();
};

topBtn.onclick = () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
};

function check() {
  document.documentElement.scrollTop >= 800
    ? topBtn.classList.remove("hide")
    : topBtn.classList.add("hide");
}

check();
