import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerate } from "./ui/TextGenerate";
import { projects } from "@/data";

const Projects = () => {
  return (
    <section className="relative" id="projects">
      <div>
        <TextGenerate
          words="A small selection of recent projects"
          className="text-center text-[36px] md:text-4xl lg:text-5xl"
          primaryIndex={[4, 5]}
        />
      </div>
    </section>
  );
};

export default Projects;
