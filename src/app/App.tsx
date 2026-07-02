import { useEffect } from 'react';
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
import { useHead } from '../hooks/useHead';
import { initWebVitals } from '../lib/webVitals';
import { generatePersonSchema, generateWebsiteSchema } from '../lib/seo';

export default function App() {
  // Setup SEO
  useHead(
    {
      title: 'Tarik Abaspahic - Full-Stack Developer Portfolio',
      description:
        'Full-stack developer specializing in React, TypeScript, Node.js, and modern web technologies. Explore my portfolio projects and skills.',
      path: '/',
    },
    generatePersonSchema()
  );

  // Initialize Web Vitals tracking
  useEffect(() => {
    const getMetrics = initWebVitals();
    
    // Log collected metrics after 5 seconds (or on page hide)
    const handleBeforeUnload = () => {
      const metrics = getMetrics();
      console.log('[Performance Metrics]', metrics);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Add structured data for website
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(generateWebsiteSchema());
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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