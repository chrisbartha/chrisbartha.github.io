import { skills } from '@/content/skills';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">My Stack</h2>
      <div className={styles.grid}>
        {skills.map((category) => (
          <div
            key={category.title}
            className={`${styles.category} liquid-glass`}
          >
            <h3 className={styles.title}>{category.title}</h3>
            <ul className={styles.items}>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
