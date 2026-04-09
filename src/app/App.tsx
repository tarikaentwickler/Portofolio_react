import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <div className="size-full">
          <AnimatedBackground />
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </DarkModeProvider>
  );
}