import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';
import type { IconType } from 'react-icons';
import { Cloud } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiPostman,
  SiGit,
  SiDocker,
  SiFigma,
  SiJest,
  SiCircleci,
  SiTrello,
} from 'react-icons/si';

export function Skills() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];

  const iconMap: Record<string, any> = {
    React: SiReact,
    TypeScript: SiTypescript,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    HTML5: SiHtml5,
    CSS3: SiCss,
    JavaScript: SiJavascript,
    'Node.js': SiNodedotjs,
    Express: SiExpress,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    GraphQL: SiGraphql,
    'REST API': SiPostman,
    Git: SiGit,
    Docker: SiDocker,
    AWS: Cloud,
    Figma: SiFigma,
    Jest: SiJest,
    'CI/CD': SiCircleci,
    Agile: SiTrello,
  };

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
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
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
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = iconMap[skill];
                    return (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`text-base py-2 px-4 flex items-center gap-2 ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {Icon ? (
                          <span className="inline-flex items-center">
                            <Icon size={16} />
                          </span>
                        ) : null}
                        <span>{skill}</span>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}