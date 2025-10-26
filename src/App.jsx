import React from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero";
import StarsBackground from "./components/StarsBackground";
import About from "./sections/About";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <NavBar />
      <StarsBackground />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
