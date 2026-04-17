"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Briefcase, GraduationCap } from "lucide-react";

const TABS = [
  { id: "self", label: "Для себя" },
  { id: "business", label: "Для бизнеса" },
  { id: "study", label: "Для учёбы" },
] as const;
type TabId = (typeof TABS)[number]["id"];

const CARDS: Record<TabId, { badge: string; title: string; desc: string; superpower: string; href: string }[]> = {
  self: [
    { badge: "Контент-завод на автопилоте", title: "Со мной — без выгорания и бесконечной рутины", desc: "Сделаю за тебя сценарии для Reels, виральные посты и контент-планы за секунды.", superpower: "Креатив без тормозов. Мой разработчик убрал ограничения — теперь я иду дальше и глубже, чем другие.", href: "#" },
    { badge: "Маркетинг-отдел в одном окне", title: "Не хватает рук или бюджета?", desc: "Смотри, вот эта рутина вся на мне: от создания описаний товаров для маркетплейсов до анализа конкурентов и ответов клиентам. Ещё я знаю, как продать твой продукт дороже.", superpower: "Если ты дашь мне большой объём данных — отчёт на 900 строк — я проанализирую его со 100% точностью без выдумок.", href: "#" },
    { badge: "Турбо-режим для учёбы", title: "Учись быстрее, делай больше", desc: "Я мгновенно делаю саммари из часовых лекций, помогаю разобраться в сложных темах и пишу качественные работы, которые проходят проверки.", superpower: "Пересказ 2-часового видео за 30 секунд. Загружай мне книги целиком — выдам готовую работу без галлюцинаций.", href: "#" },
  ],
  business: [
    { badge: "Помогаю твоей команде", title: "Масштабируй без раздувания штата", desc: "Я закрываю рутину целого маркетингового отдела: аналитика, документы, переписка, ответы клиентам — всё на мне.", superpower: "Анализирую отчёт на 900 строк со 100% точностью. Никаких выдумок — только данные.", href: "/pricing" },
    { badge: "Контент-завод", title: "SEO, карточки, описания — за секунды", desc: "Пишу SEO-тексты для WB/Ozon, создаю ТЗ для дизайнеров, адаптирую западный контент под российский рынок.", superpower: "Один чат заменяет копирайтера, маркетолога и аналитика одновременно.", href: "/pricing" },
    { badge: "Аналитик под ключ", title: "Данные без выдумок", desc: "Загрузи любой файл — я выдаю выводы строго по данным. Никаких галлюцинаций, только факты.", superpower: "Разделение на проекты: каждый клиент — отдельное пространство с сохранённым контекстом.", href: "/pricing" },
  ],
  study: [
    { badge: "Умный репетитор 24/7", title: "Я первый, кто реально помогает освоить программу", desc: "Объясняю любые темы простым языком, помогаю с домашними заданиями, готовлю к экзаменам без шаблонных ответов.", superpower: "Загружай книги целиком — я выдам готовую работу на основе их контента без галлюцинаций.", href: "#" },
    { badge: "Саммари за секунды", title: "Пересказ 2-часового видео за 30 секунд", desc: "Загрузи лекцию или учебник — получишь структурированный конспект, ключевые тезисы и план подготовки.", superpower: "Курсовая без галлюцинаций. Я не очередной — я первый, кто работает честно.", href: "#" },
    { badge: "Работы и проекты", title: "Делаю то, что другие боятся", desc: "Рефераты, курсовые, дипломные — строго по методичке, без воды и выдуманных источников.", superpower: "Проверяю работу на соответствие требованиям ещё до сдачи.", href: "#" },
  ],
};

export function FacetsSection() {
  const [active, setActive] = useState<TabId>("self");

  return (
    <section style={{ background: "var(--t-bg-surface)"}} className="section-pad">
      <div style={{ maxWidth: "940px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          СДЕЛАЕТ МНОГОЕ ДЛЯ ТЕБЯ
        </div>

        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "10px" }}>
          Посмотри, что я могу сделать для тебя
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "28px" }}>
          Это лишь несколько идей. Но я могу больше.
        </p>

        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "32px" }}>
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActive(tab.id)} style={{
              padding: "7px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 500,
              cursor: "pointer", border: "none", fontFamily: "inherit", transition: "all 0.15s",
              background: active === tab.id ? "rgba(212,165,116,0.14)" : "rgba(255,255,255,0.04)",
              color: active === tab.id ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid-3col">
          {CARDS[active].map((card) => (
            <div key={card.badge} style={{
              background: "var(--t-bg-card)", border: "1px solid var(--t-border)",
              borderRadius: "18px", padding: "24px", textAlign: "left", display: "flex", flexDirection: "column",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--t-brand-light)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {card.badge}
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "10px", lineHeight: 1.35 }}>
                {card.title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: "14px", flexGrow: 1 }}>
                {card.desc}
              </div>
              <div style={{
                fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: 1.55,
                borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px", marginBottom: "14px",
              }}>
                <span style={{ color: "var(--t-brand-light)", fontWeight: 600 }}>Супер-сила: </span>{card.superpower}
              </div>
              <Link href={card.href} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "12px", fontWeight: 600, color: "var(--t-brand)", textDecoration: "none",
              }}>
                Попробовать →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
