export interface StepItem {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  platformName: string;
  platformColor: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    btnHover: string;
  };
  iconName: 'sparkles' | 'github' | 'triangle' | 'box' | 'bot';
  registerUrl: string;
  registerButtonText: string;
  description: string;
  actions: {
    text: string;
    highlight?: string;
  }[];
  importantNote: string;
  tip?: {
    title: string;
    content: string;
    url?: string;
    urlText?: string;
  };
  mockupType: 'ai-studio' | 'github' | 'vercel' | 'onshape';
}

export interface FaqItem {
  question: string;
  answer: string;
  icon: string;
}

export interface TeacherInfo {
  name: string;
  email: string;
  zaloOrPhone: string;
  schedule: string;
}
