"use client";

import { useEffect } from "react";

const THEMES: Record<string, Record<string, string>> = {
  default: {
    "--t-bg-base":    "#0C0A08",
    "--t-bg-surface": "#131009",
    "--t-bg-card":    "#1C1917",
    "--t-bg-card-pop":"#231E12",
    "--t-brand":      "#D4A574",
    "--t-brand-light":"#E8C49A",
    "--t-brand-hover":"#E8C49A",
    "--t-brand-glow": "rgba(212,165,116,0.25)",
    "--t-brand-orb":  "rgba(212,165,116,0.11)",
    "--t-border":     "rgba(255,255,255,0.06)",
    "--t-border-pop": "rgba(212,165,116,0.22)",
    "--t-btn-text":   "#1C1410",
    "--t-gradient":   "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)",
    "--t-dot":        "#E8C49A",
    "--t-dot-glow":   "rgba(212,165,116,0.5)",
  },
  gold: {
    "--t-bg-base":    "#0C0A08",
    "--t-bg-surface": "#131009",
    "--t-bg-card":    "#1C1917",
    "--t-bg-card-pop":"#231E12",
    "--t-brand":      "#D4A574",
    "--t-brand-light":"#E8C49A",
    "--t-brand-hover":"#C9893E",
    "--t-brand-glow": "rgba(212,165,116,0.25)",
    "--t-brand-orb":  "rgba(212,165,116,0.1)",
    "--t-border":     "rgba(255,255,255,0.07)",
    "--t-border-pop": "rgba(212,165,116,0.22)",
    "--t-btn-text":   "#1C1410",
    "--t-gradient":   "linear-gradient(135deg,#C9893E,#D4A574,#F5C97A)",
    "--t-dot":        "#D4A574",
    "--t-dot-glow":   "rgba(212,165,116,0.6)",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme") ?? "default";
    const vars = THEMES[theme] ?? THEMES.default;
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, []);

  return <>{children}</>;
}
