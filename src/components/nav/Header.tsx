import Link from "next/link";
import React, { useState } from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiBehance } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiSend } from "react-icons/fi";
import { navItems } from "./navItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "../../i18n/I18nProvider";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const { dictionary } = useI18n();

  return (
    <header className="sticky top-0 right-0 z-30 flex w-full items-center justify-between bg-transparent text-sm py-1 px-4 md:px-6 md:bg-zinc-900 md:backdrop-blur-sm">
      
      {/* 1. Contenedor izquierdo (Botón menú) */}
      <div className="hidden md:flex items-center w-12">
        <HamburgerButton active={active} setActive={setActive} />
        <AnimatePresence>
          {active && (
            <LinksOverlay 
              onClose={() => setActive(false)} 
            />
          )}
        </AnimatePresence>
      </div>

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

      <div className="flex hidden md:flex items-center justify-end w-auto space-x-2 my-1">
        <LanguageSwitcher />
        <button
          type="button"
          aria-label={dictionary.actions.talk}
          title={dictionary.actions.talk}
          className="flex h-8 items-center border border-zinc-700 bg-zinc-900/80 px-2 text-[11px] font-bold tracking-wider text-zinc-400 transition-colors hover:border-[#38FF96] hover:text-white"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FiPhone aria-hidden="true" className="text-sm" />
        </button>
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
      href="https://wa.me/957268339"
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

const LinksOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <nav className="fixed left-0 top-0 z-40 h-[calc(100vh)] w-[100%] md:w-[100%] m-4 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-12 gap-8 bg-zinc-900/80 backdrop-blur-md rounded-lg">
      
      {/* Logo K flotante en la esquina superior izquierda */}
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
        className="absolute top-12 md:left-3 lg:left-2 group flex items-center bg-transparent md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none z-10"
      >
        <span className="text-zinc-100 group-hover:text-white">K</span>
        <span className="text-[#7C5CFF]">.</span>
      </motion.button>

      {/* Columna 1: Links de navegación centrados verticalmente */}
      <LinksContainer onClose={onClose} />

      {/* Columna 2: FooterCTAs */}
      <div className="flex flex-col justify-center h-full">
        <FooterCTAs onClose={onClose} />
      </div>
    </nav>
  );
};

const LinksContainer = ({ onClose }: { onClose: () => void }) => {
  const { dictionary } = useI18n();
  return (
    <motion.div className="flex flex-col justify-center h-full space-y-6 pt-12 md:pt-0">
      <div className="flex flex-col space-y-3 lg:space-y-4">
        {navItems.map((l, idx) => {
          return (
            <div className="ml-4 md:ml-12 lg:ml-20" key={l.value}>
              <NavLink 
                href={l.href} 
                idx={idx} 
                onClick={onClose}
              >
                {dictionary.nav[l.labelKey]}
              </NavLink>
            </div>
          );
        })}
      </div>
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
      className="block md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-zinc-100 hover:text-white transition-colors"
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
        className="fixed z-40 bg-gradient-to-br from-zinc-900 to-zinc-900/90 backdrop-blur-md perspective-1000"
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
          className="absolute block h-0.5 w-5 bg-zinc-700"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-0.5 w-5 bg-zinc-700"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-0.5 w-1.5 bg-zinc-700"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = ({ onClose }: { onClose: () => void }) => {
  const { dictionary } = useI18n();

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

      <a
        href="#projects"
        className="group cursor-pointer flex h-[42px] w-full items-center justify-between border border-black bg-[#38FF96] px-4 font-medium text-zinc-900 transition-colors hover:bg-[#38FF96]/80"
        onClick={() => {
          onClose();
        }}
      >
        <div className="flex items-center gap-2 text-sm tracking-snug font-semibold">
          <FiArrowRight className="text-lg" />
          <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-zinc-900">{dictionary.actions.viewProjects}</span>
        </div>
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>
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