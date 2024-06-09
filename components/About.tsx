import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const About = () => {
  return (
    <section className="relative" id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item?.id}
            id={item?.id}
            className={item?.className}
            title={item?.title}
            description={item?.description}
            img={item?.img}
            imgClassName={item?.imgClassName}
            titleClassName={item?.titleClassName}
            spareImg={item?.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
