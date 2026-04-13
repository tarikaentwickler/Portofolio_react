import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';

export function Footer() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/tarikaentwickler"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDarkMode ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarik-abaspahic-8a6520352"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDarkMode ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:email@example.com"
                className={`transition-colors ${
                  isDarkMode ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Copyright */}
            <div className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="flex items-center gap-2 justify-center">
                © {currentYear} {t.hero.name}. {t.footer.madeWith} <Heart size={16} className="text-red-500" /> {t.footer.and} React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}