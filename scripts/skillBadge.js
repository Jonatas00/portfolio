function loadBadges() {
  const icons = [
    "java", "spring", "go", "js", "vue", "postgres", "mysql",
    "docker", "postman", "git", "windows", "linux",
  ].join(",");

  const lines = 3;

  const url = "https://skillicons.dev/icons?i=" + icons + "&perline=" + lines;

  let img = document.createElement("img");

  img.src = url;
  img.classList.add("non-draggable");
  const skillBadgeField = document.querySelector("#skills");

  skillBadgeField.appendChild(img);
}

addEventListener(onload, loadBadges())