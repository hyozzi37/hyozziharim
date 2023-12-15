const openSlideMenuButton = document.getElementById("openSlideMenu");
const closeSlideMenuButton = document.getElementById("closeSlideMenu");
const slideMenu = document.getElementById("slideMenu");

openSlideMenuButton.addEventListener("click", () => {
  slideMenu.classList.add("on");
});

closeSlideMenuButton.addEventListener("click", () => {
  slideMenu.classList.remove("on");
});
