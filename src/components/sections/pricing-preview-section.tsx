"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Бесплатно",
    price: "0 ₽",
    per: "/мес",
    features: ["50 сообщений в день", "Базовая модель ИИ", "Без VPN"],
    cta: "Начать бесплатно",
    href: "https://librachat.kz/auth",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "990 ₽",
    per: "/мес",
    features: ["Безлимитные сообщения", "Продвинутая модель ИИ", "Файлы до 50 МБ"],
    cta: "Попробовать Pro",
    href: "https://librachat.kz/auth",
    isPopular: true,
  },
  {
    name: "Бизнес",
    price: "2 990 ₽",
    per: "/мес",
    features: ["Всё из Pro", "Все модели ИИ", "API + поддержка"],
    cta: "Связаться с нами",
    href: "/contact?type=business",
    isPopular: false,
  },
];

export function PricingPreviewSection() {
  return (
    <section style={{ background: "var(--t-bg-base)"}} className="section-pad">
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          ТАРИФЫ
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Ты хочешь такой результат?
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>
          14 дней бесплатно — без карты, без обязательств
        </p>

        <div className="grid-3col" style={{ alignItems: "stretch", marginBottom: "24px" }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.isPopular ? "var(--t-bg-card-pop)" : "var(--t-bg-card)",
                border: plan.isPopular ? "1px solid var(--t-border-pop)" : "1px solid var(--t-border)",
                borderRadius: "20px", padding: "24px 20px",
                display: "flex", flexDirection: "column",
                position: "relative", transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
            >
              {plan.isPopular && (
                <div style={{
                  position: "absolute", top: "-11px", left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)", color: "#000", fontSize: "9px", fontWeight: 700,
                  padding: "3px 13px", borderRadius: "999px", whiteSpace: "nowrap",
                  boxShadow: "0 3px 10px rgba(212,165,116,0.25)",
                }}>
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "10px" }}>
                {plan.name}
              </div>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", lineHeight: 1, marginBottom: "16px" }}>
                {plan.price}
                <span style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.25)" }}>{plan.per}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1, marginBottom: "16px" }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "7px" }}>
                    <Check size={12} color="var(--t-brand)" style={{ flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
              <Link href={plan.href}>
                <button style={{
                  display: "block", width: "100%", textAlign: "center",
                  borderRadius: "999px", padding: "10px",
                  fontSize: "12px", fontWeight: plan.isPopular ? 700 : 600, cursor: "pointer",
                  border: "none", fontFamily: "inherit", transition: "all 0.15s",
                  background: plan.isPopular ? "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)" : "rgba(255,255,255,0.06)",
                  color: plan.isPopular ? "#000" : "rgba(255,255,255,0.4)",
                }}>
                  {plan.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <Link href="/pricing" style={{
          display: "inline-flex", alignItems: "center", gap: "7px",
          background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.38)", borderRadius: "999px",
          padding: "10px 24px", fontSize: "13px", textDecoration: "none",
          transition: "all 0.15s",
        }}>
          Сравнить все тарифы подробно →
        </Link>

      </div>
    </section>
  );
}
