import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';

export function Skills() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];

  const skillCategories = [
    {
      category: t.skills.frontend,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: t.skills.backend,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL'],
    },
    {
      category: t.skills.tools,
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'CI/CD', 'Agile'],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.skills.title}
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className={`text-2xl mb-4 ${isDarkMode ? 'text-purple-300' : 'text-gray-800'}`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-base py-2 px-4 ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}