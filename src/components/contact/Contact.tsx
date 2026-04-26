import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import TerminalContact from "./TerminalContact";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="mt-10">
        <TerminalContact />
      </div>

      <div className="w-full text-center mb-0 md:mb-10">
        <span className="text-zinc-700 text-sm">© 2011 - 2026 Kelly Núñez. Todos los derechos reservados.</span>
      </div>

      {/* Formulario oculto para que Netlify detecte los campos */}
      <form name="contact-customer" data-netlify="true" hidden>
        <input type="email" name="email" />
        <input type="text" name="nombre" />
        <textarea name="comentario"></textarea>
      </form>
    </section>
  );
};
