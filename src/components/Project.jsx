import React from "react";
import { Children } from "react";

const Project = ({ project }) => {
  return (
    <div className="m-10 border-4 p-5 bg-indigo-200">
      <h2 className="text-center inline md:text-3xl text-2xl font-bold pb-5">
        {project.head}
      </h2>
      <p>{project.desc}</p>
    </div>
  );
};

export default Project;
