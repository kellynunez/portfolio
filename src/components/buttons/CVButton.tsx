import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FiDownload } from "react-icons/fi";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CVButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "group font-mono relative z-0 flex my-2 px-2 px-4 items-center overflow-hidden font-normal text-zinc-400 transition-all duration-300 bg-white/10 backdrop-blur-sm min-h-[38px]",
        className
      )}
      {...rest}
    >
      {children}
      <FiDownload />
    </button>
  );
};
