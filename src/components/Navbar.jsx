import { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Experience", link: "#education-experience" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#work" },
  { label: "Contact", link: "#contact", className: "md:hidden" },
];

const Navbar = ({ navOpen, setNavOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const linkRefs = useRef([]);

  const moveBox = (el) => {
    if (!activeBox.current || !el) return;
    activeBox.current.style.top = el.offsetTop + "px";
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  const setActive = useCallback((el) => {
    if (!el || lastActiveLink.current === el) return;
    lastActiveLink.current?.classList.remove("active");
    el.classList.add("active");
    lastActiveLink.current = el;
    moveBox(el);
  }, []);

  // Initial position + keep it aligned on resize (and once fonts load)
  useEffect(() => {
    const first = linkRefs.current[0];
    if (first) {
      first.classList.add("active");
      lastActiveLink.current = first;
      moveBox(first);
    }
    const onResize = () => moveBox(lastActiveLink.current);
    window.addEventListener("resize", onResize);
    document.fonts?.ready?.then(onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = navItems.findIndex(
          ({ link }) => link === `#${visible.target.id}`,
        );
        // On desktop the Contact link is hidden; keep the pill on Projects there.
        const el = linkRefs.current[idx];
        if (el && el.offsetParent !== null) setActive(el);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [setActive]);

  const onClick = (event) => {
    setActive(event.currentTarget);
    setNavOpen(false);
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")} aria-label="Primary">
      {navItems.map(({ label, link, className = "" }, i) => (
        <a
          href={link}
          key={link}
          ref={(el) => (linkRefs.current[i] = el)}
          className={`nav-link ${className}`}
          onClick={onClick}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox} aria-hidden="true"></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;
