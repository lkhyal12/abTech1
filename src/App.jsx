import React from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <NavBar />
    </>
  );
};

export default App;
