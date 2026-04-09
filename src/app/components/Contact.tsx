import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { translations } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovde bi išla logika za slanje forme
    alert(t.contact.thankYou);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: t.contact.email,
      value: 'email@example.com',
      link: 'mailto:email@example.com',
    },
    {
      icon: <Phone size={24} />,
      title: t.contact.phone,
      value: '+381 60 123 4567',
      link: 'tel:+381601234567',
    },
    {
      icon: <MapPin size={24} />,
      title: t.contact.location,
      value: t.contact.locationValue,
      link: null,
    },
  ];

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/50'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.contact.title}
          </h2>
          <p className={`text-center mb-12 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.contact.information}
                </h3>
                <p className={isDarkMode ? 'text-gray-300 mb-6' : 'text-gray-700 mb-6'}>
                  {t.contact.description}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white/80'}
                  >
                    <CardContent className="p-4">
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`flex items-center gap-4 transition-colors ${
                            isDarkMode
                              ? 'hover:text-purple-400'
                              : 'hover:text-blue-600'
                          }`}
                        >
                          <div className={isDarkMode ? 'text-purple-400' : 'text-blue-600'}>
                            {info.icon}
                          </div>
                          <div>
                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {info.title}
                            </div>
                            <div className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>
                              {info.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className={isDarkMode ? 'text-purple-400' : 'text-blue-600'}>
                            {info.icon}
                          </div>
                          <div>
                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {info.title}
                            </div>
                            <div className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>
                              {info.value}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className={isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white/80'}>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      {t.contact.name}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      {t.contact.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send size={16} className="mr-2" />
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}