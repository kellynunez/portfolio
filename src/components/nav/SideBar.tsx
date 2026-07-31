import { useEffect, useState } from "react";
import { SideBarLink } from "./SideBarLink";
import { navItems } from "./navItems";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-wrapper")
    );

    if (!sections.length) {
      return;
    }

    setSelected(sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setSelected(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.75],
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="no-scrollbar fixed inset-y-0 left-0 z-20 hidden h-screen w-[54px] flex-col items-center overflow-y-scroll bg-zinc-950 md:flex">
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
        K<span className="text-[#00FF85]">.</span>
      </span>
      {navItems.map((item) => (
        <SideBarLink
          key={item.value}
          selected={selected}
          setSelected={setSelected}
          value={item.value}
          href={item.href}
          variant="vertical"
        >
          {item.label}
        </SideBarLink>
      ))}
    </nav>
  );
};
