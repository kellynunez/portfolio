import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OutlineButton } from "../buttons/OutlineButton";
import { SideBarLink } from "./SideBarLink";
import { navItems } from "./navItems";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="md:hidden">
      <div className="fixed inset-x-4 top-4 z-50 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        
        <button
          type="button"
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center bg-transparent text-white"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span
              className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
              }`}
            />
          </span>
        </button>

        <button
          type="button"
          aria-label="Ir al inicio"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex h-10 w-6 items-center justify-center mx-auto bg-transparent text-2xl font-black leading-none text-white"
        >
          K<span className="text-[#00FF85]">.</span>
        </button>

        <OutlineButton
          className="h-9 min-h-0 w-fit justify-center mx-auto flex"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/cv-kellynunez-es.pdf";
            link.download = "cv-kellynunez-es.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          CV
        </OutlineButton>

      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar navegación"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-4 right-4 top-1/4 z-50 mx-auto w-auto max-w-[20rem] overflow-hidden border border-white/10 bg-transparent shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <nav className="flex max-h-[calc(100vh-9rem)] flex-col gap-4 overflow-y-auto p-3">
                {navItems.map((item) => (
                  <SideBarLink
                    key={item.value}
                    selected={selected}
                    setSelected={setSelected}
                    value={item.value}
                    href={item.href}
                    variant="horizontal"
                    onNavigate={() => setOpen(false)}
                    className="justify-center text-center"
                  >
                    {item.value === "experience" ? "Experience" : item.label}
                  </SideBarLink>
                ))}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
