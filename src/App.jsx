import { ReactLenis } from "lenis/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <EducationExperience />
          <Skills />
          <Work />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </ThemeProvider>
  );
};

export default App;
