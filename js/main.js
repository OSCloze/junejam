/* ── NAV SCROLL ── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 2px 16px rgba(26,63,82,0.35)'
    : 'none';
});

/* ── HAMBURGER ── */
const burger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

/* ── SMOOTH SCROLL (accounts for 60px nav) ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
  });
});

/* ── LIGHTBOX ── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbClose   = document.getElementById('lbClose');

document.querySelectorAll('.gallery-item[data-src]').forEach(el => {
  el.addEventListener('click', () => {
    lbImg.src = el.dataset.src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
