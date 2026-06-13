// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide button on scroll
window.addEventListener("scroll", function () {
  const button = document.getElementById("backToTop");

  if (window.scrollY > 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});
