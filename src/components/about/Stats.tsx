import Reveal from "../util/Reveal";
import { Chip } from "../util/Chip";
import { AiFillCode, AiFillLayout, AiFillSmile, AiFillSignal, AiFillFire, AiFillProduct, AiFillThunderbolt} from "react-icons/ai";
import { MyLinks } from "../nav/Header";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillLayout className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Diseño UI/UX & Producto</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Figma Avanzado</Chip>
            <Chip>Adobe XD</Chip>
            <Chip>User Research</Chip>
            <Chip>Journey Mapping</Chip>
            <Chip>Design Systems</Chip>
            <Chip>Arquitectura de la Información</Chip>
            <Chip>Prototipado Interactivo</Chip>
            <Chip>Mobile-first</Chip>
            <Chip>Microinteracciones</Chip>
            <Chip>Accesibilidad (WCAG)</Chip>
            <Chip>Photoshop</Chip>
            <Chip>Illustrator</Chip>
            <Chip>Premiere</Chip>
            <Chip>Indesign</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillSignal className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Testing & Validaciones</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Maze</Chip>  
            <Chip>Test A/B</Chip>
            <Chip>Card Sorting</Chip>
            <Chip>Clarity</Chip>
            <Chip>Hotjar</Chip>
            <Chip>GA4</Chip>
            <Chip>Auditorías SEO</Chip>
            <Chip>Performance (Lighthouse)</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillCode className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Desarrollo Frontend</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>React.js</Chip>
            <Chip>Next.js</Chip>
            <Chip>Vue.js</Chip>
            <Chip>JavaScript (ES6+)</Chip>
            <Chip>Typescript</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>Sass</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>HTML5/CSS3</Chip>
            <Chip>APIs REST</Chip>
            <Chip>Storybook</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillThunderbolt className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Herramientas & Despliegue</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Git</Chip>
            <Chip>GitHub</Chip>
            <Chip>Vercel</Chip>
            <Chip>Netlify</Chip>
            <Chip>Vite</Chip>
            <Chip>Webpack</Chip>
            <Chip>Node.js</Chip>
            <Chip>Jekyll</Chip>
            <Chip>CMS/E-commerce (WordPress, Shopify, Sanity)</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillSmile className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2 tracking-wide">Productividad & Agentes IA</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Cursor</Chip>
            <Chip>Github Copilot</Chip>
            <Chip>Claude</Chip>
            <Chip>Midjourney</Chip>
            <Chip>Firefly</Chip>
            <Chip>DALL-E</Chip>
            <Chip>LLMs</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillProduct className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2 tracking-wide">Gestión & Liderazgo</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Project Manager</Chip>
            <Chip>Dirección Creativa</Chip>
            <Chip>Scrum Master</Chip>
            <Chip>Notion</Chip>
            <Chip>Jira</Chip>
            <Chip>Airtable</Chip>
            <Chip>Confluence</Chip>
            <Chip>ClickUp</Chip>
            <Chip>Trello</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
