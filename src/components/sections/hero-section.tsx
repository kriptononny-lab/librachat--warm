"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart2, FileText, Languages, Code2, Paperclip, Image as ImageIcon, Mic, SendHorizontal } from "lucide-react";

const QUICK_ACTIONS = [
  { icon: BarChart2, label: "Анализ данных" },
  { icon: FileText, label: "Написать текст" },
  { icon: Languages, label: "Перевести" },
  { icon: Code2, label: "Написать код" },
];

const STATS = [
  { value: "Без VPN", label: "начать пользоваться легко" },
  { value: "1 480", label: "тестировщиков подтвердили" },
  { value: "30 сек", label: "среднее время регистрации" },
];

export function HeroSection() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      style={{
        background: "var(--t-bg-base)",
        paddingTop: "92px",
        paddingBottom: "72px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orb */}
      <div style={{
        position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "420px",
        background: "radial-gradient(ellipse, var(--t-brand-orb) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", top: "30px", right: "-60px",
        width: "280px", height: "280px",
        background: "radial-gradient(ellipse, var(--t-brand-orb) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%",
      }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{ marginBottom: "22px" }}>
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <span className="badge-dot" />
            ИИ-АССИСТЕНТ НОВОГО ПОКОЛЕНИЯ
          </div>
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: "clamp(36px, 5.5vw, 58px)",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          marginBottom: "12px",
        }}>
          Привет, я{" "}
          <span style={{
            background: "var(--t-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            LibraChat.
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "19px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.58)",
          marginBottom: "14px",
        }}>
          Закрою лишние вкладки в твоём браузере.
        </p>

        {/* Description */}
        <p style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.52)",
          maxWidth: "480px",
          margin: "0 auto 44px",
        }}>
          Обрабатываю большие данные, пишу честные документы — без галлюцинаций и выдумок.
        </p>

        {/* Input */}
        <div style={{
          maxWidth: "660px",
          margin: "0 auto 13px",
          position: "relative",
        }}>
          {/* Glow */}
          <div style={{
            position: "absolute", inset: "-4px", borderRadius: "22px",
            background: "var(--t-brand-orb)", filter: "blur(14px)", zIndex: 0,
          }} />
          {/* Box */}
          <div style={{
            position: "relative", zIndex: 1,
            background: "var(--t-bg-card)",
            border: "1px solid var(--t-border-pop)",
            borderRadius: "20px",
            padding: "21px 16px 13px 25px",
            boxShadow: "0 0 0 4px rgba(212,165,116,0.03), 0 28px 60px rgba(0,0,0,0.7)",
          }}>
            {/* Text area */}
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Напиши контент-план для Instagram на месяц..."
              rows={2}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.65,
                marginBottom: "13px",
                fontFamily: "inherit",
              }}
            />
            {/* Bottom bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "11px",
            }}>
              {/* Left icons */}
              <div style={{ display: "flex", gap: "2px" }}>
                {[
                  { Icon: Paperclip, label: "Прикрепить файл" },
                  { Icon: ImageIcon, label: "Изображение" },
                  { Icon: Mic, label: "Голос" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    title={label}
                    style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: "transparent", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
              {/* Right */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
<Link href="https://librachat.kz/auth">
                  <button style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: "var(--t-brand)", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 14px var(--t-brand-glow)",
                  }}>
                    <SendHorizontal size={16} color="var(--t-btn-text)" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick action tags */}
        <div style={{
          display: "flex", gap: "6px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "52px",
        }}>
          {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
            <button
              key={label}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                padding: "6px 14px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: "5px",
              }}
            >
              <Icon size={12} color="rgba(255,255,255,0.65)" />
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          maxWidth: "560px", margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                padding: "19px 8px", textAlign: "center",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#fff", display: "block", marginBottom: "4px" }}>
                {value}
              </span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", display: "block", lineHeight: 1.45 }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA for business */}
        <div style={{ marginTop: "32px" }}>
          <Link
            href="/pricing"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.55)",
              borderRadius: "999px", padding: "10px 24px",
              fontSize: "13px", textDecoration: "none",
              transition: "all 0.15s",
            }}
          >
            Для бизнеса →
          </Link>
        </div>

      </div>
    </section>
  );
}
