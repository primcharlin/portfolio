import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Works() {
  const featured = projects.slice(0, 4);

  return (
    <section className="section" id="works">
      <div className="flex items-center justify-between">
        <p className="section-title">Selected Works</p>
        <Link
          href="/projects"
          className="seemore-button"
        >
          See more!
        </Link>
      </div>
      <p className="works-range mt-3 text-xs uppercase tracking-[0.3em]">
        2021 - 2026
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
