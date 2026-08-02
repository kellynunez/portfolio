import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiGmail, SiWhatsapp, SiBehance, SiPinterest } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="sticky top-0 right-0 z-20 flex h-[72px] w-full items-center justify-end bg-transparent px-6">
  <div className="bg-zinc-900/50 p-2 backdrop-blur-md">
    <OutlineButton 
      className="hidden md:flex" 
      onClick={() => {
        const link = document.createElement('a');
        link.href = "/cv-kellynunez-es.pdf";
        link.download = "cv-kellynunez-es.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      CVitae
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
      className="text-zinc-200 hover:text-[#4B6E8E] transition-colors"
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
