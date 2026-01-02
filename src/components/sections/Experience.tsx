import { experience } from '@/content/experience';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className={styles.grid}>
        {experience.map((exp) => (
          <article
            key={exp.company}
            className={`${styles.card} liquid-glass${exp.featured ? ` ${styles.featured}` : ''}`}
          >
            <header className={styles.header}>
              <h3 className={styles.companyName}>{exp.company}</h3>
              <time className={styles.date} dateTime={exp.start}>
                {exp.start} — {exp.end ?? 'Present'}
              </time>
            </header>
            <p className={styles.role}>{exp.role}</p>
            <p className={styles.location}>{exp.location}</p>
            <ul className={styles.highlights}>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            {exp.tech && (
              <ul className={styles.tech} aria-label="Technologies used">
                {exp.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
