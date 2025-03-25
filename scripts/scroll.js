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
