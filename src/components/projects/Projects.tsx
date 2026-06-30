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
/*   {
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
  }, */
  {
    title: "Website Corporative",
    imgSrc: "project-imgs/web-corporative.png",
    projectLink: "",
    tech: ["Node", "JekyllRB", "TailwindCSS", "Markdown", "Figma", "Midjourney"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
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
    tech: ["Notion", "Adobe CC", "Midjourney", "Google Slides", "Acrobat"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <img src="project-imgs/brand-identity/branding-header.webp" alt="Brand Identity"/>
        <img src="project-imgs/brand-identity/branding-notion.webp" alt="Brand Identity" className="!mt-0"/>
        <img src="project-imgs/brand-identity/branding-letterhead.webp" alt="Brand Identity" className="!mt-0"/>
        <img src="project-imgs/brand-identity/branding-icons.webp" alt="Brand Identity" className="!mt-0"/>
        <img src="project-imgs/brand-identity/branding-stationary.webp" alt="Brand Identity" className="!mt-0"/>
        <img src="project-imgs/brand-identity/branding-merch.webp" alt="Brand Identity" className="!mt-0"/>
        <img src="project-imgs/brand-identity/branding-booth.webp" alt="Brand Identity" className="!mt-0"/>
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
        <img src="project-imgs/social-media/social-header.webp" alt="Social Media"/>
        <img src="project-imgs/social-media/social-size.webp" alt="Social Media" className="!mt-0"/>
        <img src="project-imgs/social-media/social-linkedin.webp" alt="Social Media" className="!mt-0"/>
        <img src="project-imgs/social-media/social-seo.webp" alt="Social Media" className="!mt-0"/>
        <img src="project-imgs/social-media/social-post.webp" alt="Social Media" className="!mt-0"/>
        <img src="project-imgs/social-media/social-monopoly.webp" alt="Social Media" className="!mt-0"/>
      </>
    ),
  },
  {
    title: "Creative Pitch Deck",
    imgSrc: "project-imgs/pitch-deck.png",
    projectLink: "",
    tech: ["Google Slides", "Keynote", "Illustrator"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <img src="project-imgs/pitch-deck/slides-header.webp" alt="Pitch Deck"/>
        <img src="project-imgs/pitch-deck/slides-guides.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-spacedat.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-niubiz.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-rappi.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-avelina.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-lalucha.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-cybergarden.webp" alt="Pitch Deck" className="!mt-0"/>
        <img src="project-imgs/pitch-deck/slides-university.webp" alt="Pitch Deck" className="!mt-0"/>
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
        <img src="project-imgs/app-project/app-header.webp" alt="WebApp Projects"/>
        <img src="project-imgs/app-project/app-login.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-blazing.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-dev.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-spacedat.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-navbar.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-dashboard.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-mystery.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-livetrade.webp" alt="WebApp Projects" className="!mt-0"/>
        <img src="project-imgs/app-project/app-mobile.webp" alt="WebApp Projects" className="!mt-0"/>
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
        <img src="project-imgs/user-interface/ui-header.webp" alt="User Interfaces"/>
        <img src="project-imgs/user-interface/ui-page.webp" alt="User Interfaces" className="!mt-0"/>
        <img src="project-imgs/user-interface/ui-hero.webp" alt="User Interfaces" className="!mt-0"/>
        <img src="project-imgs/user-interface/ui-content.webp" alt="User Interfaces" className="!mt-0"/>
        <img src="project-imgs/user-interface/ui-conference.webp" alt="User Interfaces" className="!mt-0"/>
        <img src="project-imgs/user-interface/ui-web.webp" alt="User Interfaces" className="!mt-0"/>
      </>
    ),
  },
  {
    title: "POS Systems Interface",
    imgSrc: "project-imgs/pos-niubiz.png",
    projectLink: "",
    tech: ["Figma", "Illustrator", "Miro"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <img src="project-imgs/pos-niubiz/pos-header.webp" alt="POS Systems Interface"/>
        <img src="project-imgs/pos-niubiz/pos-user.webp" alt="POS Systems Interface" className="!mt-0"/>
        <img src="project-imgs/pos-niubiz/pos-niubiz.webp" alt="POS Systems Interface" className="!mt-0"/>
        <img src="project-imgs/pos-niubiz/pos-mobile.webp" alt="POS Systems Interface" className="!mt-0"/>
        <img src="project-imgs/pos-niubiz/pos-landing.webp" alt="POS Systems Interface" className="!mt-0"/>
        <img src="project-imgs/pos-niubiz/pos-ux1.webp" alt="POS Systems Interface" className="!mt-0"/>
        <img src="project-imgs/pos-niubiz/pos-ux2.webp" alt="POS Systems Interface" className="!mt-0"/>
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
        <img src="project-imgs/ads-campaigns/ads-header.webp" alt="Advertising Campaigns"/>
        <img src="project-imgs/ads-campaigns/ads-feed.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-label.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-banner.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-exterior.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-jingle.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-mockup.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-news.webp" alt="Advertising Campaigns" className="!mt-0"/>
        <img src="project-imgs/ads-campaigns/ads-flyer.webp" alt="Advertising Campaigns" className="!mt-0"/>
      </>
    ),
  },
];

