import { useDarkMode } from '../context/DarkModeContext';

export function AnimatedBackground() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}
      />

      {/* Animated Orbs */}
      <div
        className={`absolute top-0 -left-4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-blob ${
          isDarkMode ? 'bg-purple-700' : 'bg-purple-300'
        }`}
      />
      <div
        className={`absolute top-0 right-4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 ${
          isDarkMode ? 'bg-blue-700' : 'bg-blue-300'
        }`}
      />
      <div
        className={`absolute -bottom-8 left-20 w-96 h-96 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000 ${
          isDarkMode ? 'bg-pink-700' : 'bg-pink-300'
        }`}
      />

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]'
        } bg-[size:14px_24px]`}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            isDarkMode ? 'bg-white/20' : 'bg-gray-400/20'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
