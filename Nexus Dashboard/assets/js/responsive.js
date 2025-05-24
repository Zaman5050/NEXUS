let hamburgerMenu = document.querySelector(".menu-icon");
let sidebarMenu = document.querySelector(".sidebar-menu");
hamburgerMenu.addEventListener("click", () => {
  sidebarMenu.classList.add("show");
});

let closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", () => {
  sidebarMenu.classList.remove("show");
});