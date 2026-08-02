import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronsLeft, FiChevronsRight, FiLogIn } from "react-icons/fi";
import { SideBarLink } from "./SideBarLink";
import { navItems } from "./navItems";

export const SideBar = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-wrapper"));

    if (!sections.length) {
      return;
    }

    const updateSelectedSection = () => {
      const activationPoint = window.innerHeight * 0.35;
      const isNearPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24;

      const activeSection =
        (isNearPageBottom ? sections[sections.length - 1] : null) ??
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
    <nav
      className="fixed inset-y-0 left-0 z-30 hidden h-screen shrink-0 border-r border-zinc-800 bg-zinc-900 p-2 md:flex"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 border-b border-zinc-800 pb-2">
          <div
            className="flex cursor-pointer items-center justify-between transition-colors"
            onClick={() => setOpen((value) => !value)}
          >
            <div className="flex items-center gap-5">
              {/* Cambiamos 'grid place-content-center' por 'flex items-center' */}
              <div className="flex h-14 pl-4 shrink-0 items-center justify-center text-lg font-black text-[#4B6E8E]">
                <span>K</span>
                <span className="text-[#ff0099]">.</span>
              </div>
              {open && (
                <div>
                  <span className="block text-sm font-medium text-zinc-100">Kelly Núñez</span>
                  <span className="block text-xs text-zinc-400 tracking-snug">Design Engineer</span>
                </div>
              )}
            </div>
            {open && (
              <button
                type="button"
                aria-label="Retract Sidebar"
                title="Retract Sidebar"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(false);
                }}
                className="mr-2 flex h-8 w-4 items-center justify-center text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <FiLogIn className="text-lg rotate-180" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-1 overflow-y-auto pr-1">
          {navItems.map((item) => (
            <SideBarLink
              key={item.value}
              selected={selected}
              setSelected={setSelected}
              value={item.value}
              href={item.href}
              variant="vertical"
              open={open}
              Icon={item.Icon}
              compactLabel={
                item.value === "experience"
                  ? "Ex"
                  : item.value === "education"
                    ? "Ed"
                    : item.label.slice(0, 1)
              }
              className={open ? "justify-start" : "justify-center"}
            >
              {item.label}
            </SideBarLink>
          ))}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 text-zinc-500 hover:text-zinc-100"
        >
          <div className="flex items-center p-2">
            <div className="grid size-10 place-content-center text-md">
              <FiChevronsRight className={open ? "rotate-180" : "rotate-0"} />
            </div>
            {open && <span className="text-xs"></span>}
          </div>
        </button>
      </div>
    </nav>
  );
};
