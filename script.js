const countdownDate = new Date("2026-05-24T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = countdownDate - now;

  if (diff <= 0) {
    document.querySelector('[data-countdown="days"]').textContent = "00";
    document.querySelector('[data-countdown="hours"]').textContent = "00";
    document.querySelector('[data-countdown="minutes"]').textContent = "00";
    document.querySelector('[data-countdown="seconds"]').textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.querySelector('[data-countdown="days"]').textContent = String(days).padStart(4, "0");
  document.querySelector('[data-countdown="hours"]').textContent = String(hours).padStart(2, "0");
  document.querySelector('[data-countdown="minutes"]').textContent = String(minutes).padStart(2, "0");
  document.querySelector('[data-countdown="seconds"]').textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) {
      const original = button.textContent;
      button.textContent = "Thanks for RSVP!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        form.reset();
      }, 1800);
    }
  });
}
