import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as ScrollLink } from "react-scroll";
import Typical from "react-typical";
import content from "../content";

const Header = () => {
  return (
    <div
      style={{ background: "#091C29" }}
      className={`min-h-screen flex items-center justify-around text-white`}
      id="header"
    >
      <div
        className={`flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between `}
      >
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            effect="opacity"
            className={`rounded-xl w-full mx-auto hover:animate-pulse`}
          />
        </div>
        <div
          className={`w-full md:w-3/5 text-center md:text-left md:items-stretch`}
        >
          <h1 className="text-3xl md:text-4xl ">
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h1>
          <h1 className={`text-2xl md:text-4xl text-indigo-200`}>
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              wrapper="p"
              className={`inline-block `}
            />
          </h1>

          <button
            className={`p-3 mt-5 bg-indigo-500 mb-5 text-2xl uppercase animate-pulse rounded-xl font-mono`}
          >
            <ScrollLink to="stack" duration={1000} smooth={true}>
              {content.header.btnText}
            </ScrollLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
