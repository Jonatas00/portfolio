function changeTheme() {
  let button = document.querySelector(".button-theme");
  let body = document.querySelector("body");

  body.classList.toggle("light-theme");

  button.classList.toggle("fa-moon");
}
