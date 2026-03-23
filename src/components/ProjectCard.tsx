import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc =
    typeof project.image === "string"
      ? project.image
      : project.image?.src ?? "/projects/placeholder.svg";

  return (
    <article className="project-card rounded-3xl border p-6 transition">
      <img
        className="project-card__image"
        src={imageSrc}
        alt={`${project.title} placeholder`}
        loading="lazy"
      />
      <p className="text-sm font-medium">{project.title}</p>
      <p className="project-card__category mt-2 text-xs uppercase tracking-[0.25em]">
        {project.category}
      </p>
      <p className="project-card__year mt-4 text-xs uppercase tracking-[0.25em]">
        {project.year}
      </p>
    </article>
  );
}
