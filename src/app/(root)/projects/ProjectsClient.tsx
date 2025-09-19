"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import PageTitle from "@/components/elements/PageTitle";
import { PROJECT_CARD_CONTENTS } from "@/constants/projects";
import { shuffleArray } from "@/utils/shuffle";

export default function ProjectsClient() {
  const [shuffledProjects, setShuffledProjects] = useState(PROJECT_CARD_CONTENTS);

  useEffect(() => {
    setShuffledProjects(shuffleArray(PROJECT_CARD_CONTENTS));
  }, []);

  return (
    <div className="p-8">
      <PageTitle
        title="Projects"
        description="Showcase of my works on fullstack development."
      />

      <section className="lg:mb-20">
        <ul className="grid gap-8 sm:grid-cols-2">
          {shuffledProjects.map((content, index) => (
            <ProjectCard
              key={index}
              url={content.url}
              title={content.name}
              description={content.description}
              techStack={content.techStack}
              image={content.image}
              imageAlt={content.imageAlt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
