import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Techs from '@/components/techs/Techs';
import StarsBackground from "@/components/background/StarsBackground";

export default function Home() {
  return (
    <>
      <StarsBackground />
      <Hero />
      <About />
      <Techs />
      <ProjectsSection />
      <Contact />
    </>
  );
}
