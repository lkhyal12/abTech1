import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-accent">
            Ab<span className="text-primary">Tech</span>
          </h2>
          <p className="text-sm text-accent mt-2">
            Front-End Developer | Crafting clean, modern web experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={22} className="text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Linkedin size={22} className="text-primary" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-gray-300 transition-colors"
          >
            <Mail size={22} className="text-primary" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-accent text-center md:text-right">
          © {new Date().getFullYear()} AbTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
