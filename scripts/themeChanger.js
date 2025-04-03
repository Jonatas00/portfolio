window.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme") || "dark-theme";
  document.body.classList.add(currentTheme);
});

function changeTheme() {
  const currentTheme = document.body.classList.contains("light-theme")
    ? "light-theme"
    : "dark-theme";

  const newTheme = currentTheme == "light-theme" ? "dark-theme" : "light-theme";

  document.body.classList.replace(currentTheme, newTheme);

  localStorage.setItem("theme", newTheme);
}

