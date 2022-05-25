import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";

const Contact = () => {
  return (
    <div
      style={{ backgroundColor: "#eee" }}
      className={`min-h-screen flex flex-col justify-center items-center text-white`}
      id="contact"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#091C29",
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <div className=" w-4/5 md:w-2/5 mt-5 transtion text-center duration-2000">
          <h2 className="text-4xl font-semibold  font-mono">
            {content.contact.msg}
          </h2>
          <span className="inline-block mt-10 mb-10 w-11/12 md:max-w-xl text-center">
            {content.contact.desc}
          </span>
          <div className="flex ml-10 mb-20">
            {content.contact.opt.map((con, index) => {
              return (
                <span key={index}>
                  <LazyLoadImage
                    src={con.img}
                    alt={con.alt}
                    className="h-25 w-25 cursor-pointer"
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
