import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen p-10 flex flex-col items-center justify-center  gap-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-secondary font-bold">
        Hey, I'm <span className="text-primary">Abdelali</span> Baami
      </h1>
      <p class="text-accent md:w-1/2 text-center font-medium leading-8">
        Front-end developer crafting fast, accessible, and pixel-perfect web
        experiences using React, Tailwind, and modern JavaScript.
      </p>
      <button className="btnBg hover:opacity-90 py-2 px-6 rounded-full cursor-pointer hover:shadow-3xl font-medium">
        View My Work
      </button>

      <div className="scrollDown bounce absolute bottom-5 left-50% transform flex flex-col gap-2 items-center justify-center">
        <ArrowDown className="text-primary" size={18} />
        <span className="text-primary text-sm ">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
