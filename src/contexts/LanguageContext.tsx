import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title1': 'Transform Your Digital',
    'hero.title2': 'Vision Into Reality',
    'hero.subtitle': 'We craft innovative digital solutions that drive growth and excellence. From web to mobile, AI to marketing - we\'ve got you covered.',
    'hero.cta': 'Explore Our Services',

    // Web Development
    'webdev.title': 'Web Development',
    'webdev.subtitle': 'We build powerful, scalable web applications that deliver exceptional user experiences and drive business results.',
    'webdev.technologies': 'Technologies We Master',

    // Mobile Development
    'mobiledev.title': 'Mobile Development',
    'mobiledev.subtitle': 'Create engaging mobile experiences that users love. We develop high-performance apps for iOS and Android platforms.',
    'mobiledev.approach': 'Our Mobile Approach',
    'mobiledev.discovery': 'Discovery',
    'mobiledev.discoveryDesc': 'Understanding your vision and defining the perfect mobile strategy.',
    'mobiledev.development': 'Development',
    'mobiledev.developmentDesc': 'Agile development with continuous feedback and iterations.',
    'mobiledev.launch': 'Launch & Scale',
    'mobiledev.launchDesc': 'Deploy to app stores and scale with ongoing support.',

    // AI Agents
    'ai.title': 'AI Agents',
    'ai.subtitle': 'Harness the power of artificial intelligence to transform your business operations and deliver intelligent solutions.',
    'ai.ready': 'Ready for the AI Revolution?',
    'ai.powered': 'Our AI agents are powered by cutting-edge technologies including GPT-4, Claude, OLLaMA, and custom-trained models tailored to your specific needs.',

    // Digital Marketing
    'marketing.title': 'Digital Marketing',
    'marketing.subtitle': 'Amplify your brand\'s reach and drive measurable growth with our comprehensive digital marketing solutions.',
    'marketing.channels': 'Our Marketing Channels',
    'marketing.why': 'Why Choose Us?',
    'marketing.campaigns': 'Successful Campaigns',
    'marketing.satisfaction': 'Client Satisfaction',
    'marketing.roi': 'Average ROI Increase',

    // Footer
    'footer.description': 'Transforming businesses through innovative digital solutions. We craft experiences that drive growth and success.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.ourTeam': 'Our Team',
    'footer.teamDesc': 'A passionate group of developers, designers, and strategists dedicated to creating exceptional digital experiences.',
    'footer.joinTeam': 'Join Our Team',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',

    // Features - Responsive Design
    'responsive.title': 'Responsive Design',
    'responsive.description': 'Beautiful websites that work flawlessly on all devices and screen sizes.',
    'responsive.detail1': 'Mobile-first approach ensuring perfect display on smartphones',
    'responsive.detail2': 'Tablet optimization with intuitive touch interfaces',
    'responsive.detail3': 'Desktop and large screen compatibility',
    'responsive.detail4': 'Fluid layouts that adapt to any screen size',
    'responsive.benefit1': 'Improved user experience across all devices',
    'responsive.benefit2': 'Better SEO rankings with mobile-first indexing',
    'responsive.benefit3': 'Reduced bounce rates and increased engagement',
    'responsive.benefit4': 'Cost-effective single codebase maintenance',

    // Features - Lightning Fast
    'lightning.title': 'Lightning Fast',
    'lightning.description': 'Optimized performance with cutting-edge technologies for blazing speed.',
    'lightning.detail1': 'Code splitting for faster initial load times',
    'lightning.detail2': 'Image optimization with next-gen formats',
    'lightning.detail3': 'CDN distribution for minimal latency',
    'lightning.detail4': 'Smart caching strategies for repeat visits',
    'lightning.benefit1': 'Load times under 1 second',
    'lightning.benefit2': '99+ PageSpeed scores',
    'lightning.benefit3': 'Smooth 60fps animations',
    'lightning.benefit4': '100% Core Web Vitals compliance',

    // Features - Modern UI/UX
    'modern.title': 'Modern UI/UX',
    'modern.description': 'Stunning interfaces designed with user experience at the forefront.',
    'modern.detail1': 'Clean, contemporary design aesthetics',
    'modern.detail2': 'Intuitive navigation and user flows',
    'modern.detail3': 'Accessibility standards compliance',
    'modern.detail4': 'Engaging micro-interactions and animations',
    'modern.benefit1': 'Increased user satisfaction and retention',
    'modern.benefit2': 'Higher conversion rates',
    'modern.benefit3': 'Professional brand image',
    'modern.benefit4': 'Competitive market advantage',

    // Features - Secure & Reliable
    'secure.title': 'Secure & Reliable',
    'secure.description': 'Built with security best practices and robust architecture.',
    'secure.detail1': 'SSL/TLS encryption for all data transmission',
    'secure.detail2': 'OWASP top 10 protection',
    'secure.detail3': 'Regular security audits and updates',
    'secure.detail4': '99.99% uptime guarantee',
    'secure.benefit1': 'Protection against cyber threats',
    'secure.benefit2': 'Data privacy and compliance',
    'secure.benefit3': '24/7 monitoring and support',
    'secure.benefit4': 'Business continuity assurance',

    // Mobile Features - iOS & Android
    'ios.title': 'iOS & Android',
    'ios.description': 'Native and cross-platform apps that deliver seamless experiences on both platforms.',
    'ios.detail1': 'Native iOS development with Swift and SwiftUI',
    'ios.detail2': 'Native Android development with Kotlin and Jetpack Compose',
    'ios.detail3': 'Cross-platform solutions using React Native and Flutter',
    'ios.detail4': 'Performance optimization for smooth user experiences',
    'ios.benefit1': 'Broader audience reach across platforms',
    'ios.benefit2': 'Consistent user experience on iOS and Android',
    'ios.benefit3': 'Faster development with shared codebases',
    'ios.benefit4': 'Easier maintenance and updates',

    // Mobile Features - Tablet Optimized
    'tablet.title': 'Tablet Optimized',
    'tablet.description': 'Fully optimized interfaces for tablets with intuitive touch interactions.',
    'tablet.detail1': 'Adaptive layouts for various tablet sizes',
    'tablet.detail2': 'Enhanced multi-touch gestures and interactions',
    'tablet.detail3': 'Split-view and multi-window support',
    'tablet.detail4': 'Optimized for both portrait and landscape modes',
    'tablet.benefit1': 'Improved productivity on larger screens',
    'tablet.benefit2': 'Better content consumption experience',
    'tablet.benefit3': 'Professional-grade business applications',
    'tablet.benefit4': 'Enhanced user engagement on tablets',

    // Mobile Features - Wearables
    'wearables.title': 'Wearables',
    'wearables.description': 'Extend your app ecosystem to smartwatches and wearable devices.',
    'wearables.detail1': 'Apple Watch and WatchOS integration',
    'wearables.detail2': 'Wear OS by Google support',
    'wearables.detail3': 'Health and fitness tracking capabilities',
    'wearables.detail4': 'Quick actions and notifications',
    'wearables.benefit1': 'Increased user engagement through wearables',
    'wearables.benefit2': 'Expanded app ecosystem',
    'wearables.benefit3': 'Access to health and fitness data',
    'wearables.benefit4': 'Innovative user experiences',

    // Mobile Features - Offline-First
    'offline.title': 'Offline-First',
    'offline.description': 'Apps that work flawlessly even without an internet connection.',
    'offline.detail1': 'Local data storage and caching',
    'offline.detail2': 'Background synchronization when online',
    'offline.detail3': 'Conflict resolution strategies',
    'offline.detail4': 'Progressive Web App (PWA) capabilities',
    'offline.benefit1': 'Improved user experience without internet',
    'offline.benefit2': 'Data synchronization when back online',
    'offline.benefit3': 'Reduced data usage',
    'offline.benefit4': 'Increased app reliability',

    // AI Features - Intelligent Automation
    'automation.title': 'Intelligent Automation',
    'automation.description': 'Automate complex workflows with AI-powered agents that learn and adapt to your business needs.',
    'automation.detail1': 'Workflow automation with AI decision-making',
    'automation.detail2': 'Process optimization and efficiency gains',
    'automation.detail3': 'Integration with existing business systems',
    'automation.detail4': 'Continuous learning and improvement',
    'automation.benefit1': 'Reduced operational costs',
    'automation.benefit2': 'Faster task completion',
    'automation.benefit3': 'Minimized human errors',
    'automation.benefit4': 'Scalable business processes',

    // AI Features - Machine Learning
    'ml.title': 'Machine Learning',
    'ml.description': 'Leverage advanced ML models to extract insights and make data-driven decisions.',
    'ml.detail1': 'Custom ML model development',
    'ml.detail2': 'Predictive analytics and forecasting',
    'ml.detail3': 'Pattern recognition and anomaly detection',
    'ml.detail4': 'Natural language processing',
    'ml.benefit1': 'Data-driven decision making',
    'ml.benefit2': 'Improved accuracy over time',
    'ml.benefit3': 'Competitive market insights',
    'ml.benefit4': 'Automated pattern discovery',

    // AI Features - Conversational AI
    'conversational.title': 'Conversational AI',
    'conversational.description': 'Build sophisticated chatbots and virtual assistants that understand natural language.',
    'conversational.detail1': 'Natural language understanding (NLU)',
    'conversational.detail2': 'Context-aware conversations',
    'conversational.detail3': 'Multi-language support',
    'conversational.detail4': 'Integration with messaging platforms',
    'conversational.benefit1': '24/7 customer support',
    'conversational.benefit2': 'Reduced support costs',
    'conversational.benefit3': 'Improved customer satisfaction',
    'conversational.benefit4': 'Scalable customer interactions',

    // AI Features - Predictive Analytics
    'predictive.title': 'Predictive Analytics',
    'predictive.description': 'Forecast trends and outcomes with AI models trained on your data.',
    'predictive.detail1': 'Time series forecasting',
    'predictive.detail2': 'Customer behavior prediction',
    'predictive.detail3': 'Risk assessment and mitigation',
    'predictive.detail4': 'Sales and revenue forecasting',
    'predictive.benefit1': 'Proactive business planning',
    'predictive.benefit2': 'Reduced business risks',
    'predictive.benefit3': 'Optimized resource allocation',
    'predictive.benefit4': 'Improved strategic decisions',

    // Marketing Features - Strategic Planning
    'strategic.title': 'Strategic Planning',
    'strategic.description': 'Comprehensive marketing strategies tailored to your business goals and target audience.',
    'strategic.detail1': 'Market research and competitor analysis',
    'strategic.detail2': 'Target audience identification',
    'strategic.detail3': 'Multi-channel campaign planning',
    'strategic.detail4': 'Budget allocation and optimization',
    'strategic.benefit1': 'Clear marketing roadmap',
    'strategic.benefit2': 'Aligned with business goals',
    'strategic.benefit3': 'Measurable objectives',
    'strategic.benefit4': 'Competitive advantage',

    // Marketing Features - SEO & SEM
    'seo.title': 'SEO & SEM',
    'seo.description': 'Optimize your online presence and drive qualified traffic to your digital properties.',
    'seo.detail1': 'Keyword research and optimization',
    'seo.detail2': 'Technical SEO improvements',
    'seo.detail3': 'Pay-per-click campaign management',
    'seo.detail4': 'Local search optimization',
    'seo.benefit1': 'Higher search engine rankings',
    'seo.benefit2': 'Increased organic traffic',
    'seo.benefit3': 'Better ROI on ad spend',
    'seo.benefit4': 'Enhanced online visibility',

    // Marketing Features - Analytics & Insights
    'analytics.title': 'Analytics & Insights',
    'analytics.description': 'Data-driven insights to measure ROI and optimize your marketing campaigns.',
    'analytics.detail1': 'Comprehensive analytics dashboards',
    'analytics.detail2': 'Conversion tracking and attribution',
    'analytics.detail3': 'A/B testing and experimentation',
    'analytics.detail4': 'Custom reporting and visualization',
    'analytics.benefit1': 'Informed decision making',
    'analytics.benefit2': 'Campaign performance optimization',
    'analytics.benefit3': 'Clear ROI measurement',
    'analytics.benefit4': 'Continuous improvement',

    // Marketing Features - Email Marketing
    'email.title': 'Email Marketing',
    'email.description': 'Engage your audience with personalized email campaigns that convert.',
    'email.detail1': 'Segmentation and personalization',
    'email.detail2': 'Automated email sequences',
    'email.detail3': 'A/B testing for email optimization',
    'email.detail4': 'Performance tracking and analytics',
    'email.benefit1': 'Higher open and click rates',
    'email.benefit2': 'Improved customer retention',
    'email.benefit3': 'Cost-effective marketing channel',
    'email.benefit4': 'Measurable campaign results',

    // Common
    'close': 'Close',
    'learnMore': 'Learn More',
    'keyFeatures': 'Key Features',
    'benefits': 'Benefits',
    'requestInfo': 'Request Information',

    // Contact Form
    'contactForm.title': 'Request Information',
    'contactForm.firstName': 'First Name',
    'contactForm.lastName': 'Last Name',
    'contactForm.email': 'Email',
    'contactForm.phone': 'Phone',
    'contactForm.feature': 'Feature of Interest',
    'contactForm.selectFeature': 'Select a feature',
    'contactForm.message': 'Message (Optional)',
    'contactForm.submit': 'Submit Request',
    'contactForm.sending': 'Sending...',
    'contactForm.success': 'Thank you! We will contact you soon.',
    'contactForm.error': 'Please complete the captcha verification.',
    'contactForm.required': 'This field is required',
    'contactForm.captcha': 'Verification: What is',
  },
  es: {
    // Hero Section
    'hero.title1': 'Transforma Tu Visión',
    'hero.title2': 'Digital En Realidad',
    'hero.subtitle': 'Creamos soluciones digitales innovadoras que impulsan el crecimiento y la excelencia. Desde web hasta móvil, IA hasta marketing - te tenemos cubierto.',
    'hero.cta': 'Explora Nuestros Servicios',

    // Web Development
    'webdev.title': 'Desarrollo Web',
    'webdev.subtitle': 'Construimos aplicaciones web potentes y escalables que ofrecen experiencias de usuario excepcionales e impulsan resultados empresariales.',
    'webdev.technologies': 'Tecnologías que Dominamos',

    // Mobile Development
    'mobiledev.title': 'Desarrollo Móvil',
    'mobiledev.subtitle': 'Crea experiencias móviles atractivas que los usuarios aman. Desarrollamos aplicaciones de alto rendimiento para plataformas iOS y Android.',
    'mobiledev.approach': 'Nuestro Enfoque Móvil',
    'mobiledev.discovery': 'Descubrimiento',
    'mobiledev.discoveryDesc': 'Comprendiendo tu visión y definiendo la estrategia móvil perfecta.',
    'mobiledev.development': 'Desarrollo',
    'mobiledev.developmentDesc': 'Desarrollo ágil con retroalimentación e iteraciones continuas.',
    'mobiledev.launch': 'Lanzamiento y Escalado',
    'mobiledev.launchDesc': 'Despliegue en tiendas de aplicaciones y escalado con soporte continuo.',

    // AI Agents
    'ai.title': 'Agentes IA',
    'ai.subtitle': 'Aprovecha el poder de la inteligencia artificial para transformar las operaciones de tu negocio y entregar soluciones inteligentes.',
    'ai.ready': '¿Listo para la Revolución de la IA?',
    'ai.powered': 'Nuestros agentes de IA están impulsados por tecnologías de vanguardia incluyendo GPT-4, Claude, OLLaMA, y modelos personalizados adaptados a tus necesidades específicas.',

    // Digital Marketing
    'marketing.title': 'Marketing Digital',
    'marketing.subtitle': 'Amplifica el alcance de tu marca e impulsa el crecimiento medible con nuestras soluciones integrales de marketing digital.',
    'marketing.channels': 'Nuestros Canales de Marketing',
    'marketing.why': '¿Por Qué Elegirnos?',
    'marketing.campaigns': 'Campañas Exitosas',
    'marketing.satisfaction': 'Satisfacción del Cliente',
    'marketing.roi': 'Aumento Promedio del ROI',

    // Footer
    'footer.description': 'Transformando negocios a través de soluciones digitales innovadoras. Creamos experiencias que impulsan el crecimiento y el éxito.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.ourTeam': 'Nuestro Equipo',
    'footer.teamDesc': 'Un grupo apasionado de desarrolladores, diseñadores y estrategas dedicados a crear experiencias digitales excepcionales.',
    'footer.joinTeam': 'Únete a Nuestro Equipo',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',

    // Features - Responsive Design
    'responsive.title': 'Diseño Responsivo',
    'responsive.description': 'Sitios web hermosos que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.',
    'responsive.detail1': 'Enfoque mobile-first asegurando visualización perfecta en smartphones',
    'responsive.detail2': 'Optimización para tablets con interfaces táctiles intuitivas',
    'responsive.detail3': 'Compatibilidad con escritorio y pantallas grandes',
    'responsive.detail4': 'Diseños fluidos que se adaptan a cualquier tamaño de pantalla',
    'responsive.benefit1': 'Experiencia de usuario mejorada en todos los dispositivos',
    'responsive.benefit2': 'Mejor posicionamiento SEO con indexación mobile-first',
    'responsive.benefit3': 'Tasas de rebote reducidas y mayor engagement',
    'responsive.benefit4': 'Mantenimiento rentable con un solo código base',

    // Features - Lightning Fast
    'lightning.title': 'Súper Rápido',
    'lightning.description': 'Rendimiento optimizado con tecnologías de vanguardia para velocidad extrema.',
    'lightning.detail1': 'División de código para tiempos de carga iniciales más rápidos',
    'lightning.detail2': 'Optimización de imágenes con formatos de nueva generación',
    'lightning.detail3': 'Distribución CDN para latencia mínima',
    'lightning.detail4': 'Estrategias inteligentes de caché para visitas recurrentes',
    'lightning.benefit1': 'Tiempos de carga menores a 1 segundo',
    'lightning.benefit2': 'Puntuaciones PageSpeed de 99+',
    'lightning.benefit3': 'Animaciones suaves a 60fps',
    'lightning.benefit4': 'Cumplimiento 100% de Core Web Vitals',

    // Features - Modern UI/UX
    'modern.title': 'UI/UX Moderno',
    'modern.description': 'Interfaces impresionantes diseñadas con la experiencia del usuario como prioridad.',
    'modern.detail1': 'Estética de diseño limpia y contemporánea',
    'modern.detail2': 'Navegación intuitiva y flujos de usuario',
    'modern.detail3': 'Cumplimiento de estándares de accesibilidad',
    'modern.detail4': 'Micro-interacciones y animaciones atractivas',
    'modern.benefit1': 'Mayor satisfacción y retención de usuarios',
    'modern.benefit2': 'Tasas de conversión más altas',
    'modern.benefit3': 'Imagen de marca profesional',
    'modern.benefit4': 'Ventaja competitiva en el mercado',

    // Features - Secure & Reliable
    'secure.title': 'Seguro y Confiable',
    'secure.description': 'Construido con las mejores prácticas de seguridad y arquitectura robusta.',
    'secure.detail1': 'Encriptación SSL/TLS para toda transmisión de datos',
    'secure.detail2': 'Protección contra los top 10 de OWASP',
    'secure.detail3': 'Auditorías de seguridad y actualizaciones regulares',
    'secure.detail4': 'Garantía de disponibilidad del 99.99%',
    'secure.benefit1': 'Protección contra amenazas cibernéticas',
    'secure.benefit2': 'Privacidad de datos y cumplimiento normativo',
    'secure.benefit3': 'Monitoreo y soporte 24/7',
    'secure.benefit4': 'Garantía de continuidad del negocio',

    // Mobile Features - iOS & Android
    'ios.title': 'iOS y Android',
    'ios.description': 'Aplicaciones nativas y multiplataforma que ofrecen experiencias fluidas en ambas plataformas.',
    'ios.detail1': 'Desarrollo iOS nativo con Swift y SwiftUI',
    'ios.detail2': 'Desarrollo Android nativo con Kotlin y Jetpack Compose',
    'ios.detail3': 'Soluciones multiplataforma usando React Native y Flutter',
    'ios.detail4': 'Optimización de rendimiento para experiencias de usuario fluidas',
    'ios.benefit1': 'Mayor alcance de audiencia en todas las plataformas',
    'ios.benefit2': 'Experiencia de usuario consistente en iOS y Android',
    'ios.benefit3': 'Desarrollo más rápido con códigos base compartidos',
    'ios.benefit4': 'Mantenimiento y actualizaciones más fáciles',

    // Mobile Features - Tablet Optimized
    'tablet.title': 'Optimizado para Tablets',
    'tablet.description': 'Interfaces totalmente optimizadas para tablets con interacciones táctiles intuitivas.',
    'tablet.detail1': 'Diseños adaptativos para varios tamaños de tablets',
    'tablet.detail2': 'Gestos multi-táctiles e interacciones mejoradas',
    'tablet.detail3': 'Soporte para vista dividida y múltiples ventanas',
    'tablet.detail4': 'Optimizado para modos vertical y horizontal',
    'tablet.benefit1': 'Productividad mejorada en pantallas más grandes',
    'tablet.benefit2': 'Mejor experiencia de consumo de contenido',
    'tablet.benefit3': 'Aplicaciones empresariales de nivel profesional',
    'tablet.benefit4': 'Mayor engagement de usuarios en tablets',

    // Mobile Features - Wearables
    'wearables.title': 'Dispositivos Portátiles',
    'wearables.description': 'Amplía el ecosistema de tu aplicación a relojes inteligentes y dispositivos portátiles.',
    'wearables.detail1': 'Integración con Apple Watch y WatchOS',
    'wearables.detail2': 'Soporte para Wear OS de Google',
    'wearables.detail3': 'Capacidades de seguimiento de salud y fitness',
    'wearables.detail4': 'Acciones rápidas y notificaciones',
    'wearables.benefit1': 'Mayor engagement de usuarios a través de wearables',
    'wearables.benefit2': 'Ecosistema de aplicaciones expandido',
    'wearables.benefit3': 'Acceso a datos de salud y fitness',
    'wearables.benefit4': 'Experiencias de usuario innovadoras',

    // Mobile Features - Offline-First
    'offline.title': 'Primero Sin Conexión',
    'offline.description': 'Aplicaciones que funcionan perfectamente incluso sin conexión a Internet.',
    'offline.detail1': 'Almacenamiento local de datos y caché',
    'offline.detail2': 'Sincronización en segundo plano cuando hay conexión',
    'offline.detail3': 'Estrategias de resolución de conflictos',
    'offline.detail4': 'Capacidades de Aplicación Web Progresiva (PWA)',
    'offline.benefit1': 'Experiencia de usuario mejorada sin internet',
    'offline.benefit2': 'Sincronización de datos al volver en línea',
    'offline.benefit3': 'Uso de datos reducido',
    'offline.benefit4': 'Mayor fiabilidad de la aplicación',

    // AI Features - Intelligent Automation
    'automation.title': 'Automatización Inteligente',
    'automation.description': 'Automatiza flujos de trabajo complejos con agentes impulsados por IA que aprenden y se adaptan a las necesidades de tu negocio.',
    'automation.detail1': 'Automatización de flujos de trabajo con toma de decisiones de IA',
    'automation.detail2': 'Optimización de procesos y ganancias de eficiencia',
    'automation.detail3': 'Integración con sistemas empresariales existentes',
    'automation.detail4': 'Aprendizaje y mejora continua',
    'automation.benefit1': 'Costos operativos reducidos',
    'automation.benefit2': 'Finalización de tareas más rápida',
    'automation.benefit3': 'Errores humanos minimizados',
    'automation.benefit4': 'Procesos empresariales escalables',

    // AI Features - Machine Learning
    'ml.title': 'Aprendizaje Automático',
    'ml.description': 'Aprovecha modelos de ML avanzados para extraer información y tomar decisiones basadas en datos.',
    'ml.detail1': 'Desarrollo de modelos ML personalizados',
    'ml.detail2': 'Análisis predictivo y pronósticos',
    'ml.detail3': 'Reconocimiento de patrones y detección de anomalías',
    'ml.detail4': 'Procesamiento de lenguaje natural',
    'ml.benefit1': 'Toma de decisiones basada en datos',
    'ml.benefit2': 'Precisión mejorada con el tiempo',
    'ml.benefit3': 'Perspectivas competitivas del mercado',
    'ml.benefit4': 'Descubrimiento automatizado de patrones',

    // AI Features - Conversational AI
    'conversational.title': 'IA Conversacional',
    'conversational.description': 'Construye chatbots sofisticados y asistentes virtuales que entienden el lenguaje natural.',
    'conversational.detail1': 'Comprensión del lenguaje natural (NLU)',
    'conversational.detail2': 'Conversaciones con contexto',
    'conversational.detail3': 'Soporte multiidioma',
    'conversational.detail4': 'Integración con plataformas de mensajería',
    'conversational.benefit1': 'Soporte al cliente 24/7',
    'conversational.benefit2': 'Costos de soporte reducidos',
    'conversational.benefit3': 'Satisfacción del cliente mejorada',
    'conversational.benefit4': 'Interacciones escalables con clientes',

    // AI Features - Predictive Analytics
    'predictive.title': 'Análisis Predictivo',
    'predictive.description': 'Pronostica tendencias y resultados con modelos de IA entrenados con tus datos.',
    'predictive.detail1': 'Pronóstico de series temporales',
    'predictive.detail2': 'Predicción de comportamiento del cliente',
    'predictive.detail3': 'Evaluación y mitigación de riesgos',
    'predictive.detail4': 'Pronóstico de ventas e ingresos',
    'predictive.benefit1': 'Planificación empresarial proactiva',
    'predictive.benefit2': 'Riesgos empresariales reducidos',
    'predictive.benefit3': 'Asignación de recursos optimizada',
    'predictive.benefit4': 'Decisiones estratégicas mejoradas',

    // Marketing Features - Strategic Planning
    'strategic.title': 'Planificación Estratégica',
    'strategic.description': 'Estrategias de marketing integrales adaptadas a tus objetivos comerciales y público objetivo.',
    'strategic.detail1': 'Investigación de mercado y análisis de competidores',
    'strategic.detail2': 'Identificación de público objetivo',
    'strategic.detail3': 'Planificación de campañas multicanal',
    'strategic.detail4': 'Asignación y optimización de presupuesto',
    'strategic.benefit1': 'Hoja de ruta de marketing clara',
    'strategic.benefit2': 'Alineado con objetivos empresariales',
    'strategic.benefit3': 'Objetivos medibles',
    'strategic.benefit4': 'Ventaja competitiva',

    // Marketing Features - SEO & SEM
    'seo.title': 'SEO y SEM',
    'seo.description': 'Optimiza tu presencia en línea e impulsa tráfico calificado a tus propiedades digitales.',
    'seo.detail1': 'Investigación y optimización de palabras clave',
    'seo.detail2': 'Mejoras técnicas de SEO',
    'seo.detail3': 'Gestión de campañas de pago por clic',
    'seo.detail4': 'Optimización de búsqueda local',
    'seo.benefit1': 'Rankings más altos en motores de búsqueda',
    'seo.benefit2': 'Tráfico orgánico aumentado',
    'seo.benefit3': 'Mejor ROI en gasto publicitario',
    'seo.benefit4': 'Visibilidad en línea mejorada',

    // Marketing Features - Analytics & Insights
    'analytics.title': 'Analítica e Información',
    'analytics.description': 'Información basada en datos para medir el ROI y optimizar tus campañas de marketing.',
    'analytics.detail1': 'Paneles de analítica integrales',
    'analytics.detail2': 'Seguimiento de conversiones y atribución',
    'analytics.detail3': 'Pruebas A/B y experimentación',
    'analytics.detail4': 'Informes personalizados y visualización',
    'analytics.benefit1': 'Toma de decisiones informada',
    'analytics.benefit2': 'Optimización del rendimiento de campañas',
    'analytics.benefit3': 'Medición clara del ROI',
    'analytics.benefit4': 'Mejora continua',

    // Marketing Features - Email Marketing
    'email.title': 'Email Marketing',
    'email.description': 'Involucra a tu audiencia con campañas de email personalizadas que convierten.',
    'email.detail1': 'Segmentación y personalización',
    'email.detail2': 'Secuencias de email automatizadas',
    'email.detail3': 'Pruebas A/B para optimización de emails',
    'email.detail4': 'Seguimiento de rendimiento y analítica',
    'email.benefit1': 'Tasas de apertura y clics más altas',
    'email.benefit2': 'Retención de clientes mejorada',
    'email.benefit3': 'Canal de marketing rentable',
    'email.benefit4': 'Resultados de campaña medibles',

    // Common
    'close': 'Cerrar',
    'learnMore': 'Más Información',
    'keyFeatures': 'Características Clave',
    'benefits': 'Beneficios',
    'requestInfo': 'Solicitar Información',

    // Contact Form
    'contactForm.title': 'Solicitar Información',
    'contactForm.firstName': 'Nombre',
    'contactForm.lastName': 'Apellido',
    'contactForm.email': 'Correo Electrónico',
    'contactForm.phone': 'Teléfono',
    'contactForm.feature': 'Característica de Interés',
    'contactForm.selectFeature': 'Seleccione una característica',
    'contactForm.message': 'Mensaje (Opcional)',
    'contactForm.submit': 'Enviar Solicitud',
    'contactForm.sending': 'Enviando...',
    'contactForm.success': '¡Gracias! Nos pondremos en contacto pronto.',
    'contactForm.error': 'Por favor complete la verificación captcha.',
    'contactForm.required': 'Este campo es requerido',
    'contactForm.captcha': 'Verificación: ¿Cuánto es',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
