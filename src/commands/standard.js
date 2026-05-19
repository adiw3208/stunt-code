const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");
const { createDirectoryIfNotExists } = require("../utils/directoryHelper");

function standard(rootPath) {
  const folders = [
    "public",
    "assets",
    "assets/images",
    "assets/fonts",
    "assets/icons",
    "src",
    "src/css",
    "src/js",
    "src/js/utils",
    "src/js/modules",
  ];

  folders.forEach((folder) =>
    createDirectoryIfNotExists(path.join(rootPath, folder))
  );

  createFileIfNotExists(
    path.join(rootPath, "index.html"),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
  <!-- Primary SEO Meta Tags -->
  <title>My Website - Professional Web Template</title>
  <meta name="description" content="A professional website built with Stunt Code. Add your description here (150-160 characters for optimal SEO)." />
  <meta name="keywords" content="web development, professional website, modern design" />
  <meta name="author" content="Your Name" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.yourwebsite.com/" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.yourwebsite.com/" />
  <meta property="og:title" content="My Website - Professional Web Template" />
  <meta property="og:description" content="A professional website built with Stunt Code." />
  <meta property="og:image" content="./assets/images/og-image.jpg" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="My Website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.yourwebsite.com/" />
  <meta name="twitter:title" content="My Website - Professional Web Template" />
  <meta name="twitter:description" content="A professional website built with Stunt Code." />
  <meta name="twitter:image" content="./assets/images/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/icons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="./assets/icons/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="./assets/icons/apple-touch-icon.png" />
  <link rel="manifest" href="./manifest.json" />
  <meta name="theme-color" content="#2563eb" />
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="./src/css/style.css" />
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <div class="container">
        <a href="/" class="logo" aria-label="Home">
          <span class="logo-icon" aria-hidden="true">◆</span>
          <span class="logo-text">MyWebsite</span>
        </a>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
        <ul class="nav-links" role="menubar">
          <li role="none"><a href="#home" role="menuitem">Home</a></li>
          <li role="none"><a href="#about" role="menuitem">About</a></li>
          <li role="none"><a href="#services" role="menuitem">Services</a></li>
          <li role="none"><a href="#portfolio" role="menuitem">Portfolio</a></li>
          <li role="none"><a href="#contact" role="menuitem">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main id="main-content" role="main">
    <section id="home" class="hero" aria-labelledby="home-heading">
      <div class="container">
        <h1 id="home-heading">Build Something Amazing</h1>
        <p class="hero-subtitle">Thank you for using <strong>STUNT CODE</strong> — your professional web project starts here.</p>
        <div class="hero-buttons">
          <a href="#services" class="btn btn-primary">Explore Services</a>
          <a href="#contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>

    <section id="about" aria-labelledby="about-heading">
      <div class="container">
        <header>
          <h2 id="about-heading">About Us</h2>
          <p class="section-description">Learn more about who we are and what we do.</p>
        </header>
        <article>
          <p>Add your about content here. Tell your story and connect with your audience.</p>
        </article>
      </div>
    </section>

    <section id="services" aria-labelledby="services-heading">
      <div class="container">
        <header>
          <h2 id="services-heading">Our Services</h2>
          <p class="section-description">Discover what we can do for you.</p>
        </header>
        <div class="services-grid">
          <article class="service-card">
            <h3>Web Design</h3>
            <p>Beautiful, responsive websites that engage your visitors.</p>
          </article>
          <article class="service-card">
            <h3>Development</h3>
            <p>Clean, efficient code that powers your digital presence.</p>
          </article>
          <article class="service-card">
            <h3>SEO Optimization</h3>
            <p>Get found online with search engine best practices.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div class="container">
        <header>
          <h2 id="portfolio-heading">Our Work</h2>
          <p class="section-description">See what we've created.</p>
        </header>
        <div class="portfolio-grid">
          <figure class="portfolio-item">
            <img src="./assets/images/placeholder-1.jpg" alt="Project description" loading="lazy" />
            <figcaption>Project One</figcaption>
          </figure>
          <figure class="portfolio-item">
            <img src="./assets/images/placeholder-2.jpg" alt="Project description" loading="lazy" />
            <figcaption>Project Two</figcaption>
          </figure>
          <figure class="portfolio-item">
            <img src="./assets/images/placeholder-3.jpg" alt="Project description" loading="lazy" />
            <figcaption>Project Three</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="contact" aria-labelledby="contact-heading">
      <div class="container">
        <header>
          <h2 id="contact-heading">Contact Us</h2>
          <p class="section-description">We'd love to hear from you.</p>
        </header>
        <form class="contact-form" action="#" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <footer role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="logo-icon" aria-hidden="true">◆</span>
          <span class="logo-text">MyWebsite</span>
        </div>
        <nav aria-label="Footer navigation">
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>&copy; <span id="year"></span> MyWebsite. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="./src/js/main.js" defer></script>
</body>
</html>`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css", "style.css"),
    `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* ===== CSS Variables ===== */
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary: #0f172a;
  --accent: #06b6d4;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --border: #e5e7eb;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --radius: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --max-width: 1200px;
}

/* ===== Reset & Base ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--primary-dark);
}

/* ===== Utilities ===== */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px 16px;
  z-index: 1001;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}

