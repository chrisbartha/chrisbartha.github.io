"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // ========================================
    // HERO STAGGERED ENTRANCE
    // ========================================
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

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    // Navbar liquid glass on scroll
    const navPill = document.querySelector(".nav-pill") as HTMLElement | null;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (navPill) {
        if (currentScroll > 0) {
          navPill.classList.add("liquid-glass");
        } else {
          navPill.classList.remove("liquid-glass");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on load to set initial state
    handleScroll();

    // Intersection Observer for scroll animations
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

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".experience-card, .project-card, .skill-category"
    );

    animatedElements.forEach((el) => {
      (el as HTMLElement).style.animationPlayState = "paused";
      observer.observe(el);
    });

    // Add active state to nav links based on scroll position
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-pill a[href^="#"]');

    const highlightNav = () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", highlightNav);
    highlightNav();

    // Console easter egg
    console.log("%cHey you!", "font-size: 20px; font-weight: bold;");
    console.log(
      "%cThanks for checking out my code. Let's connect!",
      "font-size: 14px;"
    );
    console.log("%cdev@chrisbartha.com", "font-size: 12px; color: #0070f3;");

    // Cleanup
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", highlightNav);
      observer.disconnect();
    };
  }, []);

  return null;
}
