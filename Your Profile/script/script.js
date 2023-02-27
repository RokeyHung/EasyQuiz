const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn"),
  navItemHome = document.querySelector(".nav-item-home");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  navItemHome.classList.add("nav-item-home");
  if (nav.classList.contains("openSearch")) {
    navItemHome.classList.remove("nav-item-home");
    return searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
  }
  searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
