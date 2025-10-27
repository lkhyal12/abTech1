import React, { useEffect, useRef, useState } from "react";
const skills = [
  // frontEnd
  { skill: "HTML/CSS", level: 70, category: "frontend" },
  { skill: "Javascript", level: 75, category: "frontend" },
  { skill: "React Js", level: 65, category: "frontend" },
  { skill: "NextJs", level: 50, category: "frontend" },
  { skill: "TypeScript", level: 50, category: "frontend" },

  // algorithms
  // { skill: "Algorithms", level: 60, category: "alogithms" },
  // { skill: "Data Structers", level: 60, category: "dsa" },
  { skill: "Visual Studio", level: 50, category: "tools" },
  { skill: "Git/Github", level: 50, category: "tools" },
];
const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isThisSectionVisible, setIsThisSectionVisible] = useState(false);

  const skillsCategoryArr = skills.filter(
    (s) => currentCategory === "all" || currentCategory === s.category
  );
  const skillsSectionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsThisSectionVisible(true);
      },
      { threshold: 0.5 }
    );

    if (skillsSectionRef.current) observer.observe(skillsSectionRef.current);
    return () => {
      if (skillsSectionRef.current)
        observer.unobserve(skillsSectionRef.current);
    };
  }, []);
  return (
    <section
      ref={skillsSectionRef}
      id="skills"
      className="relative z-10 min-h-screen flex flex-col items-center pt-25 pb-5 px-4 sm:px-5 md:px-10 lg:px-30 xl:px-40"
    >
      <h1 className="sectionTitle text-secondary">
        My <span className="text-primary">Skills</span>
      </h1>

      <div className="skillsSectionLinks flex justify-center items-center flex-wrap gap-5 mt-10">
        <button
          className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
            currentCategory == "all" ? "btnBg" : "text-primary"
          }`}
          onClick={() => setCurrentCategory("all")}
        >
          All
        </button>

        <button
          className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
            currentCategory == "frontend" ? "btnBg" : "text-primary"
          }`}
          onClick={() => setCurrentCategory("frontend")}
        >
          FRONTEND
        </button>

        <button
          className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
            currentCategory == "backend" ? "btnBg" : "text-primary"
          }`}
          onClick={() => setCurrentCategory("backend")}
        >
          BACKEND
        </button>

        <button
          className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
            currentCategory == "tools" ? "btnBg" : "text-primary"
          }`}
          onClick={() => setCurrentCategory("tools")}
        >
          TOOLS
        </button>
      </div>

      {skillsCategoryArr.length ? (
        <div className="skillsCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full min-h-1/2">
          {skillsCategoryArr.map((skill) => (
            <div className="p-6 bgCard rounded-lg shadow-md" key={skill.skill}>
              <h3 className="text-primary font-bold">{skill.skill}</h3>

              <div className="h-2 w-full  rounded-full mt-5">
                <div
                  className="h-full rounded-full btnBg transition-all duration-300"
                  style={{
                    width: isThisSectionVisible ? skill.level + "%" : "0",
                  }}
                >
                  {" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between items-center mt-15">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">
            Working on it
          </h2>
        </div>
      )}
    </section>
  );
};

export default Skills;
