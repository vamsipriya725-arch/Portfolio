/* ============================================
   3D PORTFOLIO - INTERACTIVE JAVASCRIPT
   Particles, Animations, Typed Effect
   ============================================ */

// ==========================================
// DATA
// ==========================================
const SKILLS_DATA = [
  { name: "Python", icon: "🐍", color: "#3776AB", desc: "Core language" },
  { name: "Django", icon: "🟢", color: "#092e20", desc: "Web framework" },
  { name: "FastAPI", icon: "⚡", color: "#009688", desc: "API framework" },
  { name: "Flask", icon: "🧪", color: "#000000", desc: "Micro framework" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00", desc: "Deep learning" },
  { name: "PyTorch", icon: "🔥", color: "#EE4C2C", desc: "ML framework" },
  { name: "Pandas", icon: "🐼", color: "#150458", desc: "Data analysis" },
  { name: "NumPy", icon: "🔢", color: "#013243", desc: "Numeric computing" },
  { name: "Scikit-learn", icon: "📊", color: "#F7931E", desc: "ML library" },
  { name: "JavaScript", icon: "✨", color: "#f0db4f", desc: "Web scripting" },
  { name: "HTML/CSS", icon: "🎨", color: "#e34c26", desc: "Web fundamentals" },
  { name: "React", icon: "⚛️", color: "#61dafb", desc: "UI library" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", desc: "SQL database" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", desc: "NoSQL database" },
  { name: "Docker", icon: "🐳", color: "#2496ED", desc: "Containerization" },
  { name: "AWS", icon: "☁️", color: "#FF9900", desc: "Cloud platform" },
  { name: "Git", icon: "📦", color: "#F05032", desc: "Version control" },
  { name: "Linux", icon: "🐧", color: "#FCC624", desc: "Operating system" },
];

const PROJECTS_DATA = [
  {
    title: "AI Chat Assistant",
    description: "An intelligent conversational AI powered by LLMs with RAG pipeline integration, supporting multi-turn dialogue and context-aware responses with vector database retrieval.",
    tags: ["Python", "LangChain", "FastAPI", "ChromaDB"],
    gradient: "linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%)",
    emoji: "🤖",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts, automated ETL pipelines, and predictive analytics using machine learning models.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    gradient: "linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)",
    emoji: "📊",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
  {
    title: "Automated Web Scraper",
    description: "Distributed web scraping system with intelligent rate limiting, proxy rotation, and NLP-powered content extraction and classification.",
    tags: ["Python", "Scrapy", "Selenium", "NLP"],
    gradient: "linear-gradient(135deg, #ff6b9d 0%, #ff9a56 100%)",
    emoji: "🕷️",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
  {
    title: "ML Model Deployment Platform",
    description: "End-to-end machine learning platform for training, versioning, and deploying models with automated CI/CD pipelines and monitoring.",
    tags: ["Python", "Docker", "MLflow", "AWS"],
    gradient: "linear-gradient(135deg, #a855f7 0%, #6c63ff 100%)",
    emoji: "🚀",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
  {
    title: "REST API Microservices",
    description: "Scalable microservices architecture with JWT authentication, rate limiting, caching layer, and comprehensive API documentation.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    gradient: "linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)",
    emoji: "🔗",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
  {
    title: "Image Recognition App",
    description: "Deep learning-based image classification and object detection system using CNN architectures with transfer learning and real-time inference.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
    gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    emoji: "👁️",
    github: "https://github.com/vamsipriya725-arch",
    demo: "#"
  },
];

const EXPERIENCE_DATA = [
  {
    date: "2024 — Present",
    title: "Python Developer",
    company: "Current Role",
    description: "Developing and deploying Python-based applications, building RESTful APIs, implementing machine learning models, and automating business processes.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"]
  },
  {
    date: "2023 — 2024",
    title: "Junior Developer",
    company: "Learning & Growth",
    description: "Built full-stack web applications, worked with databases, implemented data pipelines, and contributed to open-source Python projects.",
    tech: ["Python", "Django", "React", "MongoDB", "Git"]
  },
  {
    date: "2021 — 2023",
    title: "Student & Self-Learner",
    company: "Academic Journey",
    description: "Studied computer science fundamentals, completed multiple Python certifications, built personal projects, and participated in hackathons and coding challenges.",
    tech: ["Python", "JavaScript", "HTML/CSS", "SQL", "Linux"]
  },
];

const TYPED_ROLES = [
  "Python Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Backend Engineer",
  "Data Explorer",
  "Automation Expert",
];

// ==========================================
// PRELOADER
// ==========================================
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
    document.body.style.overflow = "auto";
    initCounters();
  }, 1500);
});

