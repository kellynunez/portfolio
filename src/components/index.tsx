import React from "react";
import dynamic from "next/dynamic";
import { SideBar } from "./nav/SideBar";
import { MobileNav } from "./nav/MobileNav";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import RibbonWords from "./hero/RibbonWords";

const Projects = dynamic(
  () => import("./projects/Projects").then((mod) => mod.Projects),
  { ssr: false }
);

const About = dynamic(
  () => import("./about/About").then((mod) => mod.About),
  { ssr: false }
);

const Experience = dynamic(
  () => import("./experience/Experience").then((mod) => mod.Experience),
  { ssr: false }
);

const Education = dynamic(
  () => import("./education/Education").then((mod) => mod.Education),
  { ssr: false }
);

const Contact = dynamic(
  () => import("./contact/Contact").then((mod) => mod.Contact),
  { ssr: false }
);

export const HomPage = () => {
  return (
    <div className="min-h-screen">
      <SideBar />

      <main className="relative md:pl-[54px]">
        <Header />
        <div className="mx-auto max-w-md space-y-32 px-4 pb-24 md:max-w-3xl md:px-8 lg:max-w-5xl">
          <Hero />
          {/* <RibbonWords /> */}
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>

      <MobileNav />
    </div>
  );
};
