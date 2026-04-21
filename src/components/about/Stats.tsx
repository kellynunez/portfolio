import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillLayout } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillLayout className="text-[#00FF85] text-2xl" />
            <span className="font-bold ml-2">Diseño y prototipado</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Figma</Chip>
            <Chip>ProtoPie</Chip>
            <Chip>Storybook</Chip>
            <Chip>LottieFiles</Chip>
            <Chip>Lucidchart</Chip>
            <Chip>Miro</Chip>
            <Chip>Framer</Chip>
            <Chip>Photoshop</Chip>
            <Chip>Illustrator</Chip>
            <Chip>InDesign</Chip>
            <Chip>Premiere</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-[#00FF85] text-2xl" />
            <span className="font-bold ml-2">Lenguajes, estilos y frontend</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Less</Chip>
            <Chip>Sass</Chip>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>PHP</Chip>
            <Chip>NextJS</Chip>
            <Chip>React</Chip>
            <Chip>Vue</Chip>
            <Chip>Vite</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>AnimeJS</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>Shadcn/ui</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
