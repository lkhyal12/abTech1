import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { use } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  useEffect(() => {
    setDarkMode(true);
  }, []);

  function handleToggle() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div
      className="fixed to-5% right-5 cursor-pointer z-50 p-5"
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
