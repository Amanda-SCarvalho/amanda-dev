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
  role: string;
  level: string;

  title: string;
  subtitle: string;
  description: string;

  techs: string[];
}

const softSkills = [
  "Pensamento analítico",
  "Comunicação clara",
  "Visão sistêmica",
  "Resolução de problemas",
  "Trabalho em equipe",
  "Adaptabilidade",
  "Liderança técnica",
  "Organização e disciplina",
  "Mentalidade de produto",
  "Gestão de prioridades",
];

const techs: Tech[] = [
  {
    name: "HTML & CSS",
    status: "mastered",
    category: "Frontend",
    description:
      "Base sólida em semântica, acessibilidade, Flexbox, Grid e animações CSS.",
  },
  {
    name: "JavaScript",
    status: "mastered",
    category: "Frontend",
    description:
      "Experiência com ES6+, promises, async/await e arquitetura frontend.",
  },
  {
    name: "TypeScript",
    status: "learning",
    category: "Frontend",
    description:
      "Aplicando tipagem forte em aplicações React e Next.js modernas.",
  },
  {
    name: "React",
    status: "mastered",
    category: "Frontend",
    description:
      "Componentização, hooks, context API e construção de interfaces escaláveis.",
  },
  {
    name: "Next.js",
    status: "learning",
    category: "Frontend",
    description:
      "SSR, App Router, performance e arquitetura moderna para aplicações web.",
  },
  {
    name: "Tailwind CSS",
    status: "mastered",
    category: "Frontend",
    description:
      "Criação rápida de interfaces consistentes com foco em design systems.",
  },
  {
    name: "Python",
    status: "mastered",
    category: "Backend & Data",
    description: "Automações, análise de dados e desenvolvimento de scripts.",
  },
  {
    name: "SQL",
    status: "mastered",
    category: "Backend & Data",
    description:
      "Modelagem relacional, queries avançadas e integração com APIs.",
  },
  {
    name: "Figma",
    status: "mastered",
    category: "Design & Tools",
    description: "Criação de interfaces, prototipagem e sistemas de design.",
  },
  {
    name: "Git",
    status: "mastered",
    category: "Design & Tools",
    description: "Versionamento e colaboração em projetos com GitHub.",
  },
  {
    name: "Node.js",
    status: "goal",
    category: "Metas",
    description: "Construção de APIs modernas e arquitetura backend escalável.",
  },
  {
    name: "Docker",
    status: "goal",
    category: "Metas",
    description:
      "Containers e ambientes reproduzíveis para deploy profissional.",
  },
  {
    name: "Machine Learning",
    status: "goal",
    category: "Metas",
    description:
      "Aplicação de modelos inteligentes em produtos e análise de dados.",
  },
  {
    name: "Cybersecurity",
    status: "goal",
    category: "Metas",
    description:
      "Boas práticas de segurança para aplicações, APIs e infraestrutura.",
  },
  {
    name: "React Native",
    status: "goal",
    category: "Metas",
    description:
      "Desenvolvimento de aplicativos mobile multiplataforma com foco em experiência fluida.",
  },
  {
    name: "System Design",
    status: "goal",
    category: "Metas",
    description:
      "Projetar aplicações robustas pensando em performance, escalabilidade e manutenção.",
  },
  {
    name: "Three.js",
    status: "goal",
    category: "Metas",
    description:
      "Experiências web 3D imersivas e interativas para interfaces modernas.",
  },
];

const milestones: Milestone[] = [
  {
    role: "Estagiária",
    level: "Início",
    title: "Primeiros sistemas e lógica de interface",
    subtitle: "Fundamentos",
    description:
      "Construção dos primeiros projetos web com HTML, CSS e JavaScript.",
    techs: ["HTML & CSS", "JavaScript"],
  },

  {
    role: "Desenvolvedora Frontend Júnior",
    level: "Jr",
    title: "Desenvolvimento de interfaces modernas",
    subtitle: "Frontend moderno",
    description:
      "Evolução para React com componentização e consumo de APIs.",
    techs: ["React", "Tailwind CSS", "Figma"],
  },

  {
    role: "Desenvolvedora Frontend Pleno",
    level: "Pleno",
    title: "Arquitetura frontend e tipagem forte",
    subtitle: "Aplicações profissionais",
    description:
      "Uso de TypeScript e Next.js em aplicações robustas.",
    techs: ["TypeScript", "Next.js", "SQL"],
  },

  {
    role: "Desenvolvedora Fullstack",
    level: "Fullstack",
    title: "Integração de sistemas e backend",
    subtitle: "Backend & APIs",
    description:
      "Construção de APIs e integração completa entre frontend e backend.",
    techs: ["Node.js", "Python", "SQL"],
  },

  {
    role: "Software Engineer",
    level: "Sr",
    title: "Infraestrutura e escalabilidade",
    subtitle: "Cloud & DevOps",
    description:
      "Deploy, Docker, cloud computing e escalabilidade.",
    techs: ["Docker", "AWS", "CI/CD"],
  },

  {
    role: "Tech Lead",
    level: "Lead",
    title: "Arquitetura e liderança técnica",
    subtitle: "System Design",
    description:
      "Decisões de arquitetura e liderança de times e produtos.",
    techs: ["System Design", "Cloud", "Leadership"],
  },

  {
    role: "Engineering Manager",
    level: "Manager",
    title: "Gestão estratégica de tecnologia",
    subtitle: "Liderança",
    description:
      "Gestão de equipes, estratégia e evolução de produtos digitais.",
    techs: ["Gestão", "Produto", "Arquitetura"],
  },
];

