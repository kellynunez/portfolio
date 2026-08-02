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
          <span className="text-3xl md:text-5xl text-zinc-100 font-black text-end !leading-tight whitespace-nowrap">
            {title}
            <span className="text-[#ff0099]">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
