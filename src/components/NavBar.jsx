import { Menu, Moon, X } from "lucide-react";
import React, { useState } from "react";

const NavBar = () => {
  const [showLinksMenu, setShowLinksMenu] = useState(false);
  function handleCloseMenu() {
    setShowLinksMenu(false);
  }
  return (
    <header className="px-5 sm:px-10 md:px-20 py-5">
      <nav className="fixed top-0 left-0 px-5 sm:px-10 md:px-15 lg:px-20 py-5  w-full z-50 flex justify-between items-center">
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
      <div className="block md:hidden fixed to-5% right-5 cursor-pointer z-50">
        {" "}
        <Menu
          className="text-primary cursor-pointer"
          onClick={() => setShowLinksMenu(true)}
        />
      </div>

      {/* links menu */}
      {showLinksMenu && (
        <div className="mobileLinks fixed inset-0 z-90  bg-black/90">
          <div className="fixed top-10% pt-10 right-10  w-fit">
            <X
              color="white"
              className="cursor-pointer"
              size={30}
              onClick={handleCloseMenu}
            />
          </div>
          <div className="  flex flex-col items-center justify-center gap-10 h-full w-full">
            <a
              href="#home"
              className="font-bold text-white"
              onClick={() => setShowLinksMenu(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-white"
              onClick={() => setShowLinksMenu(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="font-bold text-white"
              onClick={() => setShowLinksMenu(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-bold text-white"
              onClick={() => setShowLinksMenu(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-bold text-white"
              onClick={() => setShowLinksMenu(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
