import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[1px] bg-zinc-700" />
      <h2>
        <Reveal>
          <span className="text-3xl lg:text-4xl xl:text-5xl text-[#4B6E8E] font-black text-end !leading-tight whitespace-nowrap">
            {title}
            <span className="text-[#ff0099]">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
