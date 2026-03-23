import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="section">
      <p className="section-title">Works</p>
      <h1 className="mt-4 text-3xl font-semibold">Selected Works</h1>
      <p className="projects-desc mt-2 text-sm">
        A selection of branding, UI/UX, and visual design projects.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
