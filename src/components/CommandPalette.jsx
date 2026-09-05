import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const commands = [
  { group: "Navigate", label: "Home", hint: "Top of page", icon: "home", href: "#home" },
  { group: "Navigate", label: "About", hint: "Who I am", icon: "person", href: "#about" },
  { group: "Navigate", label: "Journey", hint: "Experience & education timeline", icon: "work", href: "#education-experience" },
  { group: "Navigate", label: "Skills", hint: "Toolbox", icon: "code", href: "#skills" },
  { group: "Navigate", label: "Projects", hint: "Case studies", icon: "folder_open", href: "#work" },
  { group: "Navigate", label: "Contact", hint: "Book a call or send a message", icon: "mail", href: "#contact" },
  { group: "Actions", label: "Download résumé", hint: "PDF", icon: "download", href: "/files/resume.pdf", download: true },
  { group: "Actions", label: "Email me", hint: "nishantkhandhar.us@gmail.com", icon: "alternate_email", href: "mailto:nishantkhandhar.us@gmail.com" },
  { group: "Actions", label: "Toggle theme", hint: "Light / dark", icon: "contrast", action: "theme" },
  { group: "Links", label: "GitHub", hint: "github.com/nishant-k02", icon: "open_in_new", href: "https://www.github.com/nishant-k02", external: true },
  { group: "Links", label: "LinkedIn", hint: "linkedin.com/in/nishant-khandhar", icon: "open_in_new", href: "https://www.linkedin.com/in/nishant-khandhar", external: true },
  { group: "Links", label: "X / Twitter", hint: "@nishantsk2002", icon: "open_in_new", href: "https://x.com/nishantsk2002", external: true },
];

const CommandPalette = ({ open, onClose, onToggleTheme }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q) || c.group.toLowerCase().includes(q),
    );
  }, [query]);

  const run = useCallback(
    (cmd) => {
      if (!cmd) return;
      onClose();
      if (cmd.action === "theme") {
        onToggleTheme();
        return;
      }
      if (cmd.external) {
        window.open(cmd.href, "_blank", "noopener,noreferrer");
        return;
      }
      if (cmd.download) {
        const a = document.createElement("a");
        a.href = cmd.href;
        a.download = "";
        a.click();
        return;
      }
      if (cmd.href.startsWith("#")) {
        document.querySelector(cmd.href)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      window.location.href = cmd.href;
    },
    [onClose, onToggleTheme],
  );

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-4 pt-[12vh]" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Quick navigation">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" />
      <div className="animate-reveal relative w-full max-w-lg overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-2xl dark:border-white/10 dark:bg-ink-900">
        <div className="flex items-center gap-3 border-b border-ink-200/70 px-4 dark:border-white/[0.06]">
          <span className="material-symbols-rounded text-[20px] text-ink-400">search</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search sections and links"
            className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-ink-400"
            aria-label="Search commands"
          />
          <kbd className="hidden rounded-md border border-ink-200 px-1.5 py-0.5 text-[10px] font-medium text-ink-500 dark:border-white/10 dark:text-ink-400 sm:block">
            esc
          </kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-ink-300 dark:scrollbar-thumb-ink-700" role="listbox">
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-ink-500">No matches for “{query}”.</li>
          )}
          {results.map((cmd, i) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            return (
              <li key={cmd.label} role="option" aria-selected={i === active}>
                {showGroup && (
                  <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                    {cmd.group}
                  </p>
                )}
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => run(cmd)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    i === active ? "bg-brand-500/10 text-ink-900 dark:bg-brand-500/15 dark:text-white" : "text-ink-700 dark:text-ink-200"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                      i === active ? "bg-brand-gradient text-white" : "bg-ink-100 text-ink-600 dark:bg-white/[0.06] dark:text-ink-300"
                    }`}
                  >
                    <span className="material-symbols-rounded text-[18px]">{cmd.icon}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{cmd.label}</span>
                    <span className="block truncate text-xs text-ink-500 dark:text-ink-400">{cmd.hint}</span>
                  </span>
                  {i === active && (
                    <span className="material-symbols-rounded text-[18px] text-brand-500">keyboard_return</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-ink-200/70 px-4 py-2 text-[11px] text-ink-500 dark:border-white/[0.06] dark:text-ink-400">
          <span>↑↓ to navigate · ↵ to select</span>
          <span>⌘K / Ctrl K</span>
        </div>
      </div>
    </div>
  );
};

CommandPalette.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default CommandPalette;
