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
    title: "Atomic System Design",
    imgSrc: "/project-imgs/web-corporative.webp",
    projectLink: "https://voltron-data.netlify.app",
    tech: ["ReactJS", "TailwindCSS", "Sanity", "Motion", "Cursor", "Lottie Files"],
    description:
      "Xyz",
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
    projectLink: "https://voltrondata-v1.netlify.app",
    tech: ["Node", "JekyllRB", "TailwindCSS", "Markdown", "Figma", "Midjourney"],
    description:
      "Xyz",
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
    title: "Mobile Interfaces",
    imgSrc: "/project-imgs/pos-niubiz.webp",
    projectLink: "",
    tech: ["Figma", "Illustrator", "Photoshop", "Miro"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/pos-niubiz/pos-header.webp",
      "/project-imgs/pos-niubiz/pos-user.webp",
      "/project-imgs/pos-niubiz/pos-niubiz.webp",
      "/project-imgs/pos-niubiz/pos-mobile.webp",
      "/project-imgs/pos-niubiz/pos-ux1.webp",
      "/project-imgs/pos-niubiz/pos-ux2.webp",
      "/project-imgs/app-project/app-mystery.webp",
      "/project-imgs/app-project/app-livetrade.webp",
      "/project-imgs/app-project/app-mobile.webp",
    ],
  },
  {
    title: "Web UI Projects",
    imgSrc: "/project-imgs/webapp-project.webp",
    projectLink: "",
    tech: ["Linux", "VueJS", "Vuetify", "TailwindCSS", "Bootstrap", "Figma", "Adobe"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/app-project/app-header.webp",
      "/project-imgs/app-project/app-login.webp",
      "/project-imgs/app-project/app-blazing.webp",
      "/project-imgs/app-project/app-dev.webp",
      "/project-imgs/user-interface/ui-hero.webp",
      "/project-imgs/user-interface/ui-content.webp",
      "/project-imgs/app-project/app-spacedat.webp",
      "/project-imgs/app-project/app-navbar.webp",
      "/project-imgs/app-project/app-dashboard.webp",
      "/project-imgs/user-interface/ui-conference.webp",
      "/project-imgs/user-interface/ui-web.webp",
      "/project-imgs/user-interface/ui-header.webp",
      "/project-imgs/user-interface/ui-page.webp",
            "/project-imgs/pos-niubiz/pos-landing.webp",

    ],
  },
  {
    title: "Brand Identity",
    imgSrc: "/project-imgs/brand-identity.webp",
    projectLink: "",
    tech: ["Notion", "Adobe CC", "Midjourney", "Google Slides", "Acrobat"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/brand-identity/branding-header.webp",
      "/project-imgs/brand-identity/branding-notion.webp",
      "/project-imgs/brand-identity/branding-letterhead.webp",
      "/project-imgs/brand-identity/branding-stationary.webp",
      "/project-imgs/brand-identity/icons-lineal-voltron.webp",
      "/project-imgs/brand-identity/icons-architecture-gallery.webp",
      "/project-imgs/brand-identity/icons-graphics-codex.webp",
      "/project-imgs/brand-identity/branding-merch.webp",
      "/project-imgs/brand-identity/branding-booth.webp",
      "/project-imgs/brand-identity/logo-codex.webp",
      "/project-imgs/brand-identity/logo-theseus.webp",
      "/project-imgs/brand-identity/logo-rapids.webp",
      "/project-imgs/brand-identity/logo-blazingsql.webp",
      "/project-imgs/brand-identity/logo-spacedat.webp",

    ],
  },
  {
    title: "Social Media",
    imgSrc: "/project-imgs/social-media.webp",
    projectLink: "",
    tech: ["X", "LinkedIn", "Facebook", "Illustrator", "Photoshop", "LLMs"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/social-media/social-header.webp",
      "/project-imgs/social-media/social-size.webp",
      "/project-imgs/social-media/social-linkedin.webp",
      "/project-imgs/social-media/social-seo.webp",
      "/project-imgs/social-media/social-post.webp",
      "/project-imgs/social-media/social-monopoly.webp",
      "/project-imgs/social-media/social-newsletter-engine.webp",
      "/project-imgs/social-media/social-festivity.webp",
      "/project-imgs/social-media/social-fashion.webp",
    ],
  },
  {
    title: "Creative Pitch Deck",
    imgSrc: "/project-imgs/pitch-deck.webp",
    projectLink: "",
    tech: ["Google Slides", "Keynote", "Illustrator"],
    description:
      "Xyz",
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
    title: "Advertising Campaigns",
    imgSrc: "/project-imgs/ads-campaigns.webp",
    projectLink: "",
    tech: ["Illustrator", "Photoshop", "Microsoft Office"],
    description:
      "Xyz",
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
      "/project-imgs/brand-identity/branding-newyorkcity.webp",
    ],
  },
];

