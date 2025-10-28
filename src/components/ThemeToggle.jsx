import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { use } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
  }, []);
  function handleToggle() {
    document.documentElement.classList.toggle("dark");
    if (darkMode) {
      localStorage.removeItem("darkMode");
      setDarkMode(false);
    } else {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  }
  return (
    <div
      className="fixed to-10% right-5 cursor-pointer z-60 m-5 hidden md:block "
      onClick={handleToggle}
    >
      {darkMode ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-blue-950"></Moon>
      )}
    </div>
  );
};

export default ThemeToggle;
