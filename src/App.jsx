import { useCallback, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import FloatingActions from "./components/FloatingActions";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import useReveal from "./hooks/useReveal";

const Shell = () => {
  useReveal();
  const { toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ReactLenis root>
      <div className="page-bg" aria-hidden="true" />
      <Header onOpenPalette={openPalette} />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <EducationExperience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      <FloatingActions onOpenPalette={openPalette} />
      <CommandPalette open={paletteOpen} onClose={closePalette} onToggleTheme={toggleTheme} />
    </ReactLenis>
  );
};

const App = () => (
  <ThemeProvider>
    <Shell />
  </ThemeProvider>
);

export default App;
