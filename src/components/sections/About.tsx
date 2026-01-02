import { about } from '@/content/site';
import styles from './About.module.css';

export function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <h2 className="section-title">{about.title}</h2>
      <p className={styles.description}>{about.description}</p>
    </section>
  );
}
