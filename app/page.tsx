import ClientScripts from "./ClientScripts";
import VantaBackground from "./components/VantaBackground";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <VantaBackground />
      <div className="page-shell">
        <Navbar />

        <main>
          <section className="hero">
            <h1 className="hero-title">Hi, I&apos;m Chris</h1>
            <p className="hero-subtitle">Full-Stack Software Engineer</p>
          </section>

          <section className="section section-about" id="about">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hi, I&apos;m Chris. I&apos;ve been a Full-Stack Software Engineer
              for 2+ years, building and shipping production systems, from
              backend APIs and databases to modern web interfaces. I have a
              passion for all things tech, and am actively looking to learn
              about new technologies and opportunities. Let&apos;s connect!
            </p>
          </section>

          <section className="section" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
              <article className="experience-card liquid-glass featured">
                <header className="experience-header">
                  <h3 className="company-name">Flow AI</h3>
                  <time className="experience-date">Oct 2024 — Nov 2025</time>
                </header>
                <p className="experience-role">Founding Engineer, Full-Stack</p>
                <p className="experience-location">
                  San Francisco, CA (Remote)
                </p>
                <ul className="experience-highlights">
                  <li>
                    Spearheaded development of a robust full-stack
                    authentication system (Supabase Auth with row-level security
                    via Next.js middle-ware), enabling secure, long-lived
                    sessions and protected routes across multi-tenant workspaces
                  </li>
                  <li>
                    Architected a normalized PostgreSQL schema to ensure fast
                    query performance and clear data ownership, enforcing strict
                    access controls with row-level security
                  </li>
                  <li>
                    Developed GPT-powered task generation and chat flows,
                    conducting blinded A/B tests on prompts and models that
                    showed a 95% preference for the new variant among users
                    (testers and engineers)
                  </li>
                  <li>
                    Optimized front-end performance by migrating a React
                    single-page app to Next.js with Server-Side Rendering (SSR)
                    and Incremental Static Regeneration (ISR), cutting bundle
                    size by ~35% and reducing initial page load time by ~30%
                  </li>
                </ul>
                <ul className="experience-tech" aria-label="Technologies used">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>Supabase</li>
                  <li>PostgreSQL</li>
                  <li>TypeScript</li>
                </ul>
              </article>

              <article className="experience-card liquid-glass">
                <header className="experience-header">
                  <h3 className="company-name">Libutti Realty Advisors</h3>
                  <time className="experience-date">Oct 2023 — Apr 2024</time>
                </header>
                <p className="experience-role">Software Developer</p>
                <p className="experience-location">San Diego, CA</p>
                <ul className="experience-highlights">
                  <li>
                    Developed and maintained a web platform for property
                    listings, customer interactions, and transactions,
                    streamlining the real estate management process for the firm
                  </li>
                  <li>
                    Designed and optimized a relational database for property
                    records, ensuring fast query performance and scalability
                  </li>
                  <li>
                    Implemented input validation, error handling, and logging
                    that reduced data inconsistencies and made it easier to
                    debug production issues
                  </li>
                </ul>
                <ul className="experience-tech" aria-label="Technologies used">
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>REST APIs</li>
                </ul>
              </article>

              <article className="experience-card liquid-glass">
                <header className="experience-header">
                  <h3 className="company-name">MentorAmp</h3>
                  <time className="experience-date">May 2021 — Feb 2022</time>
                </header>
                <p className="experience-role">Software Developer</p>
                <p className="experience-location">San Francisco, CA</p>
                <ul className="experience-highlights">
                  <li>
                    Diagnosed and documented dozens of UX/UI issues,
                    collaborating with engineers to prioritize fixes and enhance
                    user experience
                  </li>
                  <li>
                    Collaborated in Agile sprints (daily stand-ups, planning,
                    retrospectives), contributing feedback that kept development
                    on schedule and ensured 100% on-time delivery of project
                    milestones
                  </li>
                </ul>
                <ul className="experience-tech" aria-label="Technologies used">
                  <li>Agile</li>
                  <li>QA</li>
                  <li>UX/UI</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="section" id="projects">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
              <article className="project-card liquid-glass">
                <figure className="project-image" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </figure>
                <div className="project-content">
                  <header className="project-header">
                    <h3 className="project-title">San Diego Airbnb Analysis</h3>
                    <time className="project-year">2024</time>
                  </header>
                  <p className="project-description">
                    Exploratory data analysis of San Diego Airbnb listings using
                    Python, focusing on rental price patterns, neighborhood
                    trends, and host behaviors. Utilized machine learning models
                    to uncover actionable insights for hosts and travelers
                  </p>
                  <ul className="project-tech" aria-label="Technologies used">
                    <li>Python</li>
                    <li>XGBoost</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                  </ul>
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
                      aria-hidden="true"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </article>

              <article className="project-card liquid-glass">
                <figure className="project-image" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </figure>
                <div className="project-content">
                  <header className="project-header">
                    <h3 className="project-title">
                      ABGQI-CNN Acoustic Classifier
                    </h3>
                    <time className="project-year">2023</time>
                  </header>
                  <p className="project-description">
                    Convolutionsal Neural Network (CNN) model that classifies
                    environmental soundscapes from audio recordings, accurately
                    identifying wildlife and other sound sources to support
                    ecological research and biodiversity monitoring efforts
                  </p>
                  <ul className="project-tech" aria-label="Technologies used">
                    <li>Python</li>
                    <li>TensorFlow</li>
                    <li>CNN</li>
                    <li>Jupyter</li>
                  </ul>
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
                      aria-hidden="true"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </article>

              <article className="project-card liquid-glass">
                <figure className="project-image" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h.01M7 12h.01M7 17h.01M12 7h.01M12 12h.01M12 17h.01M17 7h.01M17 12h.01M17 17h.01" />
                  </svg>
                </figure>
                <div className="project-content">
                  <header className="project-header">
                    <h3 className="project-title">Automated Wordle Solver</h3>
                    <time className="project-year">2022</time>
                  </header>
                  <p className="project-description">
                    Automation script that plays the Wordle game autonomously by
                    detecting on-screen game state and entering optimal guesses
                    (using letter frequency analysis), consistently solving each
                    puzzle within the allowed six attempts using an
                    algorithmically chosen start word
                  </p>
                  <ul className="project-tech" aria-label="Technologies used">
                    <li>Python</li>
                    <li>PyAutoGUI</li>
                    <li>Automation</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <section className="section" id="skills">
            <h2 className="section-title">My Stack</h2>
            <div className="skills-grid">
              <div className="skill-category liquid-glass">
                <h3 className="skill-category-title">Languages</h3>
                <ul className="skill-items">
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>Docker</li>
                </ul>
              </div>

              <div className="skill-category liquid-glass">
                <h3 className="skill-category-title">Frameworks & Libraries</h3>
                <ul className="skill-items">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="skill-category liquid-glass">
                <h3 className="skill-category-title">Databases</h3>
                <ul className="skill-items">
                  <li>PostgreSQL</li>
                  <li>Supabase</li>
                  <li>SQLite</li>
                </ul>
              </div>

              <div className="skill-category liquid-glass">
                <h3 className="skill-category-title">Tools & Platforms</h3>
                <ul className="skill-items">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>REST APIs</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              I&apos;m always looking to learn and collaborate on new ideas.
              Let&apos;s connect!
            </p>
            <div className="contact-links">
              <a
                href="mailto:dev@chrisbartha.com"
                className="contact-link liquid-glass primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
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
                className="contact-link liquid-glass"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
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
                className="contact-link liquid-glass"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>Christopher Bartha</p>
          <p className="footer-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            San Francisco, CA
          </p>
        </footer>
      </div>

      <ClientScripts />
    </>
  );
}
