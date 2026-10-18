import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Task Management System",
    category: "SaaS",
    label: "In development",
    description:
      "A multi-tenant workspace for companies to organize departments, employees, and tasks with role-based access.",
    highlights: ["Role-based dashboards", "Task assignment and reporting", "Company and department administration"],
    stack: ["Next.js", "PostgreSQL", "Neon", "Vercel"],
    tone: "cobalt",
  },
  {
    number: "02",
    title: "Serial Pro — Clinic Management",
    category: "Healthcare",
    label: "Planned / in development",
    description:
      "A mobile-focused clinic app for patient serials and doctor appointments, with separate flows for new and returning patients.",
    highlights: ["Appointment scheduling and cancellation", "Date-based patient records", "Patient reports"],
    stack: ["Next.js", "PostgreSQL", "Neon", "Vercel"],
    tone: "sky",
  },
  {
    number: "03",
    title: "Krishi Uddekta",
    category: "E-commerce",
    label: "Ongoing improvements",
    description:
      "An agricultural e-commerce project connecting customers with products, seeds, and seedlings.",
    highlights: ["Regional delivery charge configuration", "Product-focused shopping experience", "Performance and SEO improvements"],
    stack: ["Next.js", "GitHub", "Vercel"],
    tone: "lime",
  },
  {
    number: "04",
    title: "Mess Meal Tracker",
    category: "Productivity",
    label: "Prototype / development",
    description:
      "A shared-household meal and expense tracker for keeping monthly mess accounts organized.",
    highlights: ["Member and meal tracking", "Expense and payment management", "Monthly summaries and reports"],
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "amber",
  },
  {
    number: "05",
    title: "Education Management & Website Issue Tracker",
    category: "Business",
    label: "Concept / ongoing work",
    description:
      "A concept for tracking website issues and development tasks alongside educational institution website and management work.",
    highlights: ["Website issue tracking", "Development task organization", "Education website and management solutions"],
    stack: ["Web technologies", "WordPress"],
    tone: "coral",
  },
  {
    number: "06",
    title: "Domain Expiry Tracker",
    category: "Productivity",
    label: "Workflow",
    description:
      "A domain management workflow for organizing records and monitoring expiration dates across a large portfolio.",
    highlights: ["Centralized domain records", "Expiration date monitoring"],
    stack: ["Google Sheets", "Google Apps Script"],
    tone: "violet",
  },
  {
    number: "07",
    title: "E-commerce & Business Solutions",
    category: "E-commerce",
    label: "Ongoing client work",
    description:
      "E-commerce planning and website improvements focused on product management, checkout, orders, and delivery.",
    highlights: ["Checkout and product improvements", "Order handling", "Delivery tracking integrations"],
    stack: ["WordPress", "WooCommerce"],
    tone: "amber",
  },
  {
    number: "08",
    title: "Developer Portfolio",
    category: "Portfolio",
    label: "In development",
    description:
      "A clean, minimal, responsive portfolio for presenting technical work and development services.",
    highlights: ["Responsive project showcase", "Focused personal branding"],
    stack: ["Next.js", "Vercel"],
    tone: "sky",
  },
  {
    number: "09",
    title: "Scientific Calculator",
    category: "Experiments",
    label: "Experiment",
    description: "A scientific calculator interface inspired by the FX-991EX.",
    highlights: ["Scientific calculator interface"],
    stack: ["Web technologies"],
    tone: "cobalt",
  },
  {
    number: "10",
    title: "Bangla Typing Tester",
    category: "Experiments",
    label: "Experiment",
    description: "A Bengali typing practice and speed-testing concept.",
    highlights: ["Bengali typing practice", "Typing speed testing"],
    stack: ["Web technologies"],
    tone: "lime",
  },
  {
    number: "11",
    title: "Blood Donor Admin Panel",
    category: "Experiments",
    label: "Proposed concept",
    description: "A proposed donor photo management interface for a community foundation.",
    highlights: ["Donor photo management"],
    stack: ["Web technologies"],
    tone: "coral",
  },
];

