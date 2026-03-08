// for carousel
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;

/* create dots */

slides.forEach((_, i) => {

  const dot = document.createElement("button");

  if(i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".carousel-dots button");

/* update carousel */

function updateCarousel(){

  track.scrollTo({
    left: slides[index].offsetLeft,
    behavior: "smooth"
  });

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

}

/* arrows */

next.onclick = () => {
  index = (index + 1) % slides.length;
  updateCarousel();
};

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
};

/* auto slide */

setInterval(() => {

  index = (index + 1) % slides.length;
  updateCarousel();

}, 4000);


// this hover and pause thingy isnt working, fix it later //
// let autoSlide = setInterval(nextSlide, 4000);
//
// carousel.addEventListener("mouseenter", () => {
//   clearInterval(autoSlide);
// });
//
// carousel.addEventListener("mouseleave", () => {
//   autoSlide = setInterval(nextSlide, 4000);
// });
