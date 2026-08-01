import { useEffect, useState } from "react";
import { SideBarLink } from "./SideBarLink";
import { navItems } from "./navItems";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-wrapper"));

    if (!sections.length) {
      return;
    }

    const updateSelectedSection = () => {
      const activationPoint = window.innerHeight * 0.35;

      const activeSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activationPoint && rect.bottom > activationPoint;
        }) ??
        [...sections]
          .reverse()
          .find((section) => section.getBoundingClientRect().top <= activationPoint);

      setSelected(activeSection?.id ?? "");
    };

    updateSelectedSection();

    window.addEventListener("scroll", updateSelectedSection, { passive: true });
    window.addEventListener("resize", updateSelectedSection);

    return () => {
      window.removeEventListener("scroll", updateSelectedSection);
      window.removeEventListener("resize", updateSelectedSection);
    };
  }, []);

  return (
    <nav className="no-scrollbar fixed inset-y-0 left-0 z-20 hidden h-screen w-[54px] flex-col items-center overflow-y-scroll bg-zinc-950 md:flex">
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center mt-4 mb-6">
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
