import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "group relative z-0 flex m-2 px-4 items-center overflow-hidden font-semibold text-zinc-800 tracking-wide transition-all duration-300 bg-zinc-100 hover:bg-white backdrop-blur-sm min-h-[38px]",
        className
      )}
      {...rest}
    >
      <FaUserAstronaut className="text-zinc-900" />
      {children}
      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
    </button>
  );
};
