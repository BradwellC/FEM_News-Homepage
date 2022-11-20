const mainNav = document.getElementById("nav");
const navToggle = document.querySelector(".nav_toggle");

navToggle.addEventListener("click", () => {
  const visibility = mainNav.getAttribute("data-visible");

  if (visibility === "false") {
    mainNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    mainNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});
