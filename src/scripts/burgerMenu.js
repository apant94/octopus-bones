const btn = document.querySelector('.header__burger-btn');
const wrapper = document.querySelector('.header__burger-wrapper');
btn.addEventListener('click', () => {
  wrapper.classList.toggle('opened');
})