import Link from "next/link";
import React, { useState } from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiBehance } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiSend } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { navItems } from "./navItems";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-kelly-nunez.pdf";
    link.download = "cv-kelly-nunez.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="sticky top-0 right-0 z-50 flex w-full items-center justify-between bg-transparent text-sm py-1 px-4 md:px-6 md:bg-zinc-900/80 md:backdrop-blur-sm">
      
      {/* 1. Contenedor izquierdo (Botón menú) */}
      <div className="hidden md:flex items-center w-12">
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

      {/* 2. Logo K (Absolutamente centrado respecto a toda la barra) */}
      <button
        type="button"
        aria-label="Ir al inicio"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="absolute hidden md:flex left-1/2 -translate-x-1/2 group flex h-10 items-center bg-transparent text-3xl font-black"
      >
        <span className="text-white group-hover:text-[#38FF96]">K</span>
        <span className="text-[#7C5CFF]">.</span>
      </button>

      {/* 3. Contenedor derecho (Botón Hablemos / Balanceador de espacio) */}
      <div className="flex hidden md:flex items-center justify-end w-auto">
        <OutlineButton 
          className="group flex gap-2" 
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="border-b border-b-transparent group-hover:border-b-zinc-900">Hablemos</span>
        </OutlineButton>
      </div>

    </header>
  );
};

export const MyLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center text-lg gap-4 ${className}`}>
    <Link
      aria-label="LinkedIn de Kelly Núñez"
      title="LinkedIn"
      className="text-zinc-600 hover:text-white transition-colors"
      href="https://www.linkedin.com/in/kellynunezh/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      aria-label="GitHub de Kelly Núñez"
      title="GitHub"
      className="text-zinc-600 hover:text-white transition-colors"
      href="https://github.com/kellynunez"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      aria-label="Behance de Kelly Núñez"
      title="Behance"
      className="text-zinc-600 hover:text-white transition-colors"
      href="https://www.behance.net/kellynunezh"
      target="_blank"
      rel="nofollow"
    >
      <SiBehance />
    </Link>
    <Link
      aria-label="WhatsApp de Kelly Núñez"
      title="WhatsApp"
      className="text-zinc-600 hover:text-white transition-colors"
      href="https://wa.me/51957268339"
      target="_blank"
      rel="nofollow"
    >
      <SiWhatsapp />
    </Link>
    <Link
      aria-label="Instagram de Kelly Núñez"
      title="Instagram"
      className="text-zinc-600 hover:text-white transition-colors"
      href="https://www.instagram.com/kellynunz"
      target="_blank"
      rel="nofollow"
    >
      <SiInstagram />
    </Link>
  </div>
);

const LinksOverlay = ({ onClose, onDownloadCV }: { onClose: () => void; onDownloadCV: () => void }) => {
  return (
    <nav className="grid grid-cols-2 fixed left-4 top-4 z-40 h-[calc(100vh_-_32px)] w-full overflow-hidden flex flex-col justify-between p-6">
      <LinksContainer onClose={onClose} />
      <FooterCTAs onClose={onClose} onDownloadCV={onDownloadCV} />
    </nav>
  );
};

const LinksContainer = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div className="space-y-5 pt-16 pl-2">
      <motion.button
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.6, duration: 0.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, y: -8 }}
        type="button"
        aria-label="Ir al inicio"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onClose();
        }}
        className="group flex items-center bg-transparent text-3xl font-black leading-none pb-16"
      >
        <span className="text-zinc-100 group-hover:text-white">K</span>
        <span className="text-[#7C5CFF]">.</span>
      </motion.button>

      {navItems.map((l: { label: string; value: string; href: string }, idx: number) => {
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
        style={{ top: 6, left: 16 }}
        className="fixed z-40 bg-gradient-to-br from-zinc-900 to-zinc-900/90 shadow-lg backdrop-blur-md perspective-1000"
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        aria-label={active ? "Cerrar menú" : "Abrir menú"}
        className={`group fixed left-3 top-[1px] z-50 h-12 w-12 bg-transparent transition-all ${
          active ? "rounded-br-xl rounded-tl-xl" : "rounded-xl"
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
      className="flex flex-col pb-6 gap-4 px-10"
    >
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
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "40px",
    height: "40px",
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
      // Cambiamos el + por un - para moverlo hacia la izquierda
      left: "calc(50% - 7px)",
    },
  },
};