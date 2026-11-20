const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

// Keep the button's accessibility state in sync with the visible menu.
function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
}

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  setMenuOpen(open);
});

// Escape dismisses the mobile menu from anywhere on the page.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
  }
});
