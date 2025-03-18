function loadBadges() {
  const icons = [
    "java",
    "spring",
    "go",
    "js",
    "vue",
    "postgres",
    "mysql",
    "docker",
    "postman",
    "git",
    "windows",
    "linux",
  ].join(",");

  const lines = 3;

  const theme =
    localStorage.getItem("theme") === "light-theme" ? "light" : "dark";

  const url =
    "https://skillicons.dev/icons?i=" +
    icons +
    "&perline=" +
    lines +
    "&theme=" +
    theme;

  let img = document.createElement("img");

  img.src = url;

  const skillBadgeField = document.querySelector("#skills");

  skillBadgeField.appendChild(img);
}

// Function to observe when the aboutme section is in view
function observeAboutMeSection() {
  const aboutMeElement = document.querySelector(".aboutme-container");

  const options = {
    root: null, // Observing relative to the viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadBadges(); // Call the loadBadges function when the section is in view
        observer.disconnect(); // Stop observing once the function is called
      }
    });
  }, options);

  observer.observe(aboutMeElement);
}

// Call the observer function on load
window.addEventListener("load", observeAboutMeSection);
