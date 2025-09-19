import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects X-codeirawan",
  description:
    "Discover my portfolio of fullstack development projects, a curated collection showcasing my skills and creativity in web design and development. Immerse yourself in a diverse range of web solutions and innovative designs.",
  alternates: {
    canonical: "https://codeirawan.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
