import React from "react";
import { SideBar } from "./nav/SideBar";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Education } from "./education/Education";
import { Contact } from "./contact/Contact";

export const HomPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[54px_1fr]">
  
  {/* Ocultamos el Sidebar en móvil y lo mostramos en md */}
  <div className="hidden md:block">
    <SideBar />
  </div>

  <main>
    <Header />
    <div className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-4 md:px-8 space-y-32 pb-24">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  </main>

  {/* Opcional: Un menú inferior solo para móviles si el Sidebar es vital */}
  <div className="fixed bottom-0 w-full md:hidden">
    {/* <MobileNav /> */}
  </div>
</div>
  );
};
