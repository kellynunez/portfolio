import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillSmile, AiFillSetting, AiFillEdit } from "react-icons/ai";

export const Stats2 = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16">
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillSetting className="text-[#4B6E8E] text-2xl" />
              <span className="font-bold ml-2">Entorno y construcción</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip>NodeJS</Chip>
              <Chip>NPM / Yarn</Chip>
              <Chip>Git / GitHub</Chip>
              <Chip>Linux</Chip>
              <Chip>Shopify</Chip>
              <Chip>Wordpress + Woo</Chip>
              <Chip>Webflow</Chip>
              <Chip>Netlify</Chip>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillSmile className="text-[#4B6E8E] text-2xl" />
              <span className="font-bold ml-2">IA y asistentes creativos</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip>Cursor</Chip>
              <Chip>Copilot</Chip>
              <Chip>v0</Chip>
              <Chip>Relume</Chip>
              <Chip>Claude Design</Chip>
              <Chip>Perplexity</Chip>
              <Chip>LLMs</Chip>
              <Chip>Midjourney</Chip>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillEdit className="text-[#4B6E8E] text-2xl" />
              <span className="font-bold ml-2">Productividad y gestión</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
            <Chip>Notion</Chip>
            <Chip>Airtable</Chip>
            <Chip>Confluence</Chip>
            <Chip>Jira</Chip>
            <Chip>ClickUp</Chip>
            <Chip>Trello</Chip>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
