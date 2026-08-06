import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FaFileDownload } from "react-icons/fa";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CVButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "group relative z-0 flex my-2 px-2 px-4 items-center overflow-hidden font-semibold text-zinc-900 transition-all duration-300 bg-[#7C5CFF] hover:bg-[#7C5CFF]/90 backdrop-blur-sm min-h-[38px]",
        className
      )}
      {...rest}
    >
      <FaFileDownload className="text-zinc-900" />
      {children}
    </button>
  );
};
