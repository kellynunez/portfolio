import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";
import { navItems } from "./navItems";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="fixed left-4 top-4 z-50 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/95 px-4 py-3 text-white shadow-2xl shadow-black/30 backdrop-blur-md"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-lg font-black leading-none">
          K<span className="text-[#00FF85]">.</span>
        </span>
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
        </span>
      </button>

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
              className="fixed left-4 top-20 z-50 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-xl font-black leading-none">
                  K<span className="text-[#00FF85]">.</span>
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Menu
                </span>
              </div>

              <nav className="flex flex-col gap-2 p-3">
                {navItems.map((item) => (
                  <SideBarLink
                    key={item.value}
                    selected={selected}
                    setSelected={setSelected}
                    value={item.value}
                    href={item.href}
                    variant="horizontal"
                    onNavigate={() => setOpen(false)}
                  >
                    {item.label}
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
