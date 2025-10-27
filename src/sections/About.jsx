import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20 sm:px-5 md:px-10 lg:px-30 xl:px-40
      "
    >
      <h1 className="sectionTitle text-secondary">
        About <span className="text-primary">Me</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center mt-15">
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-primary text-center text-2xl font-medium mt-5 tracking-wider">
            Passionate Web Developper
          </h3>

          <p className="text-secondary text-center font-medium">
            With over 3 years of experience in web development, I spcialize in
            creating responsive, accessible, and performant web applications
            using modern thechnologies{" "}
          </p>

          <p className="text-secondary text-center font-medium">
            I'm passionate about creating elegant solutions to complex problems
            and continuously learning new technologies to stay current in the
            evolving tech landscape.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
            <button className="flex-1 btnBg font-semibold px-5 py-2 rounded-full cursor-pointer max-md:w-full">
              Stay In Touch
            </button>
            <button className="flex-1 btnBg font-semibold px-5 py-2 rounded-full cursor-pointer max-md:w-full">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div className="bgCard p-6 flex  items-center gap-5 shadow-sm rounded-lg">
            <Code className="text-primary" size={40} />
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-bold text-xl">
                Web Development
              </h3>
              <p className="text-accent">
                Creating responsive, accessible, and performant web applications
                using modern thechnologies
              </p>
            </div>
          </div>

          <div className="bgCard p-6 flex  items-center gap-5 shadow-sm rounded-lg">
            <User className="text-primary" size={40} />
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-bold text-xl">UI/UX Design</h3>
              <p className="text-accent">
                Desginng intuitive user interfaces and seamless user
                experiences.
              </p>
            </div>
          </div>

          <div className="bgCard p-6 flex  items-center gap-5 shadow-sm rounded-lg">
            <Briefcase className="text-primary" size={40} />
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-bold text-xl">
                Project Managment
              </h3>
              <p className="text-accent">
                Leading projects from conception to completion with agile
                methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
