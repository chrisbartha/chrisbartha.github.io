"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const heroElements = [".hero-title", ".hero-subtitle"];

    heroElements.forEach((selector, index) => {
      const el = document.querySelector(selector) as HTMLElement;
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(
          () => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          },
          100 + index * 100
        );
      }
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".experience-card, .project-card, .skill-category"
    );

    animatedElements.forEach((el) => {
      (el as HTMLElement).style.animationPlayState = "paused";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
