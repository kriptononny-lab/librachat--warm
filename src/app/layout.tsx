import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://librachat.ai"),
  title: {
    default: "Librachat — ИИ-ассистент нового поколения",
    template: "%s | Librachat",
  },
  description:
    "Librachat — мощный ИИ-ассистент для работы, обучения и творчества. Попробуйте бесплатно.",
  keywords: ["ИИ", "AI", "чат-бот", "ассистент", "нейросеть", "Librachat"],
  authors: [{ name: "Librachat" }],
  creator: "Librachat",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://librachat.ai",
    siteName: "Librachat",
    title: "Librachat — ИИ-ассистент нового поколения",
    description: "Мощный ИИ-ассистент для работы, обучения и творчества.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Librachat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Librachat — ИИ-ассистент нового поколения",
    description: "Мощный ИИ-ассистент для работы, обучения и творчества.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            try {
              var params = new URLSearchParams(window.location.search);
              var theme = params.get('theme');
              if (theme === 'gold') {
                var r = document.documentElement;
                r.style.setProperty('--t-bg-base','#0C0A08');
                r.style.setProperty('--t-bg-surface','#131009');
                r.style.setProperty('--t-bg-card','#1C1917');
                r.style.setProperty('--t-bg-card-pop','#231E12');
                r.style.setProperty('--t-brand','#D4A574');
                r.style.setProperty('--t-brand-light','#E8C49A');
                r.style.setProperty('--t-brand-hover','#C9893E');
                r.style.setProperty('--t-brand-glow','rgba(212,165,116,0.25)');
                r.style.setProperty('--t-brand-orb','rgba(212,165,116,0.10)');
                r.style.setProperty('--t-border','rgba(255,255,255,0.07)');
                r.style.setProperty('--t-border-pop','rgba(212,165,116,0.25)');
                r.style.setProperty('--t-btn-text','#ffffff');
                r.style.setProperty('--t-gradient','linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)');
                r.style.setProperty('--t-dot','#D4A574');
                r.style.setProperty('--t-dot-glow','rgba(212,165,116,0.5)');
              }
            } catch(e) {}
          })();
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700;800&display=swap" />
        <style dangerouslySetInnerHTML={{__html: `
          .mobile-burger-btn { display: none !important; }
          .desktop-nav { display: flex; }
          .desktop-nav-right { display: flex; }
          @media (max-width: 768px) {
            .mobile-burger-btn { display: flex !important; }
            .desktop-nav { display: none !important; }
            .desktop-nav-right { display: none !important; }
          }
        `}} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
