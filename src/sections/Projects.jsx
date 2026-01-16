import React, { useRef, useState } from "react";
import moviesAppImg from "../assets/images/moviesApp.PNG";
import nikePageImg from "../assets/images/nikeCapture.PNG";
import spotifyImg from "../assets/images/spotify.PNG";
import zentryImg from "../assets/images/zentry1.PNG";
import { ExternalLink, Github } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
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
  {
    id: 3,
    title: "Spotify Clone",
    description: "A simple spotify clone i built using reactjs and tailwindcss",
    image: spotifyImg,
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://spotify-clone-sooty-nu.vercel.app/",
    githubUrl: "https://github.com/lkhyal12/spotify-clone",
  },
  {
    id: 4,
    title: "A Game Landing Page",
    description:
      "A game landing page i create using reactjs tailwindcss and gsap for animation ",
    image: zentryImg,
    tags: ["React", "TailwindCSS", "gsap"],
    demoUrl: "https://zntery-game.vercel.app/",
    githubUrl: "https://github.com/lkhyal12/znteryGame",
  },
];
const Projects = ({ setLayoutImg }) => {
  const projectsRef = useRef();
  function handleChangeImg(img) {
    setLayoutImg(img);
  }

  useGSAP(
    () => {
      gsap.from(".sectionTitle span", {
        yPercent: 100,
        opacity: 0,
        ease: "elastic",
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 60%",
        },
      });

      gsap.from(".bgCard", {
        yPercent: 100,
        opacity: 0,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 50%",
        },
      });
    },
    { scope: projectsRef, dependencies: [] },
  );
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-25 sm:px-5 md:px-10 lg:px-30 xl:px-40"
    >
      <h1 className="sectionTitle text-secondary">
        <span className="inline-block">Featured</span>{" "}
        <span className="text-primary inline-block">Projects</span>
      </h1>
      <p className="text-center w-full md:w-2/3 my-5 text-accent font-medium">
        {" "}
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>

      <div className="projectsContainer grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
        {projects.map((p) => (
          <div key={p.id} className=" bgCard shadow-lg rounded-[10px]">
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
