import { Code, Palette, Zap, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';

export function About() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];

  const highlights = [
    {
      icon: <Code size={32} />,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
    },
    {
      icon: <Palette size={32} />,
      title: t.about.uiFocus,
      description: t.about.uiFocusDesc,
    },
    {
      icon: <Zap size={32} />,
      title: t.about.performance,
      description: t.about.performanceDesc,
    },
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.about.title}
          </h2>

          <div className="mb-16">
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.about.paragraph1}
            </p>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.about.paragraph2}
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.about.paragraph3}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80'
                }`}
              >
                <CardContent className="pt-6">
                  <div className={`flex justify-center mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CV and Cover Letter Download Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CV Download */}
            <Card
              className={`hover:shadow-lg transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80'
              }`}
            >
              <CardContent className="p-6">
                <h3 className={`text-2xl mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.about.cvTitle}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.about.cvDesc}
                </p>
                <Button
                  className="w-full"
                  onClick={() => {
                    // Ovdje bi išla logika za download CV-a
                    alert('CV download će biti dostupan uskoro!');
                  }}
                >
                  <Download size={18} className="mr-2" />
                  {t.about.downloadCV}
                </Button>
              </CardContent>
            </Card>

            {/* Cover Letter Download */}
            <Card
              className={`hover:shadow-lg transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80'
              }`}
            >
              <CardContent className="p-6">
                <h3 className={`text-2xl mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.about.coverLetterTitle}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.about.coverLetterDesc}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    // Ovdje bi išla logika za download cover letter-a
                    alert('Cover Letter download će biti dostupan uskoro!');
                  }}
                >
                  <Download size={18} className="mr-2" />
                  {t.about.downloadCoverLetter}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}