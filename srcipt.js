// SCROLL FADE-IN
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(
  ".hero-text, .card, .project-card, .contact, .section-title"
).forEach(el => observer.observe(el));
