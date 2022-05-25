import React from "react";
import content from "../content";
import Project from "./Project";
import backdrop from "../assets/project-mobile.png";
const Work = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center flex-col text-black `}
      id="work"
    >
      <h2 className={`text-6xl font-extrabold mt-3`}>
        {content.projects.title}
      </h2>
      <br />
      <p className="text-gray-500 text-2xl font-medium mb-10">
        {content.projects.text}
      </p>
      <div
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center md:flex-row-reverse p-4 "
      >
        <div className="p-5 text-2xl font-sans w-4/5 md:w-3/5">
          {content.projects.details.map((project, index) => {
            return <Project project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
