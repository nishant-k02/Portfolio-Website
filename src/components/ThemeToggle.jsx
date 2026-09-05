import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="menu-btn relative overflow-hidden"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span
        className={`material-symbols-rounded absolute text-[20px] transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-500"
        }`}
      >
        light_mode
      </span>
      <span
        className={`material-symbols-rounded absolute text-[20px] transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100 text-brand-300" : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        dark_mode
      </span>
    </button>
  );
};

export default ThemeToggle;
