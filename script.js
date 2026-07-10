const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
  } else {
    nav.classList.add('show');
  }
});

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !toggleMenu.contains(event.target)) {
    nav.classList.remove('show');
  }
});

document.addEventListener('scroll', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
  }
});