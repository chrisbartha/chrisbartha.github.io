"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // ========================================
    // MAGNETIC BUTTONS
    // ========================================
    const magneticButtons = document.querySelectorAll(".btn, .nav-cta");

    magneticButtons.forEach((btn) => {
      const button = btn as HTMLElement;

      button.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0, 0)";
      });
    });

    // ========================================
    // HERO STAGGERED ENTRANCE
    // ========================================
    const heroElements = [
      ".hero-badge",
      ".hero-title",
      ".hero-subtitle",
      ".hero-description",
      ".hero-cta",
      ".hero-stats",
      ".code-window",
    ];

    heroElements.forEach((selector, index) => {
      const el = document.querySelector(selector) as HTMLElement;
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 100 + index * 100);
      }
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    const handleMenuClick = () => {
      mobileMenuBtn?.classList.toggle("active");
      mobileMenu?.classList.toggle("active");
      document.body.style.overflow = mobileMenu?.classList.contains("active")
        ? "hidden"
        : "";
    };

    const handleLinkClick = () => {
      mobileMenuBtn?.classList.remove("active");
      mobileMenu?.classList.remove("active");
      document.body.style.overflow = "";
    };

    mobileMenuBtn?.addEventListener("click", handleMenuClick);
    mobileLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute("href");
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

    // Navbar background on scroll
    const navbar = document.querySelector(".navbar") as HTMLElement | null;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (navbar) {
        if (currentScroll > 50) {
          navbar.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
          navbar.style.background = "rgba(0, 0, 0, 0.8)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

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
      ".experience-card, .project-card, .skill-category, .education-card"
    );

    animatedElements.forEach((el) => {
      (el as HTMLElement).style.animationPlayState = "paused";
      observer.observe(el);
    });

    /*
    // Typing effect for code window with real-time syntax highlighting
    const codeContent = document.querySelector(".code-content code");
    if (codeContent) {
      const text = codeContent.textContent || "";

      // Only run typing effect on desktop and if user hasn't reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const isMobile = window.innerWidth < 768;

      if (!prefersReducedMotion && !isMobile) {
        codeContent.innerHTML = "";
        let i = 0;
        let currentText = "";

        // Syntax highlighting function - single-pass tokenizer to avoid regex conflicts
        const highlightCode = (code: string) => {
          const patterns = [
            {
              regex: /^(const|let|var|function|return|if|else|for|while)\b/,
              cls: "keyword",
            },
            { regex: /^"(?:[^"\\]|\\.)*"/, cls: "string" },
            { regex: /^[{}[\]()]/, cls: "bracket" },
            { regex: /^(\w+)(?=\s*:)/, cls: "property" },
            { regex: /^\w+/, cls: null },
            { regex: /^\s+/, cls: null },
            { regex: /^./, cls: null },
          ];

          let result = "";
          let remaining = code;

          while (remaining.length > 0) {
            for (const pattern of patterns) {
              const match = remaining.match(pattern.regex);
              if (match) {
                if (pattern.cls) {
                  result += `<span class="${pattern.cls}">${match[0]}</span>`;
                } else {
                  result += match[0];
                }
                remaining = remaining.slice(match[0].length);
                break;
              }
            }
          }

          return result;
        };

        const typeWriter = () => {
          if (i < text.length) {
            currentText += text.charAt(i);
            // Apply syntax highlighting to what's been typed so far
            codeContent.innerHTML = highlightCode(currentText);
            i++;
            setTimeout(typeWriter, 18);
          }
        };

        // Start typing after a short delay
        setTimeout(typeWriter, 500);
      }
    }
      */

    // Add active state to nav links based on scroll position
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

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
    console.log(
      "%c👋 Hey there, curious developer!",
      "font-size: 20px; font-weight: bold;"
    );
    console.log(
      "%cThanks for checking out my code. Let's connect!",
      "font-size: 14px;"
    );
    console.log("%c📧 dev@chrisbartha.com", "font-size: 12px; color: #0070f3;");

    // Cleanup
    return () => {
      mobileMenuBtn?.removeEventListener("click", handleMenuClick);
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
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

