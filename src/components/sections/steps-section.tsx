"use client";

import Link from "next/link";
import { UserPlus, MessageCircle, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "1",
    Icon: UserPlus,
    title: "Зарегистрируйтесь",
    desc: "Создайте аккаунт за 30 секунд. Никаких данных карты — просто email и пароль.",
  },
  {
    number: "2",
    Icon: MessageCircle,
    title: "Задайте вопрос",
    desc: "Напишите любой вопрос на русском — я понимаю контекст и отвечаю сразу.",
  },
  {
    number: "3",
    Icon: Sparkles,
    title: "Получите результат",
    desc: "Деловой текст, код, анализ или перевод — готово мгновенно.",
  },
];

export function StepsSection() {
  return (
    <section style={{ background: "#0C0A08" }} className="section-pad">
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          3 ПРОСТЫХ ШАГА
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Начни работу за 2 минуты
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "48px" }}>
          Никаких сложных настроек — просто зайди и начни
        </p>

        {/* Шаги с иконками */}
        <div className="grid-3col" style={{ marginBottom: "48px" }}>
          {STEPS.map(({ number, Icon, title, desc }) => (
            <div key={number} style={{ textAlign: "center" }}>
              {/* Иконка с номером */}
              <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "rgba(212,165,116,0.09)",
                  border: "1px solid rgba(212,165,116,0.16)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto",
                }}>
                  <Icon size={32} color="#E8C49A" strokeWidth={1.5} />
                </div>
                <div style={{
                  position: "absolute", bottom: "0", right: "0",
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: "#D4A574",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700, color: "#fff",
                  boxShadow: "0 0 0 2px #0C0A08",
                }}>
                  {number}
                </div>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                {title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA кнопка */}
        <Link href="https://librachat.kz/auth">
          <button style={{
            background: "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)", border: "none", color: "#1C1410",
            borderRadius: "999px", padding: "14px 36px",
            fontSize: "15px", fontWeight: 700, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "inherit",
            boxShadow: "0 4px 20px rgba(212,165,116,0.28)",
          }}>
            Начать бесплатно →
          </button>
        </Link>
        <div style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
          30 секунд · Без карты · Без VPN
        </div>

      </div>
    </section>
  );
}
