import { hero } from '@/content/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{hero.title}</h1>
      <p className={styles.subtitle}>{hero.subtitle}</p>
    </section>
  );
}
