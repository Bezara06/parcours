const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
  } else {
    nav.classList.add('show');
  }
});