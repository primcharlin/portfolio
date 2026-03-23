import type { StaticImageData } from "next/image";
import JargonCard from "@/assets/Jargon-card.avif";
import SashimonCard from "@/assets/Sashimon-card.avif";
import KyomidoriCard from "@/assets/kyomidori-card.avif";
import InterstellarCard from "@/assets/Interstellar-card.avif";

export type Project = {
  title: string;
  description: string;
  year: string;
  category: string;
  image?: StaticImageData | string;
};

export const projects: Project[] = [
  {
    title: "Jargon Application",
    description: "This is a feature description spanning a couple of lines.",
    year: "2026",
    category: "Product",
    image: JargonCard,
  },
  {
    title: "Poster",
    description: "This is a feature description spanning a couple of lines.",
    year: "2025",
    category: "Branding",
    image: SashimonCard,
  },
  {
    title: "Packaging",
    description: "This is a feature description spanning a couple of lines.",
    year: "2024",
    category: "Visual",
    image: KyomidoriCard,
  },
  {
    title: "Movie Poster",
    description: "This is a feature description spanning a couple of lines.",
    year: "2023",
    category: "Campaign",
    image: InterstellarCard,
  },
  {
    title: "Editorial System",
    description: "Layout explorations for a multi-platform magazine.",
    year: "2022",
    category: "Editorial",
  },
  {
    title: "Identity Refresh",
    description: "A modern refresh for a boutique hospitality group.",
    year: "2021",
    category: "Branding",
  },
];