// ==========================================
// 3D PARTICLE SYSTEM
// ==========================================
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.particleCount = window.innerWidth < 768 ? 40 : 80;
    this.connectionDistance = 150;
    this.mouseRadius = 200;

    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 230, // purple-blue range
      });
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
      this.init();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Mouse interaction - gentle push
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouseRadius) {
        const force = (this.mouseRadius - dist) / this.mouseRadius;
        p.vx -= (dx / dist) * force * 0.02;
        p.vy -= (dy / dist) * force * 0.02;
      }

      // Damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Draw particle with 3D depth effect
      const depthScale = p.z / 2.5;
      const size = p.size * depthScale;
      const opacity = p.opacity * depthScale;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${opacity})`;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const cdx = p.x - p2.x;
        const cdy = p.y - p2.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cdist < this.connectionDistance) {
          const lineOpacity = (1 - cdist / this.connectionDistance) * 0.15 * depthScale;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `hsla(250, 70%, 65%, ${lineOpacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================
// CURSOR GLOW
// ==========================================
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
    requestAnimationFrame(updateGlow);
  }

  updateGlow();

  // Hide on mobile
  if (window.innerWidth < 768) {
    glow.style.display = "none";
  }
}

// ==========================================
// TYPED TEXT EFFECT
// ==========================================
class TypedEffect {
  constructor(element, strings, typeSpeed = 80, deleteSpeed = 40, pauseDelay = 2000) {
    this.element = element;
    this.strings = strings;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.pauseDelay = pauseDelay;
    this.stringIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const currentString = this.strings[this.stringIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.element.textContent = currentString.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.element.textContent = currentString.substring(0, this.charIndex);
    }

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentString.length) {
      delay = this.pauseDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.stringIndex = (this.stringIndex + 1) % this.strings.length;
      delay = 500;
    }

    setTimeout(() => this.type(), delay);
  }
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");

  // Scroll handler
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active section detection
    const sections = document.querySelectorAll(".section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    function updateCounter() {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }

    updateCounter();
  });
}

// ==========================================
// RENDER SKILLS
// ==========================================
function renderSkills() {
  const grid = document.getElementById("skills-grid");

  SKILLS_DATA.forEach((skill, index) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.style.setProperty("--skill-color", skill.color);
    card.style.transitionDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-label">${skill.name}</div>
      <div class="skill-desc">${skill.desc}</div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================
// RENDER PROJECTS
// ==========================================
function renderProjects() {
  const grid = document.getElementById("projects-grid");

  PROJECTS_DATA.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.transitionDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="project-image">
        <div class="project-image-bg" style="background: ${project.gradient}">
          <span style="font-size: 64px; z-index: 1;">${project.emoji}</span>
        </div>
        <div class="project-tags">
          ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="${project.github}" class="project-link primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
          <a href="${project.demo}" class="project-link secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Demo
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================
// RENDER TIMELINE
// ==========================================
function renderTimeline() {
  const timeline = document.getElementById("timeline");

  EXPERIENCE_DATA.forEach((exp, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.style.transitionDelay = `${index * 0.15}s`;

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${exp.date}</div>
        <h3 class="timeline-title">${exp.title}</h3>
        <div class="timeline-company">${exp.company}</div>
        <p class="timeline-description">${exp.description}</p>
        <div class="timeline-tech">
          ${exp.tech.map((t) => `<span class="timeline-tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;

    timeline.appendChild(item);
  });
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up, .skill-card, .timeline-item, .project-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector(".btn-submit span");
    const originalText = btn.textContent;

    btn.textContent = "Sending...";

    setTimeout(() => {
      btn.textContent = "Sent! ✓";
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }, 1500);
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ==========================================
// TILT EFFECT ON CARDS
// ==========================================
function initTiltEffect() {
  const cards = document.querySelectorAll(".project-card, .about-card-3d");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ==========================================
// INITIALIZE EVERYTHING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Particle system
  const canvas = document.getElementById("particle-canvas");
  new ParticleSystem(canvas);

  // Cursor glow
  initCursorGlow();

  // Typed effect
  const typedElement = document.getElementById("typed-role");
  new TypedEffect(typedElement, TYPED_ROLES);

  // Navigation
  initNavigation();

  // Render content
  renderSkills();
  renderProjects();
  renderTimeline();

  // Scroll reveal
  initScrollReveal();

  // Contact form
  initContactForm();

  // Smooth scroll
  initSmoothScroll();

  // Tilt effect
  setTimeout(initTiltEffect, 100);
});
