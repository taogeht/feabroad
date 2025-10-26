export type Language = 'en' | 'zh';

export interface LanguageContent {
  hero: {
    title: string;
    subtitle: string;
    enrollButton: string;
    learnMoreButton: string;
    dates: string;
    ages: string;
    location: string;
  };
  programOverview: {
    title: string;
    subtitle: string;
    highlights: {
      academics: { title: string; description: string };
      adventures: { title: string; description: string };
      cultural: { title: string; description: string };
      supervision: { title: string; description: string };
      schedule: { title: string; description: string };
      university: { title: string; description: string };
    };
    details: {
      dates: { title: string; date: string; duration: string };
      ages: { title: string; range: string; note: string };
      location: { title: string; place: string; region: string };
    };
  };
  curriculum: {
    title: string;
    subtitle: string;
    features: {
      classes: { title: string; description: string };
      classSize: { title: string; description: string };
      projects: { title: string; description: string };
    };
    scheduleTitle: string;
    excursionsTitle: string;
    excursions: {
      whistler: { title: string; description: string };
      vancouver: { title: string; description: string };
      capilano: { title: string; description: string };
      cultural: { title: string; description: string };
    };
    schedule: {
      monday: { morning: string; afternoon: string; evening: string };
      tuesday: { morning: string; afternoon: string; evening: string };
      wednesday: { morning: string; afternoon: string; evening: string };
      thursday: { morning: string; afternoon: string; evening: string };
      friday: { morning: string; afternoon: string; evening: string };
      saturday: { morning: string; afternoon: string; evening: string };
      sunday: { morning: string; afternoon: string; evening: string };
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    programTitle: string;
    dates: string;
    earlyBird: string;
    included: string;
    notIncluded: string;
    flightAssistance: { title: string; description: string };
    secureSpot: string;
    deposit: string;
    paymentOptions: string;
    earlyBirdSpecial: { title: string; register: string };
    paymentPlan: { title: string; installments: string };
    siblingDiscount: { title: string; discount: string };
    inclusions: string[];
    exclusions: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    testimonialTitle: string;
    captions: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    stats: {
      students: string;
      experience: string;
      countries: string;
    };
    formTitle: string;
    form: {
      parentName: string;
      studentAge: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      selectAge: string;
      messagePlaceholder: string;
    };
    contactTitle: string;
    contactInfo: {
      email: { title: string; description: string };
      phone: { title: string; description: string };
      whatsapp: { title: string; description: string };
      visit: { title: string; description: string };
    };
    ctaCard: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    description: string;
    contactTitle: string;
    email: string;
    qrCode: string;
  };
}
