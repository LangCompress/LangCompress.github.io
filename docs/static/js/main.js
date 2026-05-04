// Copy BibTeX to clipboard
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const text = document.getElementById('bibtex').textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    });
  });
}

// Active nav link highlighting via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Mobile menu toggle
const hamburger = document.getElementById('nav-hamburger');
const navLinksList = document.getElementById('nav-links');
if (hamburger && navLinksList) {
  hamburger.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });
  // Close menu when a link is clicked
  navLinksList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinksList.classList.remove('open'));
  });
}
