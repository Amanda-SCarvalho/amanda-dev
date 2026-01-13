import { CircleGauge, Layers, Package } from 'lucide-react';

export const skills = [
  {
    id: "architecture",
    gradientColor: "var(--jungle--green)",
    asset: {
      background: "var(--bush)",
      icon: Layers,
    },
    title: {
      label: "Arquitetura",
      background: "var(--black--bean)",
    },
    content:
      "Desenvolvo arquiteturas frontend organizadas e escaláveis, pensadas para crescer junto com o produto e facilitar a manutenção do código ao longo do tempo.",
  },
  {
    id: "performance",
    gradientColor: "var(--azure--radiance)",
    asset: {
      background: "var(--blue--zodiac)",
      icon: CircleGauge,
    },
    title: {
      label: "Performance",
      background: "var(--downriver)",
    },
    content:
      "Crio aplicações rápidas e responsivas, com foco em performance, boas práticas e experiência do usuário em diferentes dispositivos.",
  },
  {
    id: "components",
    gradientColor: "var(--rose-of--sharon)",
    asset: {
      background: "var(--rose-of--sharon-2)",
      icon: Package,
    },
    title: {
      label: "Componentização",
      background: "var(--rose-of--sharon-2)",
    },
    content:
      "Construo componentes reutilizáveis e consistentes, facilitando a evolução do projeto e garantindo padronização visual e técnica.",
  },
];


export const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "mongodb",
  "firebase",
  "amazonaws",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "jest",
  "testinglibrary",
  "cypress",
  "figma",
  "visualstudiocode",
];


export const techs = [
  {
    label: "JavaScript",
    textColor: "#F7DF1E",
    bgColor: "#F0C800",
  },
  {
    label: "TypeScript",
    textColor: "#3178C6",
    bgColor: "#1E5D92",
  },
  {
    label: "React",
    textColor: "#61DAFB",
    bgColor: "#4B9FC9",
  },
  {
    label: "Next.js",
    textColor: "#61DAFB",
    bgColor: "#4B9FC9",
  },
  {
    label: "Tailwind CSS",
    textColor: "#38BDF8",
    bgColor: "#0D8FB7",
  },
  {
    label: "CSS / Sass",
    textColor: "#38BDF8",
    bgColor: "#0D8FB7",
  },
  {
    label: "Node.js",
    textColor: "#68A063",
    bgColor: "#4E8B4A",
  },
  {
    label: "Express",
    textColor: "#E5E5E5",
    bgColor: "#333333",
  },
  {
    label: "PostgreSQL",
    textColor: "#3168C6",
    bgColor: "#1E4D92",
  },
  {
    label: "MongoDB",
    textColor: "#47A248",
    bgColor: "#2C6A2F",
  },
  {
    label: "Docker",
    textColor: "#38BDF8",
    bgColor: "#0D8FB7",
  },
  {
    label: "Git & GitHub",
    textColor: "#6A3B97",
    bgColor: "#4E2C6C",
  },
  {
    label: "Testes (Jest / Cypress)",
    textColor: "#C03C44",
    bgColor: "#9A1F28",
  },
  {
    label: "Figma",
    textColor: "#DB7093",
    bgColor: "#9B4F6C",
  },
  {
    label: "E mais...",
    textColor: "#6A3B97",
    bgColor: "#4E2C6C",
  },
];
