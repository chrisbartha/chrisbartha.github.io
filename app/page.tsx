import ClientScripts from "./ClientScripts";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <>
      <VantaBackground />
      <div className="page-shell">
        <div className="noise"></div>
        <div className="gradient-blur"></div>

        <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-text">CB</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </div>
          <button className="mobile-menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero" id="about">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Christopher</span>
              <span className="title-line">Bartha</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Engineer</p>
            <p className="hero-description">
              I build exceptional digital experiences with modern web
              technologies. Passionate about creating scalable applications that
              solve real problems.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Connect
              </a>
              <a href="#projects" className="btn btn-secondary">
                View work
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Large-Scale Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">CS</span>
                <span className="stat-label">B.S. at SSU</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="window-title">developer.ts</span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="keyword">const</span>{" "}
                  <span className="variable">developer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="property">name</span>:{" "}
                  <span className="string">&quot;Christopher Bartha&quot;</span>
                  ,{"\n"}
                  {"  "}
                  <span className="property">role</span>:{" "}
                  <span className="string">&quot;Full-Stack Engineer&quot;</span>
                  ,{"\n"}
                  {"  "}
                  <span className="property">location</span>:{" "}
                  <span className="string">
                    &quot;San Francisco Bay Area&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="property">skills</span>: [{"\n"}
                  {"    "}
                  <span className="string">&quot;React&quot;</span>,{" "}
                  <span className="string">&quot;Next.js&quot;</span>,{" "}
                  <span className="string">&quot;TypeScript&quot;</span>,{"\n"}
                  {"    "}
                  <span className="string">&quot;Python&quot;</span>,{" "}
                  <span className="string">&quot;PostgreSQL&quot;</span>,{" "}
                  <span className="string">&quot;Node.js&quot;</span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}
                  <span className="property">currently</span>:{" "}
                  <span className="string">
                    &quot;Studying ML&quot;
                  </span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Where I&apos;ve contributed and grown
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card featured">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">Flow AI</h3>
                </div>
                <span className="experience-date">Oct 2024 — Nov 2025</span>
              </div>
              <h4 className="experience-role">Founding Engineer, Full-Stack</h4>
              <p className="experience-location">San Francisco, CA (Remote)</p>
              <ul className="experience-highlights">
                <li>
                  Implemented secure, full-stack authentication with Supabase
                  Auth, RLS, and Next.js middleware for multi-tenant workspaces
                </li>
                <li>
                  Designed a normalized Postgres schema supporting fast queries
                  and row-level security
                </li>
                <li>
                  Built GPT-powered task generation and chat flows; A/B tests
                  showed 95% preference for new variants
                </li>
                <li>
                  Migrated React SPA to Next.js App Router with SSR/ISR,
                  reducing bundle size by ~35% and improving load times by ~30%
                </li>
              </ul>
              <div className="experience-tech">
                <span>Next.js</span>
                <span>React</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
                <span>TypeScript</span>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">Libutti Realty Advisors</h3>
                </div>
                <span className="experience-date">Oct 2023 — Apr 2024</span>
              </div>
              <h4 className="experience-role">Software Developer</h4>
              <p className="experience-location">San Diego, CA</p>
              <ul className="experience-highlights">
                <li>
                  Built and maintained web platforms for property listings,
                  customer interactions, and transactions
                </li>
                <li>
                  Designed and optimized databases to handle large volumes of
                  real estate data
                </li>
                <li>
                  Implemented input validation, error handling, and logging to
                  reduce data inconsistencies
                </li>
              </ul>
              <div className="experience-tech">
                <span>JavaScript</span>
                <span>SQL</span>
                <span>REST APIs</span>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">MentorAmp</h3>
                </div>
                <span className="experience-date">May 2021 — Feb 2022</span>
              </div>
              <h4 className="experience-role">Software Developer</h4>
              <p className="experience-location">San Francisco, CA</p>
              <ul className="experience-highlights">
                <li>
                  Identified, reproduced, and documented UX/UI issues across web
                  and mobile platforms
                </li>
                <li>
                  Actively participated in agile sprints, contributing to daily
                  stand-ups, sprint planning, and retrospectives
                </li>
              </ul>
              <div className="experience-tech">
                <span>Agile</span>
                <span>QA</span>
                <span>UX/UI</span>
              </div>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Things I&apos;ve built and explored</p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">San Diego Airbnb Analysis</h3>
                  <span className="project-year">2024</span>
                </div>
                <p className="project-description">
                  Exploratory data analysis of San Diego Airbnb listings using
                  Python, focusing on rental price patterns, neighborhood
                  trends, and host behaviors. Utilized machine learning models
                  to uncover actionable insights for hosts and travelers.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>XGBoost</span>
                  <span>Pandas</span>
                  <span>NumPy</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/chrisbartha/Airbnb-Analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">ABGQI-CNN Acoustic Classifier</h3>
                  <span className="project-year">2023</span>
                </div>
                <p className="project-description">
                  CNN-based tool using TensorFlow for classifying environmental
                  soundscapes. Aids in ecological analysis by accurately
                  identifying sound sources and supporting biodiversity
                  monitoring efforts.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>CNN</span>
                  <span>Jupyter</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/chrisbartha/ABGQI-CNN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h.01M7 12h.01M7 17h.01M12 7h.01M12 12h.01M12 17h.01M17 7h.01M17 12h.01M17 17h.01" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Automated Wordle Solver</h3>
                  <span className="project-year">2022</span>
                </div>
                <p className="project-description">
                  Python script that automates Wordle by detecting game state on
                  screen, entering optimal guesses based on letter frequency
                  analysis, and iterating until solved. Starts with
                  &quot;CRANE&quot; — identified as an optimal starting word
                  through computational analysis.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>PyAutoGUI</span>
                  <span>Automation</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Next.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C++</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Docker</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks & Libraries</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Next.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Databases</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Supabase</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">SQLite</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Platforms</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">GitHub</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">REST APIs</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section section-compact" id="education">
          <div className="education-card">
            <div className="education-content">
              <div className="education-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="education-details">
                <h3>Sonoma State University</h3>
                <p className="education-degree">B.S. in Computer Science</p>
                <p className="education-meta">GPA: 3.6 • Rohnert Park, CA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="contact-container">
            <div className="contact-content">
              <span className="section-number">04</span>
              <h2 className="contact-title">Let&apos;s work together</h2>
              <p className="contact-description">
                I&apos;m currently open to new opportunities and would love to
                hear about your project. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
              <div className="contact-links">
                <a
                  href="mailto:dev@chrisbartha.com"
                  className="contact-link primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  dev@chrisbartha.com
                </a>
                <a
                  href="https://linkedin.com/in/chrisbartha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/chrisbartha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Built with care by Christopher Bartha</p>
          <p className="footer-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            San Francisco Bay Area
          </p>
        </div>
        </footer>
      </div>

      <ClientScripts />
    </>
  );
}

