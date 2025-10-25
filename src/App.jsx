import React from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <NavBar />
      <Hero />
    </>
  );
};

export default App;
