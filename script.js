function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

// Optional swipe detection for mobile card scrolling
let touchStartX = 0;
let container = document.getElementById('cards');

container.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', e => {
  let touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) container.scrollBy({ left: 200, behavior: 'smooth' });
  if (touchEndX > touchStartX + 50) container.scrollBy({ left: -200, behavior: 'smooth' });
});
