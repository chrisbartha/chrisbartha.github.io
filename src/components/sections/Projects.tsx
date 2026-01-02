import { projects } from '@/content/projects';
import { ProjectIcon } from '@/components/ui/ProjectIcon';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Personal Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article
            key={project.title}
            className={`${styles.card} liquid-glass`}
          >
            <figure className={styles.image} aria-hidden="true">
              <ProjectIcon icon={project.icon} />
            </figure>
            <div className={styles.content}>
              <header className={styles.header}>
                <h3 className={styles.title}>{project.title}</h3>
                <time className={styles.year} dateTime={project.year}>
                  {project.year}
                </time>
              </header>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tech} aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
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
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
