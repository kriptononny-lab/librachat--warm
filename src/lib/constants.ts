import type { NavItem } from "@/types";

// ===================================================
// Навигация сайта
// ===================================================
export const MAIN_NAV: NavItem[] = [
  { label: "Тарифы", href: "/pricing" },
];

export const FOOTER_NAV = {
  product: [
    { label: "Тарифы", href: "/pricing" },
  ],
  learn: [],
  company: [
    { label: "Тарифы", href: "/pricing" },
  ],
  legal: [],
};

// ===================================================
// Конфигурация сайта
// ===================================================
export const SITE_CONFIG = {
  name: "Librachat",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://librachat.ai",
  description: "ИИ-ассистент нового поколения",
  email: "hello@librachat.ai",
  social: {
    telegram: "https://t.me/librachat",
    vk: "https://vk.com/librachat",
    youtube: "https://youtube.com/@librachat",
  },
  appStores: {
    ios: "https://apps.apple.com/app/librachat",
    android: "https://play.google.com/store/apps/details?id=ai.librachat",
  },
} as const;

// ===================================================
// Тарифные планы
// ===================================================
export const PLANS = [
  {
    id: "free" as const,
    name: "Бесплатно",
    description: "Для знакомства с Librachat",
    price: { monthly: 0, annual: 0 },
    features: [
      { label: "50 сообщений в день", included: true },
      { label: "Базовая модель ИИ", included: true },
      { label: "Веб-интерфейс", included: true },
      { label: "История чатов (7 дней)", included: true },
      { label: "Загрузка файлов", included: false },
      { label: "Приоритетный доступ", included: false },
      { label: "API-доступ", included: false },
    ],
    cta: { label: "Начать бесплатно", href: "https://librachat.kz/auth" },
    isPopular: false,
  },
  {
    id: "pro" as const,
    name: "Pro",
    description: "Для профессионалов и фрилансеров",
    price: { monthly: 990, annual: 790 },
    features: [
      { label: "Безлимитные сообщения", included: true },
      { label: "Продвинутая модель ИИ", included: true },
      { label: "Все платформы", included: true },
      { label: "История чатов (неограниченно)", included: true },
      { label: "Загрузка файлов до 50 МБ", included: true },
      { label: "Приоритетный доступ", included: true },
      { label: "API-доступ", included: false },
    ],
    cta: { label: "Попробовать Pro", href: "https://librachat.kz/auth" },
    isPopular: true,
  },
  {
    id: "business" as const,
    name: "Бизнес",
    description: "Для команд и компаний",
    price: { monthly: 2990, annual: 2490 },
    features: [
      { label: "Безлимитные сообщения", included: true },
      { label: "Все модели ИИ", included: true },
      { label: "Все платформы", included: true },
      { label: "Корпоративные настройки", included: true },
      { label: "Загрузка файлов до 500 МБ", included: true },
      { label: "Выделенные мощности", included: true },
      { label: "API-доступ + поддержка", included: true },
    ],
    cta: { label: "Связаться с нами", href: "/contact?type=business" },
    isPopular: false,
  },
] as const;

// Дополнительные ссылки для подвала (Поддержка)
export const FOOTER_SUPPORT_NAV = [
  { label: "FAQ", href: "/faq" },
];
