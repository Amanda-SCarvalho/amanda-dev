/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
"use client";

import React, { useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

type Status = "mastered" | "learning" | "goal";

interface Tech {
  name: string;
  status: Status;
  category: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  techs: string[];
}

const techs: Tech[] = [
  {
    name: "HTML & CSS",
    status: "mastered",
    category: "Frontend",
    description:
      "Base sólida em semântica, acessibilidade, Flexbox, Grid e animações CSS. Construo interfaces do zero sem depender de frameworks.",
  },
  {
    name: "JavaScript",
    status: "mastered",
    category: "Frontend",
    description:
      "Confortável com ES6+, manipulação do DOM, promises e async/await. Familiaridade com os padrões mais comuns do ecossistema.",
  },
  {
    name: "TypeScript",
    status: "learning",
    category: "Frontend",
    description:
      "Uso tipagem estática nos meus projetos atuais. Ainda aprofundando generics e tipos avançados no dia a dia.",
  },
  {
    name: "React",
    status: "mastered",
    category: "Frontend",
    description:
      "Trabalho com hooks, context API e componentização. Já construí projetos completos com roteamento e gerenciamento de estado.",
  },
  {
    name: "Next.js",
    status: "learning",
    category: "Frontend",
    description:
      "Estou usando no meu portfólio atual. Aprendendo App Router, SSR, SSG e otimizações de performance.",
  },
  {
    name: "Tailwind CSS",
    status: "mastered",
    category: "Frontend",
    description:
      "Minha escolha principal para estilização. Rápido para prototipar e escalar, especialmente com design systems.",
  },
  {
    name: "Python",
    status: "mastered",
    category: "Backend & Data",
    description:
      "Uso para análise de dados, scripts e automações. Boa familiaridade com a linguagem e seu ecossistema.",
  },
  {
    name: "SQL",
    status: "mastered",
    category: "Backend & Data",
    description:
      "Escrevo queries, joins e subqueries com confiança. Experiência com modelagem relacional e bancos como PostgreSQL e MySQL.",
  },
  {
    name: "Pandas",
    status: "mastered",
    category: "Backend & Data",
    description:
      "Uso para limpeza, transformação e análise de dados tabulares. Principal ferramenta nos meus projetos de dados.",
  },
  {
    name: "Matplotlib",
    status: "mastered",
    category: "Backend & Data",
    description:
      "Crio visualizações de dados para comunicar insights de forma clara, integrado ao fluxo com Pandas.",
  },
  {
    name: "Figma",
    status: "mastered",
    category: "Design & Tools",
    description:
      "Protótipo interfaces, crio design systems e colaboro com times. Uso componentes, variáveis e auto-layout no fluxo de trabalho.",
  },
  {
    name: "UX/UI Design",
    status: "mastered",
    category: "Design & Tools",
    description:
      "Entendo hierarquia visual, usabilidade e fluxos de usuário. Consigo transitar entre design e código sem perder coerência.",
  },
  {
    name: "Git",
    status: "mastered",
    category: "Design & Tools",
    description:
      "Versionamento no dia a dia com branches, pull requests e resolução de conflitos. Trabalho com GitHub em projetos colaborativos.",
  },
  {
    name: "Node.js",
    status: "goal",
    category: "Metas",
    description:
      "Quero construir APIs REST robustas e entender o backend JavaScript de ponta a ponta.",
  },
  {
    name: "AWS / Cloud",
    status: "goal",
    category: "Metas",
    description:
      "Infraestrutura em nuvem é o próximo passo. Quero aprender a hospedar, escalar e monitorar aplicações.",
  },
  {
    name: "Docker",
    status: "goal",
    category: "Metas",
    description:
      "Containers para ambientes reproduzíveis e deploy consistente. Fundamental para um fluxo DevOps saudável.",
  },
  {
    name: "Angular",
    status: "goal",
    category: "Metas",
    description:
      "Expandir o repertório de frameworks frontend. Angular tem uma arquitetura diferente do React e quero entender esse mundo.",
  },
];

const milestones: Milestone[] = [
  {
    year: "2022",
    title: "Estagiária em Desenvolvimento",
    description:
      "Primeiro contato com ambiente profissional. Atuação com HTML, CSS e suporte em pequenos ajustes de interface. Aprendizado de versionamento com Git e trabalho em equipe.",
    techs: ["HTML & CSS", "Git"],
  },
  {
    year: "2023",
    title: "Desenvolvedora Frontend Júnior",
    description:
      "Desenvolvimento de interfaces com JavaScript e React. Criação de componentes reutilizáveis e integração com APIs. Participação ativa em decisões de UI/UX.",
    techs: ["JavaScript", "React", "UX/UI Design", "Figma"],
  },
  {
    year: "2024",
    title: "Desenvolvedora Frontend Pleno",
    description:
      "Evolução para projetos mais complexos com TypeScript e Next.js. Foco em performance, organização de código e boas práticas. Início da atuação com dados e backend.",
    techs: ["TypeScript", "Next.js", "Tailwind CSS", "Python", "SQL"],
  },
  {
    year: "2025",
    title: "Desenvolvedora Fullstack Pleno",
    description:
      "Atuação fullstack com construção de APIs e integração completa de sistemas. Uso de Node.js, manipulação de banco de dados e deploy em ambientes cloud.",
    techs: ["Node.js", "SQL", "Python", "AWS / Cloud"],
  },
  {
    year: "2026",
    title: "Desenvolvedora Fullstack Sênior",
    description:
      "Responsável por arquitetura de aplicações, decisões técnicas e mentoria de desenvolvedores. Foco em escalabilidade, performance e boas práticas de engenharia.",
    techs: ["Node.js", "AWS / Cloud", "Docker", "React"],
  },
  {
    year: "2027+",
    title: "Tech Lead / Especialista",
    description:
      "Liderança técnica de projetos, definição de padrões e colaboração estratégica com produto e design. Evolução contínua em arquitetura e sistemas distribuídos.",
    techs: ["AWS / Cloud", "Docker", "Node.js", "React"],
  },
];

const cfg = {
  mastered: {
    label: "Sei usar",
    color: "#34d399", // verde suave
    glow: "rgba(52, 211, 153, 0.25)",
    border: "rgba(52, 211, 153, 0.25)",
    borderHover: "rgba(52, 211, 153, 0.6)",
    bgHover: "rgba(52, 211, 153, 0.08)",
  },
  learning: {
    label: "Aprendendo",
    color: "#60a5fa", // azul moderno
    glow: "rgba(96, 165, 250, 0.25)",
    border: "rgba(96, 165, 250, 0.25)",
    borderHover: "rgba(96, 165, 250, 0.6)",
    bgHover: "rgba(96, 165, 250, 0.08)",
  },
  goal: {
    label: "Meta",
    color: "#a78bfa", // mantém roxo da identidade
    glow: "rgba(167, 139, 250, 0.3)",
    border: "rgba(167, 139, 250, 0.25)",
    borderHover: "rgba(167, 139, 250, 0.6)",
    bgHover: "rgba(167, 139, 250, 0.1)",
  },
} satisfies Record<Status, object>;

const categories = [
  "Todos",
  "Frontend",
  "Backend & Data",
  "Design & Tools",
  "Metas",
];

export default function CareerMap() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? techs
      : techs.filter((t) => t.category === activeCategory);

  // posição do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // suavização
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .card-desc {
          font-size: 13px;
          line-height: 1.65;
          color: #d8b4fe;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.25s ease;
          margin-top: 0;
        }
        .card-desc.visible {
          max-height: 140px;
          opacity: 1;
          margin-top: 12px;
        }
        .tech-card, .goal-card {
          transition: border-color 0.2s ease, background 0.2s ease,
                      box-shadow 0.2s ease, transform 0.2s ease;
        }
        button { font-family: inherit; cursor: pointer; }
      `}</style>

      <main style={S.page} onMouseMove={handleMouseMove}>
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none fixed -z-10 size-[400px] rounded-full bg-violet-500/20 blur-3xl"
        />

        <motion.div
          className="pointer-events-none fixed -right-32 top-1/2 -z-10 size-[300px] rounded-full bg-purple-500/15 blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="pointer-events-none fixed inset-0 -z-10">
          {new Array(20).fill(null).map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1 rounded-full bg-white/20"
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div style={S.glow1} aria-hidden />
        <div style={S.glow2} aria-hidden />
        <div style={S.gridBg} aria-hidden />

        <div style={S.wrap}>
          {/* ── Header ── */}
          <header style={S.header}>
            <span style={S.eyebrow}>amanda.dev</span>
            <motion.h1
              className="text-4xl font-bold leading-tight text-foreground md:text-6xl"
              style={{
                fontFamily: "'Syne', system-ui, sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                marginBottom: 28,
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.div custom={0} variants={titleVariants}>
                mapa de
              </motion.div>

              <motion.div
                custom={1}
                variants={titleVariants}
                className="text-violet-400"
              >
                carreira
              </motion.div>

              <motion.div custom={2} variants={titleVariants}>
                fullstack
              </motion.div>
            </motion.h1>
            <p style={S.sub}>
              O que já construí, o que estou construindo e onde quero chegar.
              Passe o mouse sobre cada tecnologia para saber mais.
            </p>
            <div style={S.legend}>
              {(Object.entries(cfg) as [Status, (typeof cfg)[Status]][]).map(
                ([k, v]) => (
                  <span key={k} style={S.legendItem}>
                    <span
                      style={{
                        ...S.dot,
                        background: v.color,
                        boxShadow: `0 0 7px ${v.color}`,
                      }}
                    />
                    {v.label}
                  </span>
                ),
              )}
            </div>
          </header>

          {/* ── Skills ── */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>
              <span style={S.secLine} /> habilidades
            </h2>

            <div style={S.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    ...S.filterBtn,
                    ...(activeCategory === cat ? S.filterOn : {}),
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={S.cardsGrid}>
              {filtered.map((tech) => {
                const c = cfg[tech.status];
                const on = hovered === tech.name;
                return (
                  <button
                    key={tech.name}
                    className="tech-card"
                    onMouseEnter={() => setHovered(tech.name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      ...S.card,
                      borderColor: on ? c.borderHover : c.border,
                      background: on ? c.bgHover : "rgba(255,255,255,0.02)",
                      boxShadow: on ? `0 0 28px ${c.glow}` : "none",
                      transform: on ? "translateY(-3px)" : "translateY(0)",
                    }}
                  >
                    <div style={S.cardRow}>
                      <span
                        style={{
                          ...S.dot,
                          background: c.color,
                          boxShadow: `0 0 6px ${c.color}99`,
                        }}
                      />
                      <span style={S.cardName}>{tech.name}</span>
                      <span style={{ ...S.badge, color: c.color }}>
                        {c.label}
                      </span>
                    </div>
                    <div className={`card-desc${on ? " visible" : ""}`}>
                      {tech.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Timeline ── */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>
              <span style={S.secLine} /> linha do tempo
            </h2>

            <div style={S.tl}>
              {milestones.map((m, i) => (
                <div key={m.year} style={S.tlRow}>
                  {i < milestones.length - 1 && <div style={S.tlLine} />}
                  <div style={S.tlBubble}>
                    <span style={S.tlYear}>{m.year}</span>
                  </div>
                  <div style={S.tlBody}>
                    <h3 style={S.tlTitle}>{m.title}</h3>
                    <p style={S.tlDesc}>{m.description}</p>
                    <div style={S.pills}>
                      {m.techs.map((name) => {
                        const t = techs.find((x) => x.name === name);
                        const c = t ? cfg[t.status] : cfg.goal;
                        return (
                          <span
                            key={name}
                            style={{
                              ...S.pill,
                              color: c.color,
                              borderColor: c.border,
                            }}
                          >
                            {name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Goals ── */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>
              <span style={S.secLine} /> no radar
            </h2>
            <div style={S.goalsGrid}>
              {techs
                .filter((t) => t.status === "goal")
                .map((t) => {
                  const on = hovered === t.name;
                  return (
                    <button
                      key={t.name}
                      className="goal-card"
                      onMouseEnter={() => setHovered(t.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        ...S.goalCard,
                        borderColor: on
                          ? cfg.goal.borderHover
                          : cfg.goal.border,
                        boxShadow: on ? `0 0 28px ${cfg.goal.glow}` : "none",
                        transform: on ? "translateY(-3px)" : "translateY(0)",
                      }}
                    >
                      <span style={S.goalGlyph}>◇</span>
                      <span style={S.goalName}>{t.name}</span>
                      <div
                        className={`card-desc${on ? " visible" : ""}`}
                        style={{ color: "#d8b4fe" }}
                      >
                        {t.description}
                      </div>
                    </button>
                  );
                })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    color: "#f3e8ff",
    fontFamily: "'Syne', system-ui, sans-serif",
    position: "relative",
    overflowX: "hidden",
  },
  gridBg: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(167, 139, 250, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.05) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
    pointerEvents: "none",
    zIndex: 0,
  },
  wrap: {
    position: "relative",
    zIndex: 1,
    maxWidth: 880,
    margin: "0 auto",
    padding: "88px 24px 120px",
  },

  // Header
  header: { marginBottom: 80 },
  eyebrow: {
    display: "block",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.25em",
    color: "#a78bfa",
    textTransform: "uppercase" as const,
    marginBottom: 20,
  },
  h1: {
    fontSize: "clamp(54px, 9vw, 92px)",
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    color: "#f3e8ff",
    marginBottom: 28,
  },
  accent: {
    color: "transparent",
    WebkitTextStroke: "2px #a78bfa",
    textShadow: "0 0 40px rgba(167, 139, 250, 0.35)",
  },
  sub: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#c084fc",
    maxWidth: 500,
    marginBottom: 36,
  },
  legend: { display: "flex", gap: 28, flexWrap: "wrap" as const },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    color: "#c084fc",
    fontFamily: "'JetBrains Mono', monospace",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    display: "inline-block",
    flexShrink: 0,
  },

  // Section
  sec: { marginBottom: 76 },
  secLabel: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 10,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "#7c3aed",
    marginBottom: 28,
    fontWeight: 400,
  },
  secLine: {
    display: "inline-block",
    width: 28,
    height: 1,
    background: "linear-gradient(to right, #a78bfa, transparent)",
  },

  // Filters
  filters: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap" as const,
    marginBottom: 24,
  },
  filterBtn: {
    padding: "6px 16px",
    borderRadius: 999,
    border: "1px solid rgba(167,139,250,0.15)",
    background: "transparent",
    color: "#7c3aed",
    fontSize: 12,
    letterSpacing: "0.04em",
    fontFamily: "'JetBrains Mono', monospace",
    transition: "all 0.15s",
  },
  filterOn: {
    background: "rgba(167, 139, 250, 0.1)",
    borderColor: "rgba(167, 139, 250, 0.5)",
    color: "#e9d5ff",
    boxShadow: "0 0 14px rgba(167, 139, 250, 0.18)",
  },

  // Cards
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))",
    gap: 12,
  },
  card: {
    padding: "16px 18px",
    borderRadius: 14,
    border: "1px solid",
    overflow: "hidden",
  },
  cardRow: { display: "flex", alignItems: "center", gap: 10 },
  cardName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 700,
    color: "#f3e8ff",
    letterSpacing: "-0.01em",
  },
  badge: {
    fontSize: 10,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    opacity: 0.85,
  },

  // Timeline
  tl: { display: "flex", flexDirection: "column" as const },
  tlRow: { display: "flex", gap: 20, position: "relative", paddingBottom: 44 },
  tlLine: {
    position: "absolute",
    left: 18,
    top: 38,
    bottom: 0,
    width: 1,
    background:
      "linear-gradient(to bottom, rgba(167,139,250,0.45), transparent)",
  },
  tlBubble: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1px solid rgba(167, 139, 250, 0.35)",
    background: "rgba(167, 139, 250, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 0 14px rgba(167,139,250,0.12)",
  },
  tlYear: {
    fontSize: 10,
    fontFamily: "'JetBrains Mono', monospace",
    color: "#a78bfa",
    letterSpacing: "0.06em",
  },
  tlBody: { flex: 1, paddingTop: 6 },
  tlTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#f3e8ff",
    letterSpacing: "-0.02em",
    marginBottom: 8,
  },
  tlDesc: { fontSize: 14, color: "#c084fc", lineHeight: 1.6, marginBottom: 14 },
  pills: { display: "flex", gap: 8, flexWrap: "wrap" as const },
  pill: {
    fontSize: 11,
    fontFamily: "'JetBrains Mono', monospace",
    padding: "3px 10px",
    borderRadius: 999,
    border: "1px solid",
    background: "transparent",
  },

  // Goals
  goalsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
    gap: 12,
  },
  goalCard: {
    padding: "22px 20px",
    borderRadius: 14,
    border: "1px dashed",
    background: "rgba(232,121,249,0.03)",
    overflow: "hidden",
  },
  goalGlyph: {
    display: "block",
    fontSize: 18,
    color: "#a78bfa",
    marginBottom: 8,
    opacity: 0.65,
  },
  goalName: {
    display: "block",
    fontSize: 15,
    fontWeight: 700,
    color: "#f3e8ff",
    letterSpacing: "-0.01em",
  },
};
