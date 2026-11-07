import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { useI18n } from "../../i18n/I18nProvider";

export const Projects = () => {
  const { dictionary } = useI18n();
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={dictionary.nav.projects} dir="l" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <Project
              key={project.title}
              {...project}
              title={dictionary.projects.titles[index]}
            />
          );
        })}
      </div>
    </section>
  );
};

const projects = [
   {
    title: "Product Design System",
    imgSrc: "/project-imgs/system-design.webp",
    projectLink: "https://www.figma.com/proto/x4j8ruqRJ7tyxrQJ6eQNoF/Inkaclub-%E2%80%93-Inkafarma?node-id=78-5205&t=JD9em8173HQAh4FF-1",
    tech: ["Figma", "Design Tokens", "UI Kit", "Auto-layout", "React", "Tailwind"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/design-system/docu.webp",
      "/project-imgs/design-system/flujos.webp",
      "/project-imgs/design-system/uikit.webp",
      "/project-imgs/design-system/wireframe.webp",
      "/project-imgs/design-system/prototipo.webp",
    ],

    galleryMoreImages: [
      "/project-imgs/design-system/portada.webp",
      "/project-imgs/design-system/design-system-voltron-1.webp",
      "/project-imgs/design-system/design-system-voltron-2.webp",
      "/project-imgs/design-system/design-system-voltron-3.webp",
      "/project-imgs/design-system/design-system-voltron-4.webp",
      "/project-imgs/design-system/design-system-voltron-5.webp",
      "/project-imgs/design-system/design-system-voltron-6.webp",
      "/project-imgs/design-system/design-system-voltron-7.webp",
      "/project-imgs/design-system/design-system-voltron-8.webp",
      "/project-imgs/design-system/design-system-voltron-9.webp",
      "/project-imgs/design-system/design-system-voltron-10.webp",
      "/project-imgs/design-system/design-system-voltron-11.webp",
      "/project-imgs/design-system/design-system-voltron-12.webp",
      "/project-imgs/design-system/design-system-voltron-13.webp",
      "/project-imgs/design-system/design-system-voltron-14.webp",
      "/project-imgs/design-system/design-system-voltron-15.webp",
      "/project-imgs/design-system/design-system-voltron-16.webp",
      "/project-imgs/design-system/design-system-voltron-17.webp",
      "/project-imgs/design-system/design-system-voltron-18.webp",
      "/project-imgs/design-system/design-system-voltron-19.webp",
      "/project-imgs/design-system/design-system-voltron-20.webp",
    ],
  },
  {
    title: "Caso de Estudio: E2E",
    imgSrc: "/project-imgs/web-corporative.webp",
    projectLink: "https://voltrondata-v1.netlify.app",
    tech: ["Figma", "Midjourney", "Cursor", "React", "Vue", "Tailwind", "Markdown"],
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

    galleryMoreImages: [
      "/project-imgs/user-interface/voltron-data-website.webp",

      "/project-imgs/user-interface/portafolio-personal.webp",

      "/project-imgs/user-interface/ui-hero.webp",
      "/project-imgs/user-interface/ui-content.webp",

      "/project-imgs/user-interface/ui-header.webp",
      "/project-imgs/user-interface/ui-page.webp",
      
      "/project-imgs/pos-niubiz/pos-landing.webp",

      "/project-imgs/user-interface/ui-conference.webp",

      "/project-imgs/user-interface/ui-web.webp",
    ],
  },
  {
    title: "Mobile First Design",
    imgSrc: "/project-imgs/apps-mobile.webp",
    projectLink: "https://goo.su/ziNdk",
    tech: ["Figma", "Lucidchart", "Midjourney", "Adobe XD", "Miro"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/app-project/miwawa-1.webp",
      "/project-imgs/app-project/miwawa-2.webp",
    ],

    galleryMoreImages: [
      "/project-imgs/pos-niubiz/pos-header.webp",
      "/project-imgs/pos-niubiz/pos-user.webp",
      "/project-imgs/pos-niubiz/pos-niubiz.webp",
      "/project-imgs/pos-niubiz/pos-mobile.webp",
      "/project-imgs/pos-niubiz/pos-ux1.webp",
      "/project-imgs/pos-niubiz/pos-ux2.webp",
      
      "/project-imgs/app-project/app-livetrade.webp",
      "/project-imgs/app-project/app-mobile.webp",

      "/project-imgs/app-project/app-mystery.webp",
    ],
  },
  {
    title: "Web App Projects",
    imgSrc: "/project-imgs/webapp-project.webp",
    projectLink: "",
    tech: ["Figma","Adobe XD", "Vue", "Scss", "Materialize", "Stripe", "Jupyter"],
    description:
      "Xyz",
    galleryImages: [
      "/project-imgs/app-project/app-header.webp",
      "/project-imgs/app-project/app-blazing.webp",
      "/project-imgs/app-project/app-login.webp",
      "/project-imgs/app-project/app-dev.webp",
    ],

    galleryMoreImages: [
      "/project-imgs/app-project/app-spacedat.webp",
      "/project-imgs/app-project/app-navbar.webp",
      "/project-imgs/app-project/app-dashboard.webp",
    ],
  },
  {
    title: "Identidad de Marca",
    imgSrc: "/project-imgs/brand-identity.webp",
    projectLink: "",
    tech: ["Illustrator", "Photoshop", "Midjourney", "Google Slides", "Acrobat"],
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
    ],

    galleryMoreImages: [
      "/project-imgs/brand-identity/logo-codex.webp",
      "/project-imgs/brand-identity/logo-theseus.webp",
      "/project-imgs/brand-identity/logo-rapids.webp",
      "/project-imgs/brand-identity/logo-blazingsql.webp",
      "/project-imgs/brand-identity/logo-spacedat.webp",
      "/project-imgs/brand-identity/unicod-header.webp",
      "/project-imgs/brand-identity/unicod-logo.webp",
      "/project-imgs/brand-identity/unicod-stationary.webp",
      "/project-imgs/pitch-deck/slides-header.webp",
      "/project-imgs/pitch-deck/slides-guides.webp",
      "/project-imgs/pitch-deck/slides-spacedat.webp",
      "/project-imgs/pitch-deck/slides-niubiz.webp",
      "/project-imgs/pitch-deck/slides-rappi.webp",
      "/project-imgs/pitch-deck/slides-avelina.webp",
      "/project-imgs/pitch-deck/slides-lalucha.webp",
      "/project-imgs/pitch-deck/slides-cybergarden.webp",
      "/project-imgs/pitch-deck/slides-university.webp",
      "/project-imgs/brand-identity/branding-newyorkcity.webp",
    ],
  },
  {
    title: "Product Marketing",
    imgSrc: "/project-imgs/social-media.webp",
    projectLink: "",
    tech: ["X", "LinkedIn", "Facebook", "Illustrator", "Photoshop", "CapCutAi", "LLMs"],
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
    ],

    galleryMoreImages: [
      "/project-imgs/social-media/social-festivity.webp",
      "/project-imgs/social-media/social-fashion.webp",
    ],
  },
];

