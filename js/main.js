// Change to login
let signBtn = document.querySelector(".click");
let content = document.querySelector(".content");
let span = document.querySelector(".span");

function toggleClass() {
  content.classList.toggle("signup");
  signBtn.classList.toggle("ihave");
}

function changeTextSignIn() {
  signBtn.textContent = "انا لدي حساب";
  span.textContent = "";
}
function changeTextSignUp() {
  signBtn.textContent = "تسجيل";
  span.textContent = "عضو جديد...؟";
}

signBtn.addEventListener("click", () => {
  toggleClass();

  if (signBtn.classList.contains("ihave")) {
    changeTextSignIn();
  } else {
    changeTextSignUp();
  }
});
