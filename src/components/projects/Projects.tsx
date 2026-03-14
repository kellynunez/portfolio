import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { style } from "framer-motion/client";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Maternal Health App UI",
    imgSrc: "project-imgs/my-portfolio.png",
    projectLink: "",
    tech: ["Figma", "Illustrator"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
      </>
    ),
  },
  {
    title: "Theseus Dark Theme",
    imgSrc: "project-imgs/my-portfolio.png",
    projectLink: "",
    tech: ["ReactJS", "TailwindCSS", "Sanity", "Motion", "Cursor"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Pain.app is a real-time coaching app for students learning to paint.
        </p>
      </>
    ),
  },
  {
    title: "Website Corporative",
    imgSrc: "project-imgs/web-corporative.png",
    projectLink: "",
    tech: ["Node", "JekyllRB", "TailwindCSS", "Markdown", "Figma", "Lottie Files"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p className="mb-8">
          Liderazgo en el rediseño y optimización de la plataforma corporativa Voltron Data.
        </p>
        <img src="project-imgs/web-corporative/web-header.png" alt="Website Corporative"/>
        <img src="project-imgs/web-corporative/web-about.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-design.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-moodboard.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-system.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-laptop.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-wireframes.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-kit.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-mockup.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-home.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-laptop-news.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-news.png" alt="Website Corporative" className="!mt-0"/>
        <img src="project-imgs/web-corporative/web-contact.png" alt="Website Corporative" className="!mt-0"/>
      </>
    ),
  },
  {
    title: "Brand Identity",
    imgSrc: "project-imgs/brand-identity.png",
    projectLink: "",
    tech: ["Notion", "Illustrator", "Acrobat"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
  {
    title: "Social Media",
    imgSrc: "project-imgs/social-media.png",
    projectLink: "",
    tech: ["Illustrator", "Photoshop"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
  {
    title: "Creative Pitch Deck",
    imgSrc: "project-imgs/pitch-deck.png",
    projectLink: "",
    tech: ["Google Drive", "Keynote", "Illustrator"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
  {
    title: "Web App Projects",
    imgSrc: "project-imgs/webapp-project.png",
    projectLink: "",
    tech: ["Linux", "VueJS", "Sass", "Materialize"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
  {
    title: "User Interfaces",
    imgSrc: "project-imgs/user-interfaces.png",
    projectLink: "",
    tech: ["TailwindCSS", "Figma"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
      </>
    ),
  },
  {
    title: "POS Systems Interface",
    imgSrc: "project-imgs/app-niubiz.png",
    projectLink: "",
    tech: ["Figma", "Illustrator"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
  {
    title: "Advertising Campaigns",
    imgSrc: "project-imgs/ads-campaigns.png",
    projectLink: "",
    tech: ["Photoshop", "Office"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
      </>
    ),
  },
];

