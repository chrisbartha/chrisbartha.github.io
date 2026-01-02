'use client';

import { useRef, useEffect } from 'react';

import styles from './Navbar.module.css';

export function Navbar() {
  const navPillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navPill = navPillRef.current;

    const handleScroll = () => {
      if (!navPill) return;
      if (window.scrollY > 0) {
        navPill.classList.add('liquid-glass');
      } else {
        navPill.classList.remove('liquid-glass');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div ref={navPillRef} className={styles.navPill}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
