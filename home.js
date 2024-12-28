document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function sectionObserverCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }

  const observer = new IntersectionObserver(
    sectionObserverCallback,
    observerOptions
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
