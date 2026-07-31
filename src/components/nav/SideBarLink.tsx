import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  href: string;
  children: string;
  value: string;
  variant?: "vertical" | "horizontal";
  onNavigate?: () => void;
}

const MotionLink = motion(Link);

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
  variant = "vertical",
  onNavigate,
}: Props) => {
  const isVertical = variant === "vertical";

  return (
    <MotionLink
      initial={isVertical ? { x: -70 } : { opacity: 0, y: 8 }}
      animate={isVertical ? { x: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: isVertical ? 0.1 : 0 }}
      href={href}
      onClick={() => {
        setSelected(value);
        onNavigate?.();
      }}
      className={`${
        isVertical
          ? "writing-vertical h-24 w-full shrink-0 flex items-center justify-center border-r-2 text-sm"
          : "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm"
      } transition-all ${
        selected === value
          ? "bg-zinc-800 border-[#00FF85] opacity-100"
          : isVertical
            ? "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
            : "border-zinc-800 bg-zinc-900/60 opacity-80 hover:border-zinc-600 hover:bg-zinc-900"
      }`}
    >
      {children}
    </MotionLink>
  );
};
