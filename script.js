/**
 * Christopher Bartha - Portfolio Scripts
 * Handles mobile menu, smooth scrolling, and scroll animations
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking a link
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.95)";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)";
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".experience-card, .project-card, .skill-category, .education-card"
  );

  animatedElements.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

  // Typing effect for code window with real-time syntax highlighting
  const codeContent = document.querySelector(".code-content code");
  if (codeContent) {
    const text = codeContent.textContent;

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
      const highlightCode = (code) => {
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

  // Add active state to nav links based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
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
});
