"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, Zap } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "Бесплатно",
    desc: "Чтобы попробовать и убедиться",
    monthPrice: "0",
    yearPrice: "0",
    annualSaving: null,
    cta: "Начать бесплатно",
    href: "https://librachat.kz/auth",
    isPopular: false,
    features: [
      { label: "50 сообщений в день", ok: true },
      { label: "Базовая модель ИИ", ok: true },
      { label: "Веб-интерфейс", ok: true },
      { label: "История чатов 7 дней", ok: true },
      { label: "Работа без VPN", ok: true },
      { label: "Загрузка файлов", ok: false },
      { label: "Приоритетный доступ", ok: false },
      { label: "Мобильное приложение", ok: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    desc: "Для тех, кто работает каждый день",
    monthPrice: "990",
    yearPrice: "790",
    annualSaving: "экономия 2 400 ₽/год",
    cta: "Попробовать Pro",
    href: "https://librachat.kz/auth",
    isPopular: true,
    features: [
      { label: "Безлимитные сообщения", ok: true },
      { label: "Продвинутая модель ИИ", ok: true },
      { label: "Все платформы", ok: true },
      { label: "История без ограничений", ok: true },
      { label: "Работа без VPN", ok: true },
      { label: "Файлы до 50 МБ", ok: true },
      { label: "Приоритетный доступ", ok: true },
      { label: "Мобильное приложение", ok: true },
    ],
  },
  {
    id: "business",
    name: "Бизнес",
    desc: "Для команд и компаний",
    monthPrice: "2 990",
    yearPrice: "2 490",
    annualSaving: "экономия 6 000 ₽/год",
    cta: "Связаться с нами",
    href: "/contact?type=business",
    isPopular: false,
    features: [
      { label: "Всё из Pro", ok: true },
      { label: "Все модели ИИ", ok: true },
      { label: "Файлы до 500 МБ", ok: true },
      { label: "Корпоративные настройки", ok: true },
      { label: "Выделенные мощности", ok: true },
      { label: "API-доступ", ok: true },
      { label: "Приоритетная поддержка", ok: true },
      { label: "Персональный менеджер", ok: true },
    ],
  },
];

const FAQS = [
  { q: "Можно ли отменить подписку?", a: "Да, в любой момент из настроек аккаунта. Доступ сохраняется до конца оплаченного периода." },
  { q: "Работает ли без VPN?", a: "Да, LibraChat работает на территории России без VPN — это одно из наших ключевых преимуществ." },
  { q: "Нужна ли карта для старта?", a: "Нет. Начать работу можно бесплатно — без привязки карты." },
  { q: "Есть ли скидка для команд?", a: "Да, тариф «Бизнес» рассчитан на команды. Свяжитесь с нами для индивидуального предложения." },
  { q: "Можно перейти с одного тарифа на другой?", a: "Да, в любое время. При повышении разница пересчитывается пропорционально." },
  { q: "Что такое приоритетный доступ?", a: "Ваши запросы обрабатываются быстрее в часы пиковой нагрузки." },
];

