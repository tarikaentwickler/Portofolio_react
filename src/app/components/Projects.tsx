import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';

export function Projects() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: '/projects/project1.jpg',
      technologies: ['HTML', 'CSS', 'TypeScript', 'React'],
      github: 'https://github.com/tarikaentwickler/Portofolio_react.git',
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: '/projects/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      image: '/projects/project3.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      image: '/projects/project4.jpg',
      technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t.projects.project5.title,
      description: t.projects.project5.description,
      image: '/projects/project5.jpg',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t.projects.project6.title,
      description: t.projects.project6.description,
      image: '/projects/project6.jpg',
      technologies: ['React Native', 'React', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`w-[100%] mx-auto flex flex-col overflow-hidden hover:shadow-xl transition-all hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80'
                }`}
              >
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        {t.projects.code}
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        {t.projects.demo}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}