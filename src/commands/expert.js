const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");
const { createDirectoryIfNotExists } = require("../utils/directoryHelper");

function expert(rootPath) {
  const folders = [
    "public",
    "public/images",
    "public/fonts",
    "public/icons",
    "src",
    "src/css",
    "src/css/base",
    "src/css/components",
    "src/css/layout",
    "src/css/pages",
    "src/css/utils",
    "src/js",
    "src/js/core",
    "src/js/components",
    "src/js/services",
    "src/js/utils",
    "src/js/store",
    "src/templates",
    "src/partials",
    "src/data",
    "assets",
    "assets/images",
    "assets/svg",
    "assets/videos",
    "docs",
    "tests",
    "tests/unit",
    "tests/integration",
    "config",
  ];

  folders.forEach((folder) =>
    createDirectoryIfNotExists(path.join(rootPath, folder))
  );

  createFileIfNotExists(
    path.join(rootPath, "index.html"),
    `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light dark" />
  
  <!-- Primary SEO Meta Tags -->
  <title>Enterprise Application - Professional Solution</title>
  <meta name="description" content="Enterprise-grade web application built with modern architecture. Scalable, secure, and optimized for performance." />
  <meta name="keywords" content="enterprise, web application, modern architecture, scalable solution" />
  <meta name="author" content="Your Organization" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="https://www.yourdomain.com/" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.yourdomain.com/" />
  <meta property="og:title" content="Enterprise Application - Professional Solution" />
  <meta property="og:description" content="Enterprise-grade web application built with modern architecture." />
  <meta property="og:image" content="https://www.yourdomain.com/images/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Enterprise App" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@yourhandle" />
  <meta name="twitter:creator" content="@yourhandle" />
  <meta name="twitter:url" content="https://www.yourdomain.com/" />
  <meta name="twitter:title" content="Enterprise Application - Professional Solution" />
  <meta name="twitter:description" content="Enterprise-grade web application built with modern architecture." />
  <meta name="twitter:image" content="https://www.yourdomain.com/images/twitter-image.jpg" />
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Enterprise Application",
    "url": "https://www.yourdomain.com/",
    "description": "Enterprise-grade web application",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  
  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#020617" media="(prefers-color-scheme: dark)" />
  <meta name="msapplication-TileColor" content="#0f172a" />
  
  <!-- Preconnect for Performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="https://api.yourdomain.com" />
  
  <!-- Preload Critical Resources -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="/src/css/base/reset.css" />
  <link rel="stylesheet" href="/src/css/base/variables.css" />
  <link rel="stylesheet" href="/src/css/base/typography.css" />
  <link rel="stylesheet" href="/src/css/utils/utilities.css" />
  <link rel="stylesheet" href="/src/css/layout/grid.css" />
  <link rel="stylesheet" href="/src/css/layout/container.css" />
  <link rel="stylesheet" href="/src/css/components/header.css" />
  <link rel="stylesheet" href="/src/css/components/footer.css" />
  <link rel="stylesheet" href="/src/css/components/buttons.css" />
  <link rel="stylesheet" href="/src/css/components/cards.css" />
  <link rel="stylesheet" href="/src/css/components/forms.css" />
  <link rel="stylesheet" href="/src/css/pages/home.css" />
</head>
<body class="no-js">
  <script>document.body.classList.remove('no-js');</script>
  
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <div id="app" class="app-wrapper">
    <header class="site-header" role="banner">
      <!-- Header content loaded from partial -->
      <div class="container">
        <a href="/" class="logo" aria-label="Enterprise App Home">
          <svg class="logo-icon" aria-hidden="true" viewBox="0 0 32 32">
            <path d="M16 2L2 9l14 7 14-7-14-7zM2 23l14 7 14-7M2 16l14 7 14-7" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
          <span class="logo-text">EnterpriseApp</span>
        </a>
        
        <button class="mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">
          <span class="hamburger-line"></span>
        </button>
        
        <nav id="main-nav" class="main-nav" role="navigation" aria-label="Primary navigation">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item nav-item--has-submenu">
              <button class="nav-link nav-link--submenu" aria-expanded="false">
                Products
                <svg class="chevron" aria-hidden="true" viewBox="0 0 20 20">
                  <path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" />
                </svg>
              </button>
              <ul class="submenu" role="menu">
                <li role="none"><a href="/products/analytics" role="menuitem">Analytics</a></li>
                <li role="none"><a href="/products/automation" role="menuitem">Automation</a></li>
                <li role="none"><a href="/products/security" role="menuitem">Security</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="/solutions" class="nav-link">Solutions</a></li>
            <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="/docs" class="nav-link">Documentation</a></li>
            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <a href="/login" class="btn btn--ghost">Sign In</a>
          <a href="/signup" class="btn btn--primary">Get Started</a>
        </div>
      </div>
    </header>

    <main id="main-content" role="main">
      <section class="hero-section" aria-labelledby="hero-heading">
        <div class="container">
          <div class="hero-content">
            <span class="hero-badge">New: AI-Powered Features →</span>
            <h1 id="hero-heading">Build the Future with Enterprise-Grade Solutions</h1>
            <p class="hero-description">Thank you for using <strong>STUNT CODE</strong>. This expert template provides a production-ready architecture with modern best practices.</p>
            <div class="hero-actions">
              <a href="/signup" class="btn btn--primary btn--lg">Start Free Trial</a>
              <a href="/demo" class="btn btn--outline btn--lg">Watch Demo</a>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-value">10K+</span>
                <span class="stat-label">Active Users</span>
              </div>
              <div class="stat">
                <span class="stat-value">99.9%</span>
                <span class="stat-label">Uptime</span>
              </div>
              <div class="stat">
                <span class="stat-value">24/7</span>
                <span class="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <img src="/images/hero-illustration.svg" alt="Enterprise platform dashboard" loading="eager" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="features-section" aria-labelledby="features-heading">
        <div class="container">
          <header class="section-header">
            <span class="section-label">Features</span>
            <h2 id="features-heading">Everything You Need to Scale</h2>
            <p class="section-description">Comprehensive tools and features designed for modern enterprises.</p>
          </header>
          
          <div class="features-grid">
            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance with sub-second load times and efficient resource management.</p>
            </article>
            
            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade encryption and security protocols to protect your data.</p>
            </article>
            
            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Real-time insights and comprehensive reporting for data-driven decisions.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="cta-section" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content">
            <h2 id="cta-heading">Ready to Get Started?</h2>
            <p>Join thousands of companies already using our platform.</p>
            <div class="cta-actions">
              <a href="/signup" class="btn btn--primary btn--lg">Start Free Trial</a>
              <a href="/contact" class="btn btn--ghost btn--lg">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="logo">
              <svg class="logo-icon" aria-hidden="true" viewBox="0 0 32 32">
                <path d="M16 2L2 9l14 7 14-7-14-7zM2 23l14 7 14-7M2 16l14 7 14-7" stroke="currentColor" stroke-width="2" fill="none" />
              </svg>
              <span class="logo-text">EnterpriseApp</span>
            </a>
            <p class="footer-description">Building the future of enterprise software, one solution at a time.</p>
            <div class="social-links">
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
              <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            </div>
          </div>
          
          <nav class="footer-nav" aria-label="Product navigation">
            <h3>Product</h3>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/integrations">Integrations</a></li>
              <li><a href="/changelog">Changelog</a></li>
            </ul>
          </nav>
          
          <nav class="footer-nav" aria-label="Company navigation">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
            </ul>
          </nav>
          
          <nav class="footer-nav" aria-label="Resources navigation">
            <h3>Resources</h3>
            <ul>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/status">Status</a></li>
            </ul>
          </nav>
          
          <nav class="footer-nav" aria-label="Legal navigation">
            <h3>Legal</h3>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </nav>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; <span id="year"></span> EnterpriseApp. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- Core JavaScript -->
  <script type="module" src="/src/js/core/app.js"></script>
</body>
</html>`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/base", "variables.css"),
    `/* ===== Design Tokens ===== */
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-900: #1e3a8a;
  
  --color-secondary-50: #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-500: #64748b;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #0f172a;
  --color-secondary-950: #020617;
  
  --color-accent-500: #06b6d4;
  --color-accent-600: #0891b2;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* Borders */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Z-Index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/base", "reset.css"),
    `/* ===== Modern CSS Reset ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  scroll-behavior: smooth;
  hanging-punctuation: first last;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
  line-height: 1.6;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
  line-height: 1.2;
}

p {
  text-wrap: pretty;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/base", "typography.css"),
    `/* ===== Typography ===== */
h1 {
  font-size: var(--text-5xl);
  font-weight: 800;
  letter-spacing: -0.025em;
}

h2 {
  font-size: var(--text-4xl);
  font-weight: 700;
  letter-spacing: -0.025em;
}

h3 {
  font-size: var(--text-3xl);
  font-weight: 600;
}

h4 {
  font-size: var(--text-2xl);
  font-weight: 600;
}

p {
  font-size: var(--text-base);
  line-height: 1.7;
}

@media (max-width: 768px) {
  h1 { font-size: var(--text-3xl); }
  h2 { font-size: var(--text-2xl); }
  h3 { font-size: var(--text-xl); }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/utils", "utilities.css"),
    `/* ===== Utility Classes ===== */
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

.grid { display: grid; }

.hidden { display: none; }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (max-width: 768px) {
  .container {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/layout", "grid.css"),
    `/* ===== Grid System ===== */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/layout", "container.css"),
    `/* ===== Container Layouts ===== */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

main {
  flex: 1;
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/components", "header.css"),
    `/* ===== Header ===== */
.site-header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-secondary-100);
}

.site-header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  gap: var(--space-8);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-secondary-900);
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-primary-600);
}

