import { X, Globe, Zap, Palette, Shield, Smartphone, Tablet, Watch, Wifi, Bot, Brain, MessageSquare, TrendingUp, Target, Search, BarChart3, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureId: string;
}

const featureData: Record<string, { icon: any; images: string[]; prefix: string }> = {
  'responsive-design': {
    icon: Globe,
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    ],
    prefix: 'responsive'
  },
  'lightning-fast': {
    icon: Zap,
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    prefix: 'lightning'
  },
  'modern-ui': {
    icon: Palette,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80',
    ],
    prefix: 'modern'
  },
  'secure-reliable': {
    icon: Shield,
    images: [
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    ],
    prefix: 'secure'
  },
  'ios': {
    icon: Smartphone,
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    ],
    prefix: 'ios'
  },
  'tablet': {
    icon: Tablet,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    ],
    prefix: 'tablet'
  },
  'wearables': {
    icon: Watch,
    images: [
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&q=80',
    ],
    prefix: 'wearables'
  },
  'offline': {
    icon: Wifi,
    images: [
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
    ],
    prefix: 'offline'
  },
  'automation': {
    icon: Bot,
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    ],
    prefix: 'automation'
  },
  'ml': {
    icon: Brain,
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    ],
    prefix: 'ml'
  },
  'conversational': {
    icon: MessageSquare,
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
    ],
    prefix: 'conversational'
  },
  'predictive': {
    icon: TrendingUp,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    prefix: 'predictive'
  },
  'strategic': {
    icon: Target,
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80',
    ],
    prefix: 'strategic'
  },
  'seo': {
    icon: Search,
    images: [
      'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80',
    ],
    prefix: 'seo'
  },
  'analytics': {
    icon: BarChart3,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1200&q=80',
    ],
    prefix: 'analytics'
  },
  'email': {
    icon: Mail,
    images: [
      'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80',
      'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80',
    ],
    prefix: 'email'
  }
};

export default function FeatureModal({ isOpen, onClose, featureId }: FeatureModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const feature = featureData[featureId];
  if (!feature) return null;

  const Icon = feature.icon;
  const prefix = feature.prefix;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="relative h-64 overflow-hidden">
            <img
              src={feature.images[0]}
              alt={t(`${prefix}.title`)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {t(`${prefix}.title`)}
                  </h2>
                  <p className="text-gray-200 mt-1">
                    {t(`${prefix}.description`)}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="px-6 py-8 max-h-96 overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('keyFeatures')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      {t(`${prefix}.detail${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <img
                src={feature.images[1]}
                alt={`${t(`${prefix}.title`)} showcase`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('benefits')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{num}</span>
                    </div>
                    <p className="text-gray-700">
                      {t(`${prefix}.benefit${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
