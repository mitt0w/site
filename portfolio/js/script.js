const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

// --- Tema ---
function applyTheme(theme) {
  if (theme === 'light') {
    root.classList.add('light');
    themeIcon.src = 'src/light.png';
    themeIcon.alt = 'Mudar para modo escuro';
  } else {
    root.classList.remove('light');
    themeIcon.src = 'src/dark.png';
    themeIcon.alt = 'Mudar para modo claro';
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  const newTheme = isLight ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// --- Menu de contato (dropdown da nav) ---
const contactToggle = document.getElementById('contact-toggle');
const contactMenu = document.getElementById('contact-menu');

contactToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  contactMenu.classList.toggle('open');
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  if (!contactMenu.contains(e.target) && e.target !== contactToggle) {
    contactMenu.classList.remove('open');
  }
});

// Fecha ao clicar em um link do menu
contactMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => contactMenu.classList.remove('open'));
});