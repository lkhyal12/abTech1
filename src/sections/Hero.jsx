import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from "react";
const words = [
  "Bammi Abdelali",
  "A Frontend Developer",
  "A React Enthusiast",
  "UI Designer",
];
const Hero = () => {
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    let duration = 300;
    let idx = 0;
    let word = words[idx];
    let isDeleting = false;
    let text = "";
    let wordIdx = 0;
    let timer;
    function type() {
      if (isDeleting) {
        duration = 100;
        text = text.slice(0, text.length - 1);
      } else {
        duration = 300;
        text = word.slice(0, text.length + 1);
      }
      if (isDeleting) {
        if (text === "") {
          isDeleting = false;
          idx = idx == words.length - 1 ? 0 : idx + 1;
          word = words[idx];
          duration = 300;
        }
      } else {
        if (text === word) {
          isDeleting = true;
          duration = 1000;
        }
      }

      setCurrentWord(text);
      timer = setTimeout(type, duration);
    }
    // const timerId = setTimeout(type, duration);
    type();

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="home"
      className="relative w-full h-screen pb-5 p-10 flex flex-col items-center justify-center  gap-10"
    >
      <h1 className="sectionTitle text-secondary text-center">
        Hey, I'm <span className="text-primary">{currentWord}</span>
      </h1>
      <p className="text-accent md:w-1/2 text-center font-medium leading-8">
        Front-end developer crafting fast, accessible, and pixel-perfect web
        experiences using React, Tailwind, and modern JavaScript.
      </p>
      <a
        href="#projects"
        className="btnBg hover:opacity-90 py-2 px-6 rounded-full cursor-pointer hover:shadow-3xl font-medium"
      >
        View My Work
      </a>

      <div className="scrollDown bounce absolute bottom-20 left-50% transform flex flex-col gap-2 items-center justify-center max-sm:bottom-10">
        <ArrowDown className="text-primary" size={18} />
        <span className="text-primary text-sm ">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
