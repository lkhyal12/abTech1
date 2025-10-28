import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero";
import StarsBackground from "./components/StarsBackground";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ImageLayOut from "./components/ImageLayOut";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  const [layoutImg, setLayoutImg] = useState(null);
  return (
    <>
      <ThemeToggle />
      <NavBar />
      <ImageLayOut setLayoutImg={setLayoutImg} layoutImg={layoutImg} />
      <StarsBackground />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects setLayoutImg={setLayoutImg} />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
