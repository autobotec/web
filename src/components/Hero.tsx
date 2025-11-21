import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)'
        }}
      ></div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-28 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
            {t('hero.title1')}
            <span className="block text-blue-400 mt-2">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            {t('hero.subtitle')}
          </p>
          <button
            onClick={() => scrollToSection('web-development')}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
