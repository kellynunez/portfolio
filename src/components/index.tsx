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
    <div className="min-h-screen md:flex">
      <SideBar />

      <main className="relative z-0 min-w-0 flex-1 md:pl-[54px]">
        <Header />
        <div className="mx-auto max-w-md space-y-32 pb-24 md:max-w-3xl lg:max-w-5xl px-5 md:px-8">
          <Hero />
          {/* <RibbonWords /> */}
          <Projects />
          <Experience />
          <Education />
                    <About />

          <Contact />
        </div>
      </main>

      <MobileNav />
    </div>
  );
};