.main-nav {
  display: flex;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-link {
  padding: var(--space-2) var(--space-3);
  font-weight: 500;
  color: var(--color-secondary-500);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-secondary-900);
  background: var(--color-secondary-50);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.mobile-menu-toggle {
  display: none;
  padding: var(--space-2);
}

@media (max-width: 1024px) {
  .mobile-menu-toggle {
    display: block;
  }
  
  .main-nav {
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid var(--color-secondary-100);
    padding: var(--space-4);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-base);
  }
  
  .main-nav.is-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-list {
    flex-direction: column;
    align-items: stretch;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/components", "buttons.css"),
    `/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-primary-600);
  color: white;
}

.btn--primary:hover {
  background: var(--color-primary-700);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn--outline {
  background: transparent;
  color: var(--color-secondary-900);
  border: 1px solid var(--color-secondary-100);
}

.btn--outline:hover {
  background: var(--color-secondary-50);
  border-color: var(--color-secondary-500);
}

.btn--ghost {
  background: transparent;
  color: var(--color-secondary-500);
}

.btn--ghost:hover {
  color: var(--color-secondary-900);
  background: var(--color-secondary-50);
}

.btn--lg {
  padding: 0.875rem 1.75rem;
  font-size: var(--text-base);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/components", "cards.css"),
    `/* ===== Cards ===== */
.feature-card {
  padding: var(--space-8);
  background: white;
  border: 1px solid var(--color-secondary-100);
  border-radius: var(--radius-xl);
  transition: var(--transition-base);
}

.feature-card:hover {
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: var(--space-4);
  color: var(--color-primary-600);
}

.feature-card h3 {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
}

.feature-card p {
  color: var(--color-secondary-500);
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/pages", "home.css"),
    `/* ===== Home Page ===== */
.hero-section {
  padding: var(--space-24) 0;
  background: linear-gradient(180deg, var(--color-secondary-50) 0%, white 100%);
}

.hero-section .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.hero-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-50);
  color: var(--color-primary-700);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.hero-section h1 {
  margin-bottom: var(--space-4);
  color: var(--color-secondary-900);
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--color-secondary-500);
  margin-bottom: var(--space-8);
  max-width: 540px;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.hero-stats {
  display: flex;
  gap: var(--space-12);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-secondary-900);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-secondary-500);
}

.features-section {
  padding: var(--space-24) 0;
}

.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-16);
}

.section-label {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-50);
  color: var(--color-primary-600);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.section-header h2 {
  margin-bottom: var(--space-3);
}

.section-description {
  color: var(--color-secondary-500);
  font-size: var(--text-lg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.cta-section {
  padding: var(--space-24) 0;
  background: var(--color-secondary-900);
  color: white;
  text-align: center;
}

.cta-content h2 {
  color: white;
  margin-bottom: var(--space-3);
}

.cta-content p {
  color: var(--color-secondary-100);
  margin-bottom: var(--space-8);
  font-size: var(--text-lg);
}

.cta-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

@media (max-width: 1024px) {
  .hero-section .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions,
  .hero-stats {
    justify-content: center;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: var(--space-16) 0;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/components", "footer.css"),
    `/* ===== Footer ===== */
.site-footer {
  background: var(--color-secondary-950);
  color: var(--color-secondary-100);
  padding: var(--space-16) 0 var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

.footer-brand .logo {
  color: white;
  margin-bottom: var(--space-4);
}

.footer-description {
  color: var(--color-secondary-500);
  margin-bottom: var(--space-6);
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: var(--space-4);
}

.social-links a {
  width: 2rem;
  height: 2rem;
  color: var(--color-secondary-500);
  transition: var(--transition-base);
}

.social-links a:hover {
  color: white;
}

.footer-nav h3 {
  font-size: var(--text-sm);
  font-weight: 600;
  color: white;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-nav ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-nav a {
  color: var(--color-secondary-500);
  font-size: var(--text-sm);
  transition: var(--transition-base);
}

.footer-nav a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-secondary-800);
  font-size: var(--text-sm);
  color: var(--color-secondary-500);
}

.footer-bottom-links {
  display: flex;
  gap: var(--space-6);
}

.footer-bottom-links a {
  color: var(--color-secondary-500);
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-brand {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-brand {
    grid-column: span 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/css/components", "forms.css"),
    `/* ===== Forms ===== */
.form-group {
  margin-bottom: var(--space-4);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-secondary-800);
}

.form-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid var(--color-secondary-100);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  transition: var(--transition-base);
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.form-input::placeholder {
  color: var(--color-secondary-500);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-error {
  margin-top: var(--space-1);
  font-size: var(--text-sm);
  color: var(--color-error);
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/core", "app.js"),
    `// ===== Application Entry Point =====
import { Router } from './router.js';
import { EventManager } from './event-manager.js';
import { ThemeManager } from './theme-manager.js';

class App {
  constructor() {
    this.router = new Router();
    this.events = new EventManager();
    this.theme = new ThemeManager();
    this.isInitialized = false;
  }

  async init() {
    if (this.isInitialized) return;

    try {
      await this.initializeCore();
      this.bindEvents();
      this.isInitialized = true;
      console.log('[App] Application initialized');
    } catch (error) {
      console.error('[App] Initialization failed:', error);
    }
  }

  async initializeCore() {
    this.theme.init();
    this.router.init();
  }

  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateCopyrightYear();
      this.initMobileMenu();
      this.initSmoothScroll();
    });
  }

  updateCopyrightYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// Initialize application
const app = new App();
app.init();

export { App };`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/core", "event-manager.js"),
    `// ===== Event Manager =====
class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);

    return () => this.off(event, callback);
  }

  off(event, callback) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event, data) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  clear() {
    this.listeners.clear();
  }
}

