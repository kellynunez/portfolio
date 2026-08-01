import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  href: string;
  children: string;
  value: string;
  variant?: "vertical" | "horizontal";
  onNavigate?: () => void;
  className?: string;
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
  className,
}: Props) => {
  const isVertical = variant === "vertical";
  const baseClassName = isVertical
    ? "writing-vertical h-[110px] w-full shrink-0 flex items-center justify-center border-r-2 text-md md:text-sm font-extralight tracking-light text-center"
    : "flex w-full items-center justify-center border px-4 py-3 text-center text-md md:text-sm";

  const stateClassName =
    selected === value
      ? "bg-zinc-800 border-[#00FF85] opacity-100"
      : isVertical
        ? "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        : "border-zinc-800 bg-zinc-900/60 opacity-80 hover:border-zinc-600 hover:bg-zinc-900";

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
      className={twMerge(baseClassName, "transition-all", stateClassName, className)}
    >
      {children}
    </MotionLink>
  );
};
