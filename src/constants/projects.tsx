import projectsJson from "../data/projects.json";
import { renderIcon } from "./icons";

export interface Project {
  url: string;
  name: string;
  description: string;
  techStack: { label: string; icon: JSX.Element }[];
  image: string;
  imageAlt: string;
}

export const PROJECT_CARD_CONTENTS: Project[] = projectsJson.map((proj) => ({
  url: proj.url,
  name: proj.name,
  description: proj.description,
  techStack: proj.tech.map((label: string) => ({
    label,
    icon: renderIcon(label),
  })),
  image: proj.image,
  imageAlt: proj.imageAlt,
}));
