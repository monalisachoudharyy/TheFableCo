// Scroll fade in/out animation
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-section").forEach(el => observer.observe(el));
});
