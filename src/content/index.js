import Mongo from "../assets/mongo.png";
import Comedy from "../assets/Comedy.png";
import Express from "../assets/express.png";
import React from "../../public/logo192.png";
import Node from "../assets/node.png";
import project from "../assets/project-mobile.png";
import fb from "../assets/facebook.png";
import git from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linked from "../assets/link.png";
export default {
  nav: {
    title: "CC",
    links: [
      { text: "Work", path: "work" },
      { text: "Contact", path: "contact" },
    ],
  },
  header: {
    img: Profile,
    text: ["Hi!", `It's me Pooja `, "Iam "],
    typical: [
      " Web Developer.",
      2000,
      "Mobile Developer .",
      2000,
      "FrontEnd Developer ..",
      2000,
    ],
    btnText: "Discover More",
  },
  projects: {
    title: "Projects",
    text: "I have done",
    details: [
      {
        img: Comedy,
        head: "Netflix Clone",
        desc: "Netflix clone built using React JS and test-tmdb-api built navigation and provided realtime youtube link for trailer content",
      },
      {
        head: "Restaurant Homepage",
        desc: "Behrouz Biryani Restaurant homepage and landing page created with navigation and cart details",
      },
    ],
  },
  stack: {
    title: "Stack I Use",
    tech: [
      { img: Mongo, alt: "mongo" },
      { img: Express, alt: "express" },
      { img: React, alt: "react" },
      { img: Node, alt: "node" },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.`,
  },
  contact: {
    msg: "Ping Me!",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    opt: [
      { img: fb, alt: "fb" },
      { img: git, alt: "Git" },
      { img: gmail, alt: "Mail" },
      { img: linked, alt: "Linkenin" },
    ],
  },
};
