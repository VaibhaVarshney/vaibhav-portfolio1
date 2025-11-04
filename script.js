// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Theme toggle (persist in localStorage)
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme');
if (stored === 'light') root.classList.add('light');
if (toggle) {
  toggle.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    toggle.textContent = isLight ? '🌞' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navMenu.classList.remove('show');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
