"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export function CtaSection() {
  return (
    <section style={{ background: "var(--t-bg-surface)", textAlign: "center", position: "relative", overflow: "hidden", }} className="section-pad">
      <div style={{
        position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)",
        width: "580px", height: "320px",
        background: "radial-gradient(ellipse, rgba(212,165,116,0.09) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "20px" }}>
          <span className="badge-dot" />
          14 ДНЕЙ БЕСПЛАТНО
        </div>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff",
          lineHeight: 1.15, letterSpacing: "-0.022em", marginBottom: "12px",
        }}>
          Попробуй LibraChat<br />для твоих задач
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", marginBottom: "30px" }}>
          14 дней бесплатно — без карты, без обязательств.
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
          <Link href="/contact">
            <button style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.45)",
              borderRadius: "999px", padding: "14px 36px",
              fontSize: "14px", cursor: "pointer", fontFamily: "inherit",
            }}>
              Запросить демо
            </button>
          </Link>
        </div>
        <div style={{ marginTop: "18px", fontSize: "12px", color: "rgba(255,255,255,0.15)" }}>
          Уже более 1 480 пользователей доверяют LibraChat · Поддержка 24/7
        </div>
      </div>
    </section>
  );
}
