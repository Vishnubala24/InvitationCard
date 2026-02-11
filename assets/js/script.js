
const weddingDate = new Date("2026-03-16T09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);


const images = document.querySelectorAll('.memories img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // 20% of image visible triggers animation
});

images.forEach(img => observer.observe(img));

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".post.featured");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target
          .querySelectorAll("h2, p")
          .forEach((p, i) => {
            p.style.transitionDelay = `${i * 0.3}s`; // stagger
            p.classList.add("fade-in");
          });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
});

let lastScroll = 0;
const intro = document.getElementById("intro");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down → hide
    intro.classList.add("hidden");
  } else {
    // Scrolling up → show
    intro.classList.remove("hidden");
  }

  lastScroll = currentScroll;
});
