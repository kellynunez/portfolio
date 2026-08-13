import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./navItems";
import { FiArrowRight, FiSend } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";

interface MobileNavProps {
  isModalOpen?: boolean;
}

export const MobileNav= ({ isModalOpen = false }: MobileNavProps) => {
  // Si el modal está abierto, ocultamos todo el menú móvil por completo
  if (isModalOpen) return null;

  const [active, setActive] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-kelly-nunez-product-design-frontend.pdf";
    link.download = "cv-kelly-nunez-product-design-frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="md:hidden">
      {/* Botón hamburguesa y overlay animados */}
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {active && (
          <LinksOverlay 
            onClose={() => setActive(false)} 
            onDownloadCV={handleDownloadCV} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const LinksOverlay = ({ onClose, onDownloadCV }: { onClose: () => void; onDownloadCV: () => void }) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden flex flex-col justify-between p-6">
      <LinksContainer onClose={onClose} />
      <FooterCTAs onClose={onClose} onDownloadCV={onDownloadCV} />
    </nav>
  );
};

const LinksContainer = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div className="space-y-5 pt-16 pl-2">
      {/* Logo K al inicio del menú desplegable con animación */}
      <motion.button
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: -8 }}
        type="button"
        aria-label="Ir al inicio"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onClose();
        }}
        className="group flex items-center bg-transparent text-3xl font-black leading-none"
      >
        <span className="text-zinc-100 group-hover:text-white">K</span>
        <span className="text-[#7C5CFF]">.</span>
      </motion.button>

      {/* Elementos de navegación */}
      {navItems.map((l, idx) => {
        return (
          <NavLink 
            key={l.value} 
            href={l.href} 
            idx={idx} 
            onClick={onClose}
          >
            {l.label}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({ children, href, idx, onClick }: { children: React.ReactNode; href: string; idx: number; onClick: () => void }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      onClick={onClick}
      className="block text-3xl font-semibold text-zinc-100 hover:text-white transition-colors"
    >
      {children}.
    </motion.a>
  );
};

const HamburgerButton = ({ active, setActive }: { active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 0, right: 0 }}
        className="fixed z-10 bg-gradient-to-br from-zinc-900/80 to-zinc-900/80 shadow-lg backdrop-blur-md"
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        aria-label={active ? "Cerrar menú" : "Abrir menú"}
        className={`group fixed right-4 top-0.5 z-50 h-12 w-5 bg-transparent transition-all ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-0.5 w-6 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-0.5 w-6 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-0.5 w-2.5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = ({ onClose, onDownloadCV }: { onClose: () => void; onDownloadCV: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.125, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: 8 }}
      className="flex flex-col pb-6 gap-4"
    >

      {/* Botón Enviar Correo */}
      <a
        href="mailto:kellynunezhu@gmail.com"
        className="group cursor-pointer flex h-[42px] w-full items-center justify-between border border-black bg-[#7C5CFF] px-4 font-medium text-zinc-900 transition-colors hover:bg-[#7C5CFF]/80"
        onClick={() => {
          onClose();
        }}
      >
        <div className="flex items-center gap-2 text-sm tracking-snug font-semibold">
          <FiSend className="text-lg" />
          <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900">Enviar Correo</span>
        </div>
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>

      {/* Botón Descargar CV */}
      <button
        type="button"
        className="group cursor-pointer flex h-[42px] w-full items-center justify-between border border-black bg-[#38FF96] px-4 font-medium text-zinc-900 transition-colors hover:bg-[#38FF96]/80"
        onClick={(e) => {
          e.preventDefault();
          onDownloadCV();
          onClose();
        }}
      >
        <div className="flex items-center gap-2 text-sm tracking-snug font-semibold">
          <FaFileDownload className="text-lg" />
          <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900">Descargar CV</span>
        </div>
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>

    </motion.div>
  );
};

const UNDERLAY_VARIANTS = {
  open: {
    width: "100%",
    height: "100vh",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "55px",
    height: "55px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 7px)",
    },
  },
};