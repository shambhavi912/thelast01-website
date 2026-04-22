const btn = document.getElementById("toggleBtn");
const extras = document.querySelectorAll(".extra");

let expanded = false;

btn.addEventListener("click", () => {
  expanded = !expanded;

  extras.forEach(el => {
    el.classList.toggle("show");
  });

  btn.textContent = expanded ? "See Less" : "See More";
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".photo-item img").forEach(img => {
  img.addEventListener("click", (e) => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = e.target.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
