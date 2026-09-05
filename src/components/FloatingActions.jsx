import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FloatingActions = ({ onOpenPalette }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Résumé pill — bottom left */}
      <a
        href="/files/resume.pdf"
        download
        className={`fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/85 py-2 pl-3 pr-4 text-xs font-semibold text-ink-800 shadow-card backdrop-blur transition-all duration-300 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-ink-900/85 dark:text-ink-100 dark:hover:border-brand-400/50 dark:hover:text-brand-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-white">
          <span className="material-symbols-rounded text-[14px]">download</span>
        </span>
        Résumé
      </a>

      {/* Palette + back-to-top — bottom right */}
      <div
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onOpenPalette}
          aria-label="Open quick navigation"
          className="hidden h-10 items-center gap-2 rounded-full border border-ink-200/80 bg-white/85 px-3 text-xs font-semibold text-ink-700 shadow-card backdrop-blur hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-ink-900/85 dark:text-ink-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300 sm:inline-flex"
        >
          <span className="material-symbols-rounded text-[18px]">keyboard_command_key</span>
          Quick nav
          <kbd className="rounded-md border border-ink-200 px-1 py-0.5 text-[10px] dark:border-white/10">⌘K</kbd>
        </button>
        <button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-white shadow-glow-sm transition-transform hover:-translate-y-0.5"
        >
          <span className="material-symbols-rounded text-[20px]">arrow_upward</span>
        </button>
      </div>
    </>
  );
};

FloatingActions.propTypes = {
  onOpenPalette: PropTypes.func.isRequired,
};

export default FloatingActions;
