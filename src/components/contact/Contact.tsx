import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import TerminalContact from "./TerminalContact";


export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <div className="mt-0 md:mt-8">
            <TerminalContact />
          </div>
          <div className="w-full text-center mb-0 md:mb-8">
            <span className="text-zinc-700 text-sm">© 2011 - 2026 Kelly Núñez. Todos los derechos reservados.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