.section-description {
  color: var(--text-light);
  font-size: 1.125rem;
  margin-top: 0.5rem;
}

/* ===== Buttons ===== */
.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  border: 2px solid transparent;
  text-align: center;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

/* ===== Header & Navigation ===== */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg);
  box-shadow: var(--shadow);
  z-index: 1000;
}

nav {
  padding: 1rem 0;
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--secondary);
}

.logo-icon {
  color: var(--primary);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text);
  font-weight: 500;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: var(--transition);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  position: relative;
  transition: var(--transition);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: var(--transition);
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

/* ===== Hero Section ===== */
.hero {
  padding: 10rem 0 6rem;
  background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg) 100%);
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--secondary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ===== Sections ===== */
section {
  padding: 6rem 0;
}

section:nth-child(even) {
  background: var(--bg-alt);
}

section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

/* ===== Services Grid ===== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--bg);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--secondary);
}

.service-card p {
  color: var(--text-light);
}

/* ===== Portfolio Grid ===== */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.portfolio-item {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.portfolio-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  background: var(--border);
}

.portfolio-item figcaption {
  padding: 1rem;
  font-weight: 600;
  background: var(--bg);
}

/* ===== Contact Form ===== */
.contact-form {
  max-width: 600px;
  margin: 3rem auto 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* ===== Footer ===== */
footer {
  background: var(--secondary);
  color: var(--bg-alt);
  padding: 3rem 0 1.5rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.footer-links a {
  color: var(--bg-alt);
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-bottom {
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .hero {
    padding: 8rem 0 4rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  section h2 {
    font-size: 2rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js", "main.js"),
    `// ===== Main Application =====
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        navLinks?.classList.remove('active');
        mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === \`#\${current}\`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
});`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/utils", "helpers.js"),
    `// ===== Utility Functions =====

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Format date to readable string
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "manifest.json"),
    `{
  "name": "My Website",
  "short_name": "MySite",
  "description": "A professional website built with Stunt Code",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "./assets/icons/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./assets/icons/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "robots.txt"),
    `# robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.yourwebsite.com/sitemap.xml`
  );

  createFileIfNotExists(
    path.join(rootPath, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yourwebsite.com/</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yourwebsite.com/#about</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yourwebsite.com/#services</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yourwebsite.com/#contact</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`
  );

  vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(rootPath)
  );
  vscode.window.showInformationMessage(
    "✅ Stunt-Code: Standard | Project Created Successfully!"
  );
}

module.exports = standard;
