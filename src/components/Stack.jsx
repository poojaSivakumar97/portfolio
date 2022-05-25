import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";

const Stack = () => {
  return (
    <div
      style={{
        background: "#eee",
      }}
      className={`min-h-screen flex flex-col items-center justify-around text-black`}
      id="stack"
    >
      <h2 className="text-4xl">{content.stack.title}</h2>

      <div className="flex flex-wrap justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`h-40 w-40 bg-white shadow-xl rounded-full p-5 ml-2 m-10 flex justify-center items-center  ${
                index % 2 === 0 ? "animate-bounce" : "animate-bounce"
              }`}
              key={index}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className=" font-medium text-center mt-10 mb-10 w-11/12 md:max-w-xl block text-xl md:text-2xl">
        {content.stack.desc}
      </p>
    </div>
  );
};

export default Stack;
