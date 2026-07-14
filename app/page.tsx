import About from "@/components/about/About";
import Achievements from "@/components/achievements/Achievements";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";
import Formation from "@/components/formation/Formation";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SoftSkills from "@/components/skills/SoftSkills";
import Techs from "@/components/techs/Techs";
import StarsBackground from "@/components/background/StarsBackground";

export default function Home() {
  return (
    <>
      <StarsBackground />
      <Hero />
      <About />
      <Techs />
      <Formation />
      <Certifications />
      <ProjectsSection />
      <SoftSkills />  
      <Achievements />
      <Contact />
    </>
  );
}
