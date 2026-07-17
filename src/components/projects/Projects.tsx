import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

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
    imgSrc: "/project-imgs/web-corporative.png",
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
    imgSrc: "/project-imgs/web-corporative.png",
    projectLink: "https://voltron-data.netlify.app",
    tech: ["ReactJS", "TailwindCSS", "Sanity", "Motion", "Cursor", "Lottie Files"],
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
    imgSrc: "/project-imgs/web-corporative.webp",
    projectLink: "",
    tech: ["Node", "JekyllRB", "TailwindCSS", "Markdown", "Figma", "Midjourney"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    galleryImages: [
      "/project-imgs/web-corporative/web-header.webp",
      "/project-imgs/web-corporative/web-about.webp",
      "/project-imgs/web-corporative/web-design.webp",
      "/project-imgs/web-corporative/web-moodboard.webp",
      "/project-imgs/web-corporative/web-system.webp",
      "/project-imgs/web-corporative/web-laptop.webp",
      "/project-imgs/web-corporative/web-wireframes.webp",
      "/project-imgs/web-corporative/web-kit.webp",
      "/project-imgs/web-corporative/web-mockup.webp",
      "/project-imgs/web-corporative/web-home.webp",
      "/project-imgs/web-corporative/web-laptop-news.webp",
      "/project-imgs/web-corporative/web-news.webp",
      "/project-imgs/web-corporative/web-contact.webp",
    ],
  },
  {
    title: "Brand Identity",
    imgSrc: "/project-imgs/brand-identity.webp",
    projectLink: "",
    tech: ["Notion", "Adobe CC", "Midjourney", "Google Slides", "Acrobat"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/brand-identity/branding-header.webp",
      "/project-imgs/brand-identity/branding-notion.webp",
      "/project-imgs/brand-identity/branding-letterhead.webp",
      "/project-imgs/brand-identity/branding-icons.webp",
      "/project-imgs/brand-identity/branding-stationary.webp",
      "/project-imgs/brand-identity/branding-merch.webp",
      "/project-imgs/brand-identity/branding-booth.webp",
    ],
  },
  {
    title: "Social Media",
    imgSrc: "/project-imgs/social-media.webp",
    projectLink: "",
    tech: ["Illustrator", "Photoshop"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/social-media/social-header.webp",
      "/project-imgs/social-media/social-size.webp",
      "/project-imgs/social-media/social-linkedin.webp",
      "/project-imgs/social-media/social-seo.webp",
      "/project-imgs/social-media/social-post.webp",
      "/project-imgs/social-media/social-monopoly.webp",
    ],
  },
  {
    title: "Creative Pitch Deck",
    imgSrc: "/project-imgs/pitch-deck.webp",
    projectLink: "",
    tech: ["Google Slides", "Keynote", "Illustrator"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/pitch-deck/slides-header.webp",
      "/project-imgs/pitch-deck/slides-guides.webp",
      "/project-imgs/pitch-deck/slides-spacedat.webp",
      "/project-imgs/pitch-deck/slides-niubiz.webp",
      "/project-imgs/pitch-deck/slides-rappi.webp",
      "/project-imgs/pitch-deck/slides-avelina.webp",
      "/project-imgs/pitch-deck/slides-lalucha.webp",
      "/project-imgs/pitch-deck/slides-cybergarden.webp",
      "/project-imgs/pitch-deck/slides-university.webp",
    ],
  },
  {
    title: "Web App Projects",
    imgSrc: "/project-imgs/webapp-project.webp",
    projectLink: "",
    tech: ["Linux", "VueJS", "Sass", "Materialize"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/app-project/app-header.webp",
      "/project-imgs/app-project/app-login.webp",
      "/project-imgs/app-project/app-blazing.webp",
      "/project-imgs/app-project/app-dev.webp",
      "/project-imgs/app-project/app-spacedat.webp",
      "/project-imgs/app-project/app-navbar.webp",
      "/project-imgs/app-project/app-dashboard.webp",
      "/project-imgs/app-project/app-mystery.webp",
      "/project-imgs/app-project/app-livetrade.webp",
      "/project-imgs/app-project/app-mobile.webp",
    ],
  },
  {
    title: "User Interfaces",
    imgSrc: "/project-imgs/user-interfaces.webp",
    projectLink: "",
    tech: ["TailwindCSS", "Figma"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    galleryImages: [
      "/project-imgs/user-interface/ui-header.webp",
      "/project-imgs/user-interface/ui-page.webp",
      "/project-imgs/user-interface/ui-hero.webp",
      "/project-imgs/user-interface/ui-content.webp",
      "/project-imgs/user-interface/ui-conference.webp",
      "/project-imgs/user-interface/ui-web.webp",
    ],
  },
  {
    title: "POS Systems Interface",
    imgSrc: "/project-imgs/pos-niubiz.webp",
    projectLink: "",
    tech: ["Figma", "Illustrator", "Miro"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/pos-niubiz/pos-header.webp",
      "/project-imgs/pos-niubiz/pos-user.webp",
      "/project-imgs/pos-niubiz/pos-niubiz.webp",
      "/project-imgs/pos-niubiz/pos-mobile.webp",
      "/project-imgs/pos-niubiz/pos-landing.webp",
      "/project-imgs/pos-niubiz/pos-ux1.webp",
      "/project-imgs/pos-niubiz/pos-ux2.webp",
    ],
  },
  {
    title: "Advertising Campaigns",
    imgSrc: "/project-imgs/ads-campaigns.webp",
    projectLink: "",
    tech: ["Photoshop", "Office"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    galleryImages: [
      "/project-imgs/ads-campaigns/ads-header.webp",
      "/project-imgs/ads-campaigns/ads-feed.webp",
      "/project-imgs/ads-campaigns/ads-label.webp",
      "/project-imgs/ads-campaigns/ads-banner.webp",
      "/project-imgs/ads-campaigns/ads-exterior.webp",
      "/project-imgs/ads-campaigns/ads-jingle.webp",
      "/project-imgs/ads-campaigns/ads-mockup.webp",
      "/project-imgs/ads-campaigns/ads-news.webp",
      "/project-imgs/ads-campaigns/ads-flyer.webp",
    ],
  },
];

