import Reveal from "../util/Reveal";
import { Chip } from "../util/Chip";
import { AiFillCode, AiFillLayout, AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "../nav/Header";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillLayout className="text-[#4B6E8E] text-2xl" />
            <span className="font-bold ml-2">Diseño y prototipado</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-6 md:mb-16">
            <Chip>Figma</Chip>
            <Chip>Lucidchart</Chip>
            <Chip>Miro</Chip>
            <Chip>LottieFiles</Chip>
            <Chip>Premiere</Chip>
            <Chip>Photoshop</Chip>
            <Chip>Illustrator</Chip>
            <Chip>InDesign</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-[#4B6E8E] text-2xl" />
            <span className="font-bold ml-2">Lenguajes y estilos</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-6 md:mb-16">
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>React</Chip>
            <Chip>NextJS</Chip>
            <Chip>Vue</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>Sass</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>AnimeJS</Chip>
            <Chip>PHP</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