const cfg = {
  mastered: {
    label: "Domínio",
    color: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.18)",
    borderHover: "rgba(52,211,153,0.35)",
  },

  learning: {
    label: "Aprendendo",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.18)",
    borderHover: "rgba(96,165,250,0.35)",
  },

  goal: {
    label: "Meta",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.14)",
    border: "rgba(167,139,250,0.18)",
    borderHover: "rgba(167,139,250,0.35)",
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .card-desc {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(255,255,255,0.58);
          font-weight: 400;
          letter-spacing: -0.01em;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition:
            max-height 0.35s ease,
            opacity 0.25s ease,
            margin-top 0.25s ease;
          margin-top: 0;
        }

        .card-desc.visible {
          max-height: 120px;
          opacity: 1;
          margin-top: 14px;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        .tech-card,
        .goal-card {
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }
            
      `}</style>

      <main style={S.page} onMouseMove={handleMouseMove}>
        {/* Fundo cinematográfico */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: `
  radial-gradient(circle at top, rgba(120,119,198,0.10), transparent 30%),
  radial-gradient(circle at bottom right, rgba(168,85,247,0.06), transparent 25%),
  #030303
`,
            zIndex: -20,
          }}
        />

        {/* Stars background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -15,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: 80 }).map((_, i) => {
            const size = Math.random() * 2 + 1;

            return (
              <motion.div
                key={i}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.15, 0.8, 0.15],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  background: "white",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.4,
                  boxShadow: "0 0 12px rgba(255,255,255,0.35)",
                }}
              />
            );
          })}
        </div>

        {/* Glow mouse */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none fixed -z-10 size-[320px] rounded-full bg-violet-500/10 blur-[100px]"
        />

        {/* Glow lateral */}
        <motion.div
          className="pointer-events-none fixed -right-32 top-1/2 -z-10 size-[240px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{ y: [0, 40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          style={{
            ...S.gridBg,
            filter: "blur(0.2px)",
            opacity: 0.7,
          }}
        />

        <div style={S.wrap}>
          {/* HEADER */}
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

            <div style={S.heroText}>
              <p style={S.sub}>
                Desenvolvedora Frontend & Fullstack apaixonada por criar
                interfaces modernas, acessíveis e intuitivas.
              </p>

              <p style={S.subSecondary}>
                Atualmente evoluindo minhas habilidades em backend, cloud
                computing, infraestrutura e arquitetura de aplicações.
              </p>
            </div>

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

          {/* SKILLS */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>habilidades</h2>

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
                      boxShadow: on ? `0 0 18px ${c.glow}` : "none",
                      transform: on ? "translateY(-2px)" : "translateY(0)",
                    }}
                  >
                    <div style={S.cardRow}>
                      <span
                        style={{
                          ...S.dot,
                          background: c.color,
                        }}
                      />

                      <span style={S.cardName}>{tech.name}</span>

                      <span
                        style={{
                          ...S.badge,
                          color: c.color,
                        }}
                      >
                        {c.label}
                      </span>
                    </div>

                    <div className={`card-desc ${on ? "visible" : ""}`}>
                      {tech.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* TIMELINE */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>trajetória</h2>

            <div style={S.timeline}>
              {milestones.map((m, i) => (
                <div key={`${m.title}-${m.subtitle}`} style={S.timelineRow}>
                  {i < milestones.length - 1 && <div style={S.timelineLine} />}

                  <div style={S.timelineBubble}>
                    <div style={S.timelineBubbleInner}>
                      <span style={S.timelineLevel}>{m.level}</span>
                    </div>
                  </div>

                  <div style={S.timelineContent}>
                    <span style={S.timelineRole}>{m.role}</span>
                    <h3 style={S.timelineTitle}>{m.title}</h3>

                    <p style={S.timelineSubtitle}>{m.subtitle}</p>

                    <p style={S.timelineDesc}>{m.description}</p>

                    <div style={S.pills}>
                      {m.techs.map((name) => (
                        <span key={name} style={S.pill}>
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={S.sec}>
            <h2 style={S.secLabel}>
              <span style={S.secLine} />
              soft skills
            </h2>

            <p style={S.softIntro}>
              Habilidades comportamentais essenciais para evolução em engenharia
              de software, arquitetura e liderança técnica.
            </p>

            <div style={S.softGrid}>
              {softSkills.map((s) => (
                <div key={s} style={S.softCard}>
                  {s}
                </div>
              ))}
            </div>
          </section>

          {/* GOALS */}
          <section style={S.sec}>
            <h2 style={S.secLabel}>
              <span style={S.secLine} />
              no radar
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
    color: "white",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.015)) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015)) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
    pointerEvents: "none",
    zIndex: -1,
  },

  wrap: {
    position: "relative",
    zIndex: 2,
    maxWidth: 980,
    margin: "0 auto",
    padding: "100px 24px 140px",
  },

  header: {
    marginBottom: 90,
  },

  eyebrow: {
    display: "block",
    marginBottom: 24,
    fontSize: 11,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
  },

  sub: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.82)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },

  legend: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    color: "rgba(255,255,255,0.55)",
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    flexShrink: 0,
  },

  sec: {
    marginBottom: 80,
  },

  secLabel: {
    marginBottom: 28,
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.42)",
    fontWeight: 600,
  },

  filters: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 26,
  },

  filterBtn: {
    padding: "8px 16px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.015))",
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
    transition: "0.2s",
  },

  filterOn: {
    background: "rgba(255,255,255,0.08)",
    color: "white",
    borderColor: "rgba(255,255,255,0.12)",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
    gap: 14,
  },

  card: {
    padding: "18px",
    borderRadius: 18,
    border: "1px solid",
    background: "rgba(255,255,255,0.025)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  cardRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  cardName: {
    flex: 1,
    fontSize: 15,
    fontWeight: 600,
    color: "rgba(255,255,255,0.92)",
  },

  badge: {
    fontSize: 10,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
  },

  timelineRow: {
    display: "flex",
    gap: 20,
    position: "relative",
    paddingBottom: 44,
  },

  timelineLine: {
    position: "absolute",
    left: 17,
    top: 40,
    bottom: 0,
    width: 1,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
  },

timelineBubble: {
  width: 56,
  height: 56,
  borderRadius: "50%",
  border: "1px solid rgba(167,139,250,0.25)",
  background:
    "radial-gradient(circle at top, rgba(167,139,250,0.18), rgba(255,255,255,0.03))",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  boxShadow: "0 0 30px rgba(167,139,250,0.12)",
},

timelineBubbleInner: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
},

timelineIcon: {
  fontSize: 14,
  color: "#c4b5fd",
  lineHeight: 1,
},

timelineLevel: {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.72)",
},

timelineRole: {
  display: "inline-flex",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(167,139,250,0.10)",
  border: "1px solid rgba(167,139,250,0.18)",
  color: "#c4b5fd",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 14,
},

  timelineYear: {
    fontSize: 10,
    color: "rgba(255,255,255,0.62)",
  },

  timelineContent: {
    flex: 1,
    paddingTop: 4,
  },

  timelineTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "rgba(255,255,255,0.92)",
    marginBottom: 10,
  },

  timelineDesc: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.58)",
    marginBottom: 14,
  },

  pills: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },

  pill: {
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.015))",
    fontSize: 11,
    color: "rgba(255,255,255,0.62)",
  },

  goalsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
    gap: 14,
  },

  goalCard: {
    padding: "22px",
    borderRadius: 18,
    border: "1px solid",
    background: "rgba(255,255,255,0.025)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  goalGlyph: {
    display: "block",
    marginBottom: 10,
    color: "#c4b5fd",
    opacity: 0.7,
  },

  goalName: {
    display: "block",
    fontSize: 16,
    fontWeight: 600,
    color: "rgba(255,255,255,0.92)",
  },

  heroText: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginBottom: 42,
    maxWidth: 620,
  },

  subSecondary: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "rgba(255,255,255,0.52)",
    fontWeight: 400,
    letterSpacing: "-0.01em",
  },
  timelineSubtitle: {
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    marginBottom: 6,
    fontWeight: 500,
  },
  softIntro: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.58)",
    maxWidth: 600,
    marginBottom: 24,
  },

  softGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
    gap: 12,
  },

  softCard: {
    padding: "14px 16px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.02)",
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    transition: "0.2s",
  },
};
