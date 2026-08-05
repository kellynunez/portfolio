import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiGmail, SiWhatsapp, SiBehance, SiPinterest } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="sticky top-0 right-0 z-20 flex w-full items-center justify-end bg-transparent text-[14.5px]">
      <div>
        <OutlineButton className="group hidden md:flex gap-2" onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
          <span className="text-[#7C5CFF] pr-0.5">◉</span>
          <span className="border-b-0 border-transparent group-hover:border-b-[0.1px] group-hover:border-[#38FF96]">Hablemos</span>
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
{/*     <Link
      aria-label="Enviar correo a Kelly Núñez"
      title="Correo"
      className="text-zinc-200 hover:text-[#7C5CFF] transition-colors"
      href="mailto:kellynunezhu@gmail.com"
      rel="nofollow"
    >
      <SiGmail />
    </Link> */}
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
