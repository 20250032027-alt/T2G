/* T2G main.js v2 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile nav ── */
  const toggle  = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  function openMenu()  { mobileMenu?.classList.add('open');  toggle?.classList.add('open');  document.body.style.overflow = 'hidden'; }
  function closeMenu() { mobileMenu?.classList.remove('open'); toggle?.classList.remove('open'); document.body.style.overflow = ''; }

  toggle?.addEventListener('click', () => mobileMenu?.classList.contains('open') ? closeMenu() : openMenu());
  mobileClose?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Active nav link ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll reveal ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), Number(delay));
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    form.style.opacity = '.5';
    form.style.pointerEvents = 'none';
    const msg = document.getElementById('form-msg');
    if (msg) msg.style.display = 'block';
  });

});
