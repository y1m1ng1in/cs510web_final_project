let mainContentRevealed = false;

const revealRestButton = document.getElementById("reveal-more");

revealRestButton.addEventListener("click", () => {
  if (!mainContentRevealed) {
    const contentBelowLanding = document.querySelectorAll("#landing ~ section");
    [...contentBelowLanding].forEach((section) => {
      if (section.id === "projects") section.style.display = "grid";
      else section.style.display = "block";
    });
    revealRestButton.classList.add("animate__animated");
    revealRestButton.classList.add("animate__zoomOut");
    mainContentRevealed = true;
  }
  AOS.init();
});

const navbarButton = document.getElementById("small-screen-navbar-button");

navbarButton.addEventListener("click", () => {
  const navbar = document.querySelector(".small-screen-header nav")
  let currentDisplayStyle = getComputedStyle(navbar, null).display;
  if (currentDisplayStyle === "none") navbar.style.display = "flex";
  else navbar.style.display = "none";
});
