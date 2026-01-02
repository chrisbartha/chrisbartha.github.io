"use client";

import { useRef, useEffect } from "react";

export function Navbar() {
  const navPillRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navPill = navPillRef.current;
    const nav = navRef.current;

    const handleScroll = () => {
      if (!navPill) return;
      if (window.scrollY > 0) {
        navPill.classList.add("liquid-glass");
      } else {
        navPill.classList.remove("liquid-glass");
      }
    };

    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const anchors = nav?.querySelectorAll('a[href^="#"]') ?? [];
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div ref={navPillRef} className="nav-pill">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
