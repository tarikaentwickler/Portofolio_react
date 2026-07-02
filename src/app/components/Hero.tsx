import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';
import meImg from './assets/me.jpeg';

export function Hero() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-5xl md:text-7xl mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.hero.name}
          </h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${
              isDarkMode ? 'border-purple-500' : 'border-blue-500'
            } shadow-2xl`}>
              <img
               src={meImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className={`text-2xl md:text-3xl mb-6 ${isDarkMode ? 'text-purple-300' : 'text-gray-600'}`}>
            {t.hero.title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.hero.description}
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
            >
              {t.hero.contact}
            </Button>
          </div>

          <div className="flex gap-6 justify-center mb-16 md:mb-0">
            <a
              href="https://github.com/tarikaentwickler"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarik-abaspahic-8a6520352"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:direk@t-abaspahic.de"
              className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Mail size={22} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown size={26} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>
      </div>
    </section>
  );
}