// Mobile menu toggle + active link
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      if (iconOpen && iconClose) {
        iconOpen.style.display = open ? 'none' : 'block';
        iconClose.style.display = open ? 'block' : 'none';
      }
    });
  }
  // active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
