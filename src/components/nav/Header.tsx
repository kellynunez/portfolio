import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiGmail, SiWhatsapp, SiBehance, SiPinterest } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="sticky top-0 right-0 z-20 flex w-full items-center justify-between bg-transparent text-sm py-1 px-0 md:px-2 bg-transparent md:bg-zinc-900/80 md:backdrop-blur-sm">
      <button
        type="button"
        aria-label="Ir al inicio"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group hidden md:flex h-10 items-center bg-transparent text-3xl font-black ml-2"
      >
        <span className="text-white group-hover:text-[#38FF96]">K</span>
        <span className="text-[#7C5CFF]">.</span>
      </button>
      <OutlineButton className="group hidden md:flex gap-2" onClick={() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}>
        <span className="border-b border-b-transparent group-hover:border-b-zinc-900">Hablemos</span>
      </OutlineButton>
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