export function PricingClient() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "var(--t-bg-base)" }}>

      {/* HERO */}
      <section style={{ padding: "92px 24px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "360px",
          background: "radial-gradient(ellipse, rgba(212,165,116,0.11) 0%, transparent 70%)",
          pointerEvents: "none", borderRadius: "50%",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ justifyContent: "center", marginBottom: "20px" }}>
            <span className="badge-dot" />ТАРИФЫ
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "12px",
          }}>
            Выбери свой{" "}
            <span style={{
              background: "var(--t-gradient)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>результат</span>
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.42)", marginBottom: "36px" }}>
            Тарифы — один инструмент для всех задач. Расти вместе с ним.
          </p>

          {/* Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "52px" }}>
            <span style={{ fontSize: "13px", color: isYearly ? "rgba(255,255,255,0.3)" : "#fff", fontWeight: isYearly ? 400 : 600, cursor: "pointer" }}
              onClick={() => setIsYearly(false)}>
              Ежемесячно
            </span>
            <div
              onClick={() => setIsYearly(!isYearly)}
              style={{
                width: "44px", height: "24px", background: "var(--t-brand)",
                borderRadius: "999px", position: "relative", cursor: "pointer", flexShrink: 0,
              }}
            >
              <div style={{
                width: "18px", height: "18px", background: "#fff", borderRadius: "50%",
                position: "absolute", top: "3px",
                left: isYearly ? "calc(100% - 21px)" : "3px",
                transition: "left 0.2s",
              }} />
            </div>
            <span style={{ fontSize: "13px", color: isYearly ? "#fff" : "rgba(255,255,255,0.3)", fontWeight: isYearly ? 600 : 400, cursor: "pointer" }}
              onClick={() => setIsYearly(true)}>
              Ежегодно
            </span>
            <span style={{
              background: "var(--t-brand-orb)", border: "1px solid rgba(212,165,116,0.2)",
              color: "var(--t-brand-light)", fontSize: "11px", fontWeight: 600,
              padding: "3px 10px", borderRadius: "999px",
            }}>−20%</span>
          </div>

          {/* Cards */}
          <div className="grid-3col" style={{ maxWidth: "880px", margin: "0 auto", alignItems: "stretch" }}>
            {PLANS.map((plan) => {
              const price = isYearly ? plan.yearPrice : plan.monthPrice;
              const saving = isYearly ? plan.annualSaving : null;
              return (
                <div
                  key={plan.id}
                  style={{
                    background: plan.isPopular ? "var(--t-bg-card-pop)" : "var(--t-bg-card)",
                    border: plan.isPopular ? "1px solid var(--t-border-pop)" : "1px solid var(--t-border)",
                    borderRadius: "22px", padding: "28px 22px",
                    display: "flex", flexDirection: "column",
                    position: "relative", transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                >
                  {plan.isPopular && (
                    <div style={{
                      position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                      background: "var(--t-brand)", color: "var(--t-btn-text)", fontSize: "10px", fontWeight: 700,
                      padding: "3px 16px", borderRadius: "999px", whiteSpace: "nowrap",
                      boxShadow: "0 4px 12px rgba(212,165,116,0.25)",
                    }}>ПОПУЛЯРНЫЙ</div>
                  )}
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>{plan.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>{plan.desc}</div>
                  <div style={{ fontSize: "36px", fontWeight: 800, color: "#ffffff", lineHeight: 1, marginBottom: "4px" }}>
                    {price} ₽<span style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.22)" }}>/мес</span>
                  </div>
                  <div style={{ fontSize: "11px", color: saving ? "var(--t-brand-light)" : "transparent", marginBottom: "20px", height: "16px" }}>
                    {saving ?? ""}
                  </div>
                  <Link href={plan.href}>
                    <button style={{
                      display: "block", width: "100%", textAlign: "center",
                      borderRadius: "999px", padding: "12px",
                      fontSize: "13px", fontWeight: 600, cursor: "pointer",
                      marginBottom: "22px", border: "none", fontFamily: "inherit",
                      background: plan.isPopular ? "var(--t-brand)" : "rgba(255,255,255,0.06)",
                      color: plan.isPopular ? "#fff" : "rgba(255,255,255,0.42)",
                      boxShadow: plan.isPopular ? "0 4px 14px rgba(212,165,116,0.22)" : "none",
                    }}>{plan.cta}</button>
                  </Link>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: "18px" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                    {plan.features.map((f) => (
                      <div key={f.label} style={{
                        fontSize: "12px",
                        color: f.ok ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.14)",
                        display: "flex", alignItems: "flex-start", gap: "8px",
                      }}>
                        {f.ok
                          ? <Check size={12} color="var(--t-brand)" style={{ flexShrink: 0, marginTop: "2px" }} />
                          : <Minus size={12} color="rgba(255,255,255,0.15)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        }
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--t-bg-surface)"}} className="section-pad">
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
            <span className="badge-dot" />ЧАСТО СПРАШИВАЮТ
          </div>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
            color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "32px",
          }}>
            Часто задаваемые вопросы
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                background: "var(--t-bg-card)", border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "12px", overflow: "hidden",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", padding: "16px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                    background: "transparent", border: "none", cursor: "pointer",
                    fontFamily: "inherit", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>{faq.q}</span>
                  {openFaq === i
                    ? <Minus size={16} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
                    : <Plus size={16} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: "0 20px 16px", fontSize: "13px",
                    color: "rgba(255,255,255,0.45)", lineHeight: 1.65, textAlign: "left",
                  }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--t-bg-base)", textAlign: "center", position: "relative", overflow: "hidden" }} className="section-pad">
        <div style={{
          position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)",
          width: "580px", height: "320px",
          background: "radial-gradient(ellipse, rgba(212,165,116,0.09) 0%, transparent 70%)",
          pointerEvents: "none", borderRadius: "50%",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ justifyContent: "center", marginBottom: "20px" }}>
            <span className="badge-dot" />14 ДНЕЙ БЕСПЛАТНО
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.15, marginBottom: "12px",
          }}>
            Начни бесплатно<br />прямо сейчас
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", marginBottom: "30px" }}>
            Без карты, без обязательств. Отмена в любой момент.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://librachat.kz/auth">
              <button style={{
                background: "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)", border: "none", color: "#fff",
                borderRadius: "999px", padding: "14px 36px",
                fontSize: "14px", fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px",
                fontFamily: "inherit", boxShadow: "0 4px 20px rgba(212,165,116,0.28)",
              }}>
                <Zap size={16} /> Начать бесплатно
              </button>
            </Link>
            <Link href="/contact?type=business">
              <button style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.45)", borderRadius: "999px",
                padding: "14px 36px", fontSize: "14px",
                cursor: "pointer", fontFamily: "inherit",
              }}>
                Связаться с нами
              </button>
            </Link>
          </div>
          <div style={{ marginTop: "18px", fontSize: "12px", color: "rgba(255,255,255,0.15)" }}>
            Уже более 1 480 пользователей доверяют LibraChat
          </div>
        </div>
      </section>

    </div>
  );
}
