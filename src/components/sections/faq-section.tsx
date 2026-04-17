"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Работает без VPN?", a: "Да. Я работаю в России напрямую — никаких VPN, дополнительных настроек и задержек. Просто открыл и работаешь." },
  { q: "Я придумываю факты или работаю по данным?", a: "Строго по данным. Если ты загружаешь файл или документ — я отвечаю только на основе его содержимого. Никаких галлюцинаций и выдуманных цифр." },
  { q: "Чем ты отличаешься от ChatGPT?", a: "Я понимаю российский менталитет и бизнес-реалии. Работаю без VPN. Помню контекст в рамках проекта — не нужно заново объяснять кто ты и что продаёшь. Интерфейс и поддержка на русском." },
  { q: "Можно ли использовать для работы с большими файлами?", a: "Да. Загружай Excel на 900 строк, PDF-отчёты, презентации — я проанализирую и выдам выводы с 100% точностью без выдумок." },
  { q: "Как начать? Нужна ли карта?", a: "Нет. Регистрация занимает 30 секунд — только email и пароль. Карта не нужна. 14 дней пробного периода бесплатно на любом тарифе." },
  { q: "Есть мобильное приложение?", a: "Да, есть приложения для iOS и Android. Работают без VPN — так же, как веб-версия." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--t-bg-surface)"}} className="section-pad">
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          ЧАСТО СПРАШИВАЮТ
        </div>

        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "32px" }}>
          Остались вопросы?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: "var(--t-bg-card)", border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "12px", overflow: "hidden",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", padding: "16px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left",
              }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>{faq.q}</span>
                {open === i
                  ? <Minus size={16} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
                  : <Plus size={16} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />}
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, textAlign: "left" }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
