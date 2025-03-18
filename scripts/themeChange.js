function changeTheme() {
  const currentTheme = document.body.classList.contains("light-theme")
    ? "light-theme"
    : "dark-theme";

  // Determine the new theme to switch to
  const newTheme = currentTheme == "light-theme" ? "dark-theme" : "light-theme";

  document.body.classList.replace(currentTheme, newTheme);

  localStorage.setItem("theme", newTheme);
}

window.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);
});
