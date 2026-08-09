import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import TerminalContact from "./TerminalContact";
import { MyLinks } from "../nav/Header";


export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
            <TerminalContact />
        </Reveal>
        <Reveal>
          <div className="mb-6 mt-8 flex justify-center">
            <MyLinks className="gap-4 text-lg" />
          </div>
        </Reveal>
        <Reveal>
          <div className="w-full text-center mb-0 md:mb-8">
            <span className="text-zinc-600 text-sm">© 2026 Kelly Núñez. Todos los derechos reservados.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
