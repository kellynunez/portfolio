import Reveal from "../util/Reveal";
import { Chip } from "../util/Chip";
import { AiFillCode, AiFillLayout, AiFillSmile, AiFillSetting, AiFillEdit  } from "react-icons/ai";
import { MyLinks } from "../nav/Header";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillLayout className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Diseño y prototipado</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Figma</Chip>
            <Chip>Adobe XD</Chip>
            <Chip>Lucidchart</Chip>
            <Chip>Miro</Chip>
            <Chip>Lottie</Chip>
            <Chip>Photoshop</Chip>
            <Chip>Illustrator</Chip>
            <Chip>Premiere</Chip>
            <Chip>Indesign</Chip>
            <Chip>Google Slides</Chip>
            <Chip>Canva</Chip>
            <Chip>CapCut</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillCode className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2">Entorno y desarrollo</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Scss</Chip>
            <Chip>Tailwind</Chip>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>React.js</Chip>
            <Chip>Typescript</Chip>
            <Chip>Vue.js</Chip>
            <Chip>Jekylrb</Chip>
            <Chip>Next.js</Chip>
            <Chip>Nodejs</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>Git/GitHub</Chip>
            <Chip>Netlify</Chip>
            <Chip>Google Analytics</Chip>
            <Chip>Wordpress</Chip>
            <Chip>Shopify</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center text-[#7C5CFF] mb-6">
            <AiFillSmile className="text-lg text-[#38FF96]" />
            <span className="font-bold ml-2 tracking-wide">IA y productividad</span>
          </h4>
          <div className="flex flex-wrap font-mono text-zinc-400 gap-2 mb-6">
            <Chip>Cursor</Chip>
            <Chip>Github Copilot</Chip>
            <Chip>Midjourney</Chip>
            <Chip>Firefly</Chip>
            <Chip>DALL-E</Chip>
            <Chip>LLMs</Chip>
            <Chip>Notion</Chip>
            <Chip>Airtable</Chip>
            <Chip>Confluence</Chip>
            <Chip>Jira</Chip>
            <Chip>ClickUp</Chip>
            <Chip>Trello</Chip>
            <Chip>Slack</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
