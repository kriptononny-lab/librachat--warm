"use client";

import Image from "next/image";
import Link from "next/link";

const REVIEWS = [
  {
    name: "Юлия Шишакова",
    role: "ИП, Магазин отделочных материалов из дерева",
    content: "LibraChat — это не просто чат-бот, это напарник, который понимает задачи реального бизнеса. Помог взглянуть на магазин со стороны и внедрить практики, о которых я раньше только читала.",
    result: "Стратегия за один вечер вместо месяца",
    photo: "/case-shishakova.jpg",
    initials: "ЮШ",
    href: "#",
  },
  {
    name: "Василий Ожерельев",
    role: "Компания «Вуди», e-commerce",
    content: "С LibraChat мы перестали гадать, «зайдёт» товар или нет. Я просто даю ему данные, а он выдаёт готовую стратегию: от SEO-описания до рекламных связок.",
    result: "Запуск нового товара в 5 раз быстрее",
    photo: "/case-ozherelyev.jpg",
    initials: "ВО",
    href: "#",
  },
  {
    name: "Марианна Базаркулова",
    role: "Профессиональный маркетолог",
    content: "Либрачат — первый сервис, который не врёт, не тупит и помнит всё о моих клиентах благодаря разделению на проекты. Теперь это мой главный инструмент для аналитики.",
    result: "Десятки клиентов в одном окне без хаоса",
    photo: "/case-bazarkulova.jpg",
    initials: "МБ",
    href: "#",
  },
];

export function SocialProofSection() {
  return (
    <section style={{ background: "var(--t-bg-surface)"}} className="section-pad">
      <div style={{ maxWidth: "940px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          НАМ ДОВЕРЯЮТ
        </div>

        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "10px" }}>
          Те, кто уже со мной
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>
          Реальные результаты реальных людей
        </p>

        <div className="grid-3col">
          {REVIEWS.map((r) => (
            <div key={r.name} style={{
              background: "var(--t-bg-card)", border: "1px solid var(--t-border)",
              borderRadius: "18px", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}>
              {/* Photo */}
              <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
                <Image
                  src={r.photo} alt={r.name} fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(28,25,23,0.95) 100%)",
                }} />
              </div>
              {/* Content */}
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: "10px", fontStyle: "italic", flexGrow: 1 }}>
                  «{r.content}»
                </p>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 600, marginBottom: "14px" }}>
                  ↑ {r.result}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: "var(--t-brand-orb)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700, color: "var(--t-brand-light)", flexShrink: 0,
                    }}>
                      {r.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>{r.name}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.42)" }}>{r.role}</div>
                    </div>
                  </div>
                  <Link href={r.href} style={{ fontSize: "12px", color: "var(--t-brand)", textDecoration: "none", fontWeight: 500 }}>
                    Читать кейс →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
