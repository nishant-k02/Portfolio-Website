import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = ({ onOpenPalette }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-shell">
        <div className="header-inner">
          <a href="#home" className="flex items-center gap-3">
            <span className="relative">
              <img
                src="/images/profile2.png"
                width={38}
                height={38}
                alt="Nishant Khandhar"
                className="h-[38px] w-[38px] rounded-full object-cover ring-soft"
              />
              <span className="absolute -inset-0.5 -z-10 rounded-full bg-brand-gradient opacity-60 blur-[6px]" />
            </span>
            <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:block">
              Nishant<span className="text-gradient">.</span>
            </span>
          </a>

          <div className="relative order-last md:order-none">
            <button
              className="menu-btn md:hidden"
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open quick navigation (Cmd+K)"
              title="Quick nav (⌘K)"
              className="menu-btn hidden lg:grid"
            >
              <span className="material-symbols-rounded text-[20px]">keyboard_command_key</span>
            </button>
            <ThemeToggle />
            <a href="#contact" className="btn btn-secondary max-md:hidden">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onOpenPalette: PropTypes.func.isRequired,
};

export default Header;