export { EventManager };`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/core", "router.js"),
    `// ===== Router =====
class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
  }

  init() {
    window.addEventListener('popstate', () => this.handleRouteChange());
    this.handleRouteChange();
  }

  addRoute(path, handler) {
    this.routes.set(path, handler);
  }

  navigate(path) {
    history.pushState({}, '', path);
    this.handleRouteChange();
  }

  handleRouteChange() {
    const path = window.location.pathname;
    const handler = this.routes.get(path);

    if (handler && handler !== this.currentRoute) {
      this.currentRoute = handler;
      handler();
    }
  }
}

export { Router };`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/core", "theme-manager.js"),
    `// ===== Theme Manager =====
class ThemeManager {
  constructor() {
    this.storageKey = 'theme-preference';
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  }

  init() {
    const savedTheme = localStorage.getItem(this.storageKey);
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.mediaQuery.matches ? 'dark' : 'light');
    }

    this.mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}

export { ThemeManager };`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/utils", "helpers.js"),
    `// ===== Utility Functions =====

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

export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
}

export function generateId(prefix = 'id') {
  return \`\${prefix}_\${Math.random().toString(36).substr(2, 9)}_\${Date.now()}\`;
}

export function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

export async function fetchData(url, options = {}) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  return response.json();
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/utils", "validators.js"),
    `// ===== Validation Functions =====

export function isEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

export function isStrongPassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

export function isURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeInput(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js/services", "api.js"),
    `// ===== API Service =====
const API_BASE_URL = import.meta?.env?.VITE_API_URL || '/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
      }

      return response.json();
    } catch (error) {
      console.error('[API] Request failed:', error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiService();`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/data", "config.json"),
    `{
  "appName": "EnterpriseApp",
  "version": "1.0.0",
  "api": {
    "baseUrl": "/api",
    "timeout": 10000,
    "retries": 3
  },
  "features": {
    "darkMode": true,
    "analytics": true,
    "notifications": true
  },
  "seo": {
    "defaultTitle": "Enterprise Application",
    "defaultDescription": "Enterprise-grade web application",
    "siteUrl": "https://www.yourdomain.com"
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "manifest.json"),
    `{
  "name": "Enterprise Application",
  "short_name": "EnterpriseApp",
  "description": "Enterprise-grade web application built with modern architecture",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0f172a",
  "orientation": "any",
  "icons": [
    {
      "src": "/icons/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["business", "productivity"]
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "robots.txt"),
    `# robots.txt
User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap
Sitemap: https://www.yourdomain.com/sitemap.xml`
  );

  createFileIfNotExists(
    path.join(rootPath, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.yourdomain.com/</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/products/analytics</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/solutions</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/pricing</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/docs</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/contact</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`
  );

  createFileIfNotExists(
    path.join(rootPath, ".gitignore"),
    `# Dependencies
node_modules/

# Build output
dist/
build/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/`
  );

  createFileIfNotExists(
    path.join(rootPath, "README.md"),
    `# Enterprise Application

A production-ready web application built with modern architecture and best practices.

## Project Structure

\`\`\`
├── public/           # Static assets
│   ├── images/       # Image assets
│   ├── fonts/        # Font files
│   └── icons/        # Favicon and icons
├── src/
│   ├── css/          # Stylesheets
│   │   ├── base/     # Reset, variables, typography
│   │   ├── components/ # Reusable components
│   │   ├── layout/   # Layout styles
│   │   ├── pages/    # Page-specific styles
│   │   └── utils/    # Utility classes
│   ├── js/           # JavaScript
│   │   ├── core/     # Core application logic
│   │   ├── components/ # UI components
│   │   ├── services/ # API and external services
│   │   ├── utils/    # Utility functions
│   │   └── store/    # State management
│   ├── templates/    # HTML templates
│   ├── partials/     # Reusable HTML partials
│   └── data/         # Configuration and data
├── tests/            # Test files
├── docs/             # Documentation
└── config/           # Configuration files
\`\`\`

## Getting Started

1. Open \`index.html\` in your browser
2. Start customizing the templates and styles

## Features

- Semantic HTML5 structure
- SEO optimized with meta tags and structured data
- Accessible (WCAG 2.1 compliant)
- Responsive design
- Modern CSS architecture (BEM-inspired)
- Modular JavaScript (ES6 modules)
- PWA ready

## License

MIT
`
  );

  vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(rootPath)
  );
  vscode.window.showInformationMessage(
    "✅ Stunt-Code: Expert | Project Created Successfully!"
  );
}

module.exports = expert;
