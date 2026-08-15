const yesButton = document.querySelector(".yes-btn");
const subtext = document.querySelector(".subtext");
const envelope = document.querySelector(".letter-envelope");
const pageShell = document.querySelector(".page-shell");
const galleryModal = document.querySelector(".gallery-modal");
const galleryClose = document.querySelector(".gallery-close");
const galleryBackdrop = document.querySelector(".gallery-backdrop");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll(".gallery-grid img");

if (envelope && pageShell) {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
    pageShell.classList.toggle("open");
  });
}

if (yesButton && subtext && pageShell) {
  yesButton.addEventListener("click", () => {
    yesButton.textContent = "Forever ❤️";
    subtext.textContent = "I love you more every single day, my favorite person.";
    yesButton.disabled = true;
    yesButton.style.opacity = "0.95";
    pageShell.classList.add("gallery-ready");
    document.body.classList.add("gallery-open");
  });
}

const closeGallery = () => {
  if (pageShell) pageShell.classList.remove("gallery-ready");
  document.body.classList.remove("gallery-open");
  if (galleryModal) galleryModal.setAttribute("aria-hidden", "true");
};

const openLightbox = (src, alt) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
};

if (galleryClose) galleryClose.addEventListener("click", closeGallery);
if (galleryBackdrop) galleryBackdrop.addEventListener("click", closeGallery);
if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeGallery();
  }
});

galleryImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image.src, image.alt));
});
