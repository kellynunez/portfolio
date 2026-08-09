import React from "react";
import dynamic from "next/dynamic";
import { MobileNav } from "./nav/MobileNav";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import { useState } from "react";

const Projects = dynamic(
  () => import("./projects/Projects").then((mod) => mod.Projects),
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

const About = dynamic(
  () => import("./about/About").then((mod) => mod.About),
  { ssr: false }
);

const Contact = dynamic(
  () => import("./contact/Contact").then((mod) => mod.Contact),
  { ssr: false }
);

export const HomPage = () => {

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen md:flex">
      <main className="relative z-0 min-w-0 flex-1">
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