const projectCategories = ["All", ...new Set(projects.map((project) => project.category))];

const services = [
  ["01", "Laravel & Full-Stack Development", "Architecting robust PHP/Laravel backends, scalable RESTful APIs, and secure database systems."],
  ["02", "Frontend & React Applications", "Performant web experiences with thoughtful motion, modern state management, and maintainable code."],
  ["03", "WordPress & CMS Solutions", "Flexible marketing and commerce sites shaped around custom themes and effortless client editing."],
  ["04", "Technical SEO & Performance", "Technical optimizations ensuring sub-second response times, Core Web Vitals compliance, and high SERP ranking."],
];

const experience = [
  ["2023 — Now", "Full-Stack Laravel & Frontend Developer", "International clients & freelance engineering contracts"],
  ["2022 — 2023", "Laravel & WordPress Specialist", "Fiverr & Upwork Top-Rated projects"],
  ["2021 — 2022", "PHP & Frontend Web Developer", "Local agency partner, Dhaka"],
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h14M12 5l5 5-5 5"} />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="none"
        d="M12.04 2a9.84 9.84 0 0 0-8.45 14.87L2.05 22l5.25-1.5A9.94 9.94 0 1 0 12.04 2Zm0 17.97a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.12.89.9-3.03-.2-.31a8.12 8.12 0 1 1 6.87 3.77Zm4.46-6.09c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.36-1.69c-.14-.24-.02-.37.1-.5.11-.1.25-.28.37-.42.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.4-.55-.41h-.46c-.16 0-.42.06-.65.3-.22.25-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label reveal">
      <span />
      {children}
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);

  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hisam Uddin, home">
          HU<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="mailto:hisamuddin.dev@gmail.com">
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker hero-enter">
          <span className="availability-dot" />
          Hisam Uddin · Laravel &amp; Frontend Developer
        </div>
        <h1 className="hero-title hero-enter">
          Hi, I&apos;m Hisam Uddin.
          <span>Laravel full-stack &amp;</span>
          <em>modern web developer.</em>
        </h1>
        <div className="hero-footer hero-enter">
          <p>
            Full-stack Laravel and frontend developer based in Dhaka,
            crafting robust backends, scalable REST APIs, and fast, intuitive web applications for clients worldwide.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <ArrowIcon />
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span>Laravel · PHP · MySQL · REST APIs · React · Performance · </span>
        </div>
      </section>

      <section className="marquee" aria-label="Capabilities">
        <div className="marquee-track">
          <span>Laravel development</span><i>✦</i>
          <span>Full-stack apps</span><i>✦</i>
          <span>REST APIs</span><i>✦</i>
          <span>React &amp; Inertia</span><i>✦</i>
          <span>Laravel development</span><i>✦</i>
          <span>Full-stack apps</span><i>✦</i>
          <span>REST APIs</span><i>✦</i>
          <span>React &amp; Inertia</span><i>✦</i>
        </div>
      </section>

      <section className="work-section" id="work">
        <SectionLabel>Selected work</SectionLabel>
        <div className="section-heading reveal">
          <h2>Real projects, ideas &amp; experiments</h2>
          <p>A selection of business tools, e-commerce work, and product ideas I&apos;ve built or am developing.</p>
        </div>
        <div className="filters reveal" aria-label="Filter projects">
          {projectCategories.map((item) => (
            <button
              className={filter === item ? "is-active" : ""}
              key={item}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className={`project-visual ${project.tone}`}>
                <span>{project.label}</span>
                <div className="project-window" aria-hidden="true">
                  <div className="window-bar"><i /><i /><i /></div>
                  <div className="window-content">
                    <b>{project.title}</b>
                    <span />
                    <span />
                    <div><i /><i /></div>
                  </div>
                </div>
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-copy">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
              </div>
              <div className="project-stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <SectionLabel>Core capabilities</SectionLabel>
        <div className="services-layout">
          <div className="services-intro reveal">
            <h2>Core Development Services &amp; Technical Capabilities</h2>
            <p>
              Scalable full-stack solutions built with Laravel and React, focused on measurable performance and business outcomes.
            </p>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article className="service-row reveal" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowIcon diagonal />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-top">
          <div className="about-intro-col">
            <SectionLabel>About me</SectionLabel>
            <div className="about-portrait-wrap reveal">
              <picture>
                <img
                  src="/hisam-profile.webp"
                  alt="Hisam Uddin — Laravel &amp; Frontend Developer"
                  className="about-portrait"
                  width="240"
                  height="290"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          <div className="about-statement reveal">
            <p>
              I&apos;m Hisam Uddin, a full-stack developer specializing in Laravel, PHP, and modern frontend architecture. I build secure backends, clean APIs, and responsive interfaces that deliver fast, reliable, and production-grade digital products.
            </p>
          </div>
        </div>
        <div className="stats reveal">
          <div><strong>35<sup>+</sup></strong><span>Projects completed</span></div>
          <div><strong>25<sup>+</sup></strong><span>Happy clients</span></div>
          <div><strong>10<sup>+</sup></strong><span>Countries served</span></div>
          <div><strong>5.0</strong><span>Average rating</span></div>
        </div>
        <div className="experience">
          <h3 className="reveal">Experience</h3>
          {experience.map(([year, role, company]) => (
            <article className="experience-row reveal" key={year}>
              <span>{year}</span>
              <h4>{role}</h4>
              <p>{company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <SectionLabel>FAQ &amp; Value</SectionLabel>
        <div className="faq-layout">
          <div className="faq-intro reveal">
            <h2>Why hire a full-stack Laravel developer?</h2>
            <p>
              A full-stack Laravel developer engineers complete web applications by building secure server-side architecture, relational database schemas, and RESTful APIs with PHP/Laravel, while simultaneously crafting responsive user interfaces with modern React.
            </p>
          </div>
          <div className="faq-list">
            <article className="faq-item reveal">
              <h3>Unified Full-Stack Architecture</h3>
              <p>Seamlessly connects robust Laravel 11 backend logic, Eloquent ORM, and REST APIs with reactive React components.</p>
            </article>
            <article className="faq-item reveal">
              <h3>Enterprise Security Out of the Box</h3>
              <p>Built-in protection against CSRF, SQL injections, and unauthorized data exposure with Laravel Sanctum and Policies.</p>
            </article>
            <article className="faq-item reveal">
              <h3>Faster Time-to-Market</h3>
              <p>Turnkey authentication, queue workers, and database migrations accelerate MVP to production deployment.</p>
            </article>
            <article className="faq-item reveal">
              <h3>Cost-Efficient Full-Lifecycle Delivery</h3>
              <p>A single full-stack engineer manages server deployment, API design, and client-side UI without handoff friction.</p>
            </article>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <div className="footer-intro reveal">
            <p><span /> Available for select projects</p>
            <small>Have an idea, redesign, or digital product in mind? Let&apos;s talk through it.</small>
          </div>
          <a className="footer-title reveal" href="mailto:hisamuddin.dev@gmail.com">
            Let&apos;s work together <span><ArrowIcon diagonal /></span>
          </a>
        </div>

        <div className="footer-contact-grid reveal">
          <a className="footer-contact" href="mailto:hisamuddin.dev@gmail.com">
            <span>Email me</span>
            <strong>hisamuddin.dev@gmail.com</strong>
            <ArrowIcon diagonal />
          </a>
          <a
            className="footer-contact footer-whatsapp"
            href="https://wa.me/8801609136819"
            target="_blank"
            rel="noreferrer"
          >
            <span>Quick conversation</span>
            <strong><WhatsAppIcon /> Chat on WhatsApp</strong>
            <ArrowIcon diagonal />
          </a>
        </div>

        <div className="footer-bottom">
          <a className="brand footer-brand" href="#top">HU<span>.</span></a>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>
          <p>© {new Date().getFullYear()} Hisam Uddin · Dhaka, Bangladesh</p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/8801609136819"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Hisam on WhatsApp"
      >
        <WhatsAppIcon />
        <span>Let&apos;s chat</span>
      </a>
    </main>
  );
}
