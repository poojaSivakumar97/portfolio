import React from "react";
import content from "../content";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  return (
    <div
      style={{ background: "#091C29" }}
      className={`fixed top-0 z-40 w-screen `}
    >
      <div
        className={`flex min-h-fit  items-center mx-auto w-10/12 justify-between py-3 text-white`}
      >
        <ScrollLink to="header" smooth={true}>
          <h1 className="text-5xl font-semibold md:text-3xl cursor-pointer">
            {content.nav.title}
            <span className="h-3 w-3 rounded-full bg-red-500 inline-block ml-4"></span>
          </h1>
        </ScrollLink>
        <ul>
          {content.nav.links.map((link, index) => {
            return (
              <span
                className={`m-4 font-medium text-3xl cursor-pointer`}
                key={index}
              >
                <ScrollLink to={link.path} smooth={true}>
                  {link.text}
                </ScrollLink>
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
