import { useState } from 'react';
import { Smartphone, Tablet, Watch, Wifi, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FeatureModal from './modals/FeatureModal';
import ContactFormModal from './modals/ContactFormModal';

export default function MobileDevelopment() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const platforms = [
    {
      id: 'ios',
      icon: Smartphone,
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
      id: 'tablet',
      icon: Tablet,
      bgImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80'
    },
    {
      id: 'wearables',
      icon: Watch,
      bgImage: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80'
    },
    {
      id: 'offline',
      icon: Wifi,
      bgImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
    },
  ];

  return (
    <section id="mobile-development" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {t('mobiledev.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('mobiledev.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(platform.id)}
              className="relative rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${platform.bgImage})`
                }}
              ></div>

              <div className="absolute inset-0 bg-white opacity-70 group-hover:opacity-45 transition-all"></div>

              <div className="relative z-10 p-6 md:p-8">
                <platform.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {t(`${platform.id}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${platform.id}.description`)}
                </p>
                <p className="text-blue-600 font-medium mt-4 group-hover:underline">
                  {t('learnMore')} →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Request Information Button */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">{t('requestInfo')}</span>
          </button>
        </div>

        <div className="mt-12 md:mt-16 relative rounded-2xl shadow-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80)'
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-75"></div>

          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
              {t('mobiledev.approach')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {t('mobiledev.discovery')}
                </h4>
                <p className="text-blue-100">{t('mobiledev.discoveryDesc')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {t('mobiledev.development')}
                </h4>
                <p className="text-blue-100">{t('mobiledev.developmentDesc')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {t('mobiledev.launch')}
                </h4>
                <p className="text-blue-100">{t('mobiledev.launchDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedFeature && (
        <FeatureModal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          featureId={selectedFeature}
        />
      )}

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
}
