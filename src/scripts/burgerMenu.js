const openBtn = document.querySelector(".header__burger-btn");
const closeBtn = document.querySelector(".header__burger-close");
const wrapper = document.querySelector(".header__burger-wrapper");
const nav = wrapper.querySelector(".header__burger-nav");

openBtn.addEventListener("click", () => {
  wrapper.classList.add("opened");
  nav.classList.remove("header__burger-nav_closed");
  nav.classList.add("header__burger-nav_opened");
  openBtn.style.visibility = "hidden";
  closeBtn.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("opened");
  nav.classList.add("header__burger-nav_closed");
  nav.classList.remove("header__burger-nav_opened");
  openBtn.style.visibility = "visible";
  closeBtn.style.visibility = "hidden";
});
