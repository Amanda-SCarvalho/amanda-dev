import ProjectsGallery from "./ProjectsGallery";

const ProjectsSection = () => {
  return (
    <section className="relative py-24">
      <div className="mb-16 px-6 xl:px-56">
        <h2 className="h2-bold mb-4">Projetos</h2>

        <p className="regular-paragraph max-w-2xl">
          Alguns dos projetos que desenvolvi com foco em
          design, experiência e performance.
        </p>
      </div>

      <ProjectsGallery />
    </section>
  );
};

export default ProjectsSection;