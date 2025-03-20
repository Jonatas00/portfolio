document.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    document.documentElement.scrollBy({
      top: event.deltaY,
      behavior: "smooth",
    });
  },
  { passive: false }
);

document.addEventListener("scroll", () => {
  const containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      container.classList.remove("hidden");
    } else {
      container.classList.add("hidden");
    }
  });
});
