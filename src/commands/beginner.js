const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");
const { createDirectoryIfNotExists } = require("../utils/directoryHelper");

function beginner(rootPath) {
  createDirectoryIfNotExists(path.join(rootPath, "assets"));
  createDirectoryIfNotExists(path.join(rootPath, "assets", "images"));
  createDirectoryIfNotExists(path.join(rootPath, "assets", "fonts"));

  createFileIfNotExists(
    path.join(rootPath, "index.html"),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
  <!-- Primary SEO Meta Tags -->
  <title>My Website - Welcome</title>
  <meta name="description" content="A brief description of your website (150-160 characters)" />
  <meta name="keywords" content="keyword1, keyword2, keyword3" />
  <meta name="author" content="Your Name" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.yourwebsite.com/" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.yourwebsite.com/" />
  <meta property="og:title" content="My Website - Welcome" />
  <meta property="og:description" content="A brief description of your website" />
  <meta property="og:image" content="./assets/images/og-image.jpg" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.yourwebsite.com/" />
  <meta name="twitter:title" content="My Website - Welcome" />
  <meta name="twitter:description" content="A brief description of your website" />
  <meta name="twitter:image" content="./assets/images/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./assets/images/favicon.png" />
  <link rel="apple-touch-icon" href="./assets/images/apple-touch-icon.png" />
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <div class="container">
        <a href="/" class="logo" aria-label="Home">MyWebsite</a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main role="main">
    <section id="home" aria-labelledby="home-heading">
      <div class="container">
        <h1 id="home-heading">Welcome to My Website</h1>
        <p>Thank you for using <strong>STUNT CODE</strong> 😊</p>
      </div>
    </section>

    <section id="about" aria-labelledby="about-heading">
      <div class="container">
        <h2 id="about-heading">About Us</h2>
        <p>Add your about content here.</p>
      </div>
    </section>

    <section id="services" aria-labelledby="services-heading">
      <div class="container">
        <h2 id="services-heading">Our Services</h2>
        <p>Add your services content here.</p>
      </div>
    </section>

    <section id="contact" aria-labelledby="contact-heading">
      <div class="container">
        <h2 id="contact-heading">Contact Us</h2>
        <p>Add your contact content here.</p>
      </div>
    </section>
  </main>

  <footer role="contentinfo">
    <div class="container">
      <p>&copy; <span id="year"></span> MyWebsite. All rights reserved.</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="./script.js" defer></script>
</body>
</html>`
  );

  createFileIfNotExists(
    path.join(rootPath, "style.css"),
    `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* ===== CSS Reset & Base ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-color: #1f2937;
  --bg-color: #ffffff;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-600: #4b5563;
  --gray-800: #1f2937;
  --max-width: 1200px;
  --transition: all 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== Header & Navigation ===== */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.logo:hover {
  color: var(--secondary-color);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--gray-800);
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--primary-color);
}

/* ===== Main Content ===== */
main {
  margin-top: 80px;
}

section {
  padding: 5rem 0;
}

section:nth-child(even) {
  background-color: var(--gray-100);
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--gray-800);
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--gray-800);
}

p {
  font-size: 1.125rem;
  color: var(--gray-600);
  max-width: 65ch;
}

/* ===== Footer ===== */
footer {
  background-color: var(--gray-800);
  color: var(--gray-200);
  padding: 2rem 0;
  text-align: center;
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .nav-links {
    gap: 1rem;
  }

  section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  nav .container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}`
  );

  createFileIfNotExists(
    path.join(rootPath, "script.js"),
    `// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === \`#\${current}\`) {
        link.classList.add('active');
      }
    });
  });
});`
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
</urlset>`
  );

  vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(rootPath)
  );
  vscode.window.showInformationMessage(
    "✅ Stunt-Code: Beginner | Project Created Successfully!"
  );
}

module.exports = beginner;
