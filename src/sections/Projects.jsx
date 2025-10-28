import React, { useState } from "react";
import moviesAppImg from "../assets/images/moviesApp.PNG";
import nikePageImg from "../assets/images/nikeCapture.PNG";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Movies Web Application",
    description:
      "A beautiful web application using react firebase and tailwindcss",
    image: moviesAppImg,
    tags: ["React", "TailwindCSS", "FireBase"],
    demoUrl: "https://tmdbtrailers.vercel.app/",
    githubUrl: "https://github.com/lkhyal12/tmdbtrailers",
  },
  {
    id: 2,
    title: "Nike Landing Page",
    description:
      "A beautiful lading page of nike shoes i created using reactjs and tailwindcss",
    image: nikePageImg,
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://tmdbtrailers.vercel.app/",
    githubUrl: "https://github.com/lkhyal12/tmdbtrailers",
  },
];
const Projects = ({ setLayoutImg }) => {
  function handleChangeImg(img) {
    console.log({ img });
    setLayoutImg(img);
  }
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-25 sm:px-5 md:px-10 lg:px-30 xl:px-40"
    >
      <h1 className="sectionTitle text-secondary">
        Featured <span className="text-primary">Projects</span>
      </h1>
      <p className="text-center w-full md:w-2/3 my-5 text-accent font-medium">
        {" "}
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>

      <div className="projectsContainer grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
        {projects.map((p) => (
          <div className=" bgCard shadow-lg rounded-[10px]">
            <img
              src={p.image}
              alt={p.title}
              onClick={() => handleChangeImg(p.image)}
              className="w-full rounded-[10px] cursor-pointer"
            />

            <div className="p-4">
              <div className="w-full flex items-center gap-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span className="borderColor px-2 rounded-3xl text-[12px] font-medium sm:text-[14px]  text-accent">
                    #{tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg text-primary sm:text-xl font-medium  my-4">
                {p.title}
              </h3>
              <p className="text-accent">{p.description}</p>
            </div>

            <div className="flex items-center gap-3 py-5 px-2">
              <a
                className="text-primary cursor-pointer"
                href={p.demoUrl}
                target="_blank"
              >
                <ExternalLink size={15} />
              </a>
              <a
                className="text-primary cursor-pointer"
                href={p.githubUrl}
                target="_blank"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
