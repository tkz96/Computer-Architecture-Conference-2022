const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
}));