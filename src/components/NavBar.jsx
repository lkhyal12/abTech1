import { Menu, Moon } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <header className="px-5 sm:px-10 md:px-20 py-5">
      <nav className="fixed top-0 left-0 px-5 sm:px-10 md:px-15 lg:px-20 py-5  w-full z-40 flex justify-between items-center">
        <a className="text-primary text-2xl font-bold" href="#home">
          AbTech<span className="text-secondary">Protfolio</span>
        </a>

        <div className="hidden md:flex gap-10 pr-15">
          <a href="#home" className="link text-primary">
            Home
          </a>
          <a href="#about" className="link text-primary">
            About
          </a>
          <a href="#skills" className="link text-primary">
            Skills
          </a>
          <a href="#projects" className="link text-primary">
            Projects
          </a>
          <a href="#contact" className="link text-primary">
            Contact
          </a>
        </div>
      </nav>
      <div className="block md:hidden absolute to-5% right-5 cursor-pointer">
        {" "}
        <Menu className="text-primary" />
      </div>
    </header>
  );
};

export default NavBar;
