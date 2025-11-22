import { useState } from 'react';
import { X, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    feature: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simple math captcha
  const [captchaQuestion] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  const features = [
    { id: 'responsive-design', labelEn: 'Responsive Design', labelEs: 'Diseño Responsivo' },
    { id: 'lightning-fast', labelEn: 'Lightning Fast', labelEs: 'Súper Rápido' },
    { id: 'modern-ui', labelEn: 'Modern UI/UX', labelEs: 'UI/UX Moderno' },
    { id: 'secure-reliable', labelEn: 'Secure & Reliable', labelEs: 'Seguro y Confiable' },
    { id: 'ios', labelEn: 'iOS & Android', labelEs: 'iOS y Android' },
    { id: 'tablet', labelEn: 'Tablet Optimized', labelEs: 'Optimizado para Tablets' },
    { id: 'wearables', labelEn: 'Wearables', labelEs: 'Dispositivos Portátiles' },
    { id: 'offline', labelEn: 'Offline-First', labelEs: 'Primero Sin Conexión' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaAnswer(value);
    setCaptchaVerified(parseInt(value) === captchaQuestion.answer);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('contactForm.required');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('contactForm.required');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'es' ? 'Formato de correo inválido' : 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.required');
    }
    if (!formData.feature) {
      newErrors.feature = t('contactForm.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    if (!captchaVerified) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        feature: '',
        message: ''
      });
      setCaptchaAnswer('');
      setCaptchaVerified(false);
      setSubmitStatus('idle');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white">
                {t('contactForm.title')}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border-l-4 border-green-500 px-6 py-4 flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-medium">
                {t('contactForm.success')}
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border-l-4 border-red-500 px-6 py-4 flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <p className="text-red-800 font-medium">
                {t('contactForm.error')}
              </p>
            </div>
          )}

          {/* Form */}
          <div className="px-6 py-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactForm.firstName')} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactForm.lastName')} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactForm.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactForm.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Feature Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.feature')} *
              </label>
              <select
                name="feature"
                value={formData.feature}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.feature ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t('contactForm.selectFeature')}</option>
                {features.map(feature => (
                  <option key={feature.id} value={feature.id}>
                    {language === 'es' ? feature.labelEs : feature.labelEn}
                  </option>
                ))}
              </select>
              {errors.feature && (
                <p className="mt-1 text-sm text-red-600">{errors.feature}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Captcha */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactForm.captcha')} {captchaQuestion.num1} + {captchaQuestion.num2}? *
              </label>
              <input
                type="number"
                value={captchaAnswer}
                onChange={handleCaptchaChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  captchaAnswer && !captchaVerified ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {captchaAnswer && captchaVerified && (
                <p className="mt-1 text-sm text-green-600 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {language === 'es' ? '¡Correcto!' : 'Correct!'}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                {t('close')}
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || submitStatus === 'success'}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contactForm.sending') : t('contactForm.submit')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}