/* Inject shared header + footer */
const HEADER_HTML = `
<div id="topbar">
  <div class="container">
    <strong>For bulk orders, contact us at +63 917 XXX XXXX or email trunk2gold@gmail.com</strong>
  </div>
</div>
<header id="header">
  <div class="container">
    <div class="header-inner">
      <a id="logo" href="index.html" aria-label="T2G Home">
        <img src="assets/img/logo.png" alt="Trunk to Gold - T2G Logo">
      </a>
      <nav>
        <ul class="nav-main">
          <li><a href="about.html">About</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="export.html">Export</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="nav-cta"><a href="contact.html">Contact</a></li>
        </ul>
        <button class="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </div>
  <nav class="mobile-menu">
    <ul>
      <li><a href="about.html">About</a></li>
      <li><a href="products.html">Products</a></li>
      <li><a href="export.html">Export</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>`;

const FOOTER_HTML = `
<footer class="footer-main">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/img/logo.png" alt="T2G Logo">
        <p>Trunk to Gold (T2G) produces premium, all-natural coconut-derived products from the heart of the Philippines — bringing the goodness of the coconut palm from trunk to your table.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="export.html">Export</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="products.html">Coco Sugar</a></li>
          <li><a href="products.html">Coco Syrup</a></li>
          <li><a href="products.html">Virgin Coco Oil</a></li>
          <li><a href="products.html">Coco Vinegar</a></li>
          <li><a href="products.html">Coco Jam</a></li>
          <li><a href="products.html">View All</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <address>
          Cagayan de Oro City,<br>
          Northern Mindanao,<br>
          Philippines<br><br>
          trunk2gold@gmail.com<br>
          +63 917 XXX XXXX
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Trunk to Gold (T2G). All rights reserved.</span>
      <span>Made with 🥥 in the Philippines</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
});
