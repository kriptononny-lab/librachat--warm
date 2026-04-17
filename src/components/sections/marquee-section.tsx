"use client";

const ITEMS = [
  "Без VPN",
  "Без галлюцинаций",
  "Понимает русский",
  "Без карты",
  "1 480+ пользователей",
  "Помнит контекст",
  "Работает офлайн",
  "Данные в России",
  "iOS и Android",
  "Отвечает за 3 сек",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div style={{ overflow:"hidden", width:"100%" }}>
      <div style={{
        display:"flex", gap:"0",
        animation: `marquee${reverse ? "-reverse" : ""} 28s linear infinite`,
        width:"max-content",
      }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"0", flexShrink:0 }}>
            <span style={{ padding:"0 28px", fontSize:"13px", fontWeight:500, color:"rgba(255,255,255,0.22)", whiteSpace:"nowrap", letterSpacing:"0.02em" }}>
              {item}
            </span>
            <span style={{ color:"rgba(212,165,116,0.22)", fontSize:"10px", flexShrink:0 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <div style={{
      padding:"18px 0",
      borderTop:"1px solid rgba(255,255,255,0.05)",
      borderBottom:"1px solid rgba(255,255,255,0.05)",
      background:"rgba(19,16,9,0.6)",
      overflow:"hidden",
    }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <MarqueeRow />
    </div>
  );
}
