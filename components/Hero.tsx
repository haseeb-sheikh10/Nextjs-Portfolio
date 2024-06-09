import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { DotBackground } from "./ui/DotBackground";
import { TextGenerate } from "./ui/TextGenerate";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left-20 md:-top-20 h-screen"
        fill="#ffffff4a"
      />
      <Spotlight
        className="-top-40 left-28 md:left-20 md:-top-40 h-screen"
        fill="#ffffff4a"
      />
      <Spotlight
        className="-top-20 -left-28 md:-left-36 md:top-20 h-screen"
        fill="#ffffff4a"
      />
      <DotBackground />
      <div className="flex justify-center z-10 relative">
        <div className="flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </h2>
          <TextGenerate
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-6xl lg:text-7xl"
            primaryIndex={[4, 5]}
          />
          <p className="text-sm md:text-lg lg:text-2xl mb-5 text-center">
            Hi, I&apos;m <span className="text-primary">Haseeb</span>, a{" "}
            <span className="text-secondary">Full Stack Developer</span> based
            in Pakistan.
          </p>
          <a title="Show my work" href="#">
            <MagicButton label="Show my work" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
