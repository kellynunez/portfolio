import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FiDownload } from "react-icons/fi";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "group relative z-0 flex items-center overflow-hidden font-medium font-jetbrains-mono text-black tracking-wide transition-all duration-300 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 bg-[length:200%_100%] animate-gradient-x border-0 md:border border-black hover:border-black min-h-[30px]",
        className
      )}
      style={{
        animation: "gradient-x 3s ease infinite",
      }}
      {...rest}
    >
      <div className="hover:text-black px-2 bg-white md:bg-white group-hover:bg-zinc-200 md:group-hover:bg-white h-[35px] flex items-center">
        {children}
      </div>
      <div className="px-3 border-l hidden md:flex border-black group-hover:bg-[#00FF85] group-hover:text-black h-[35px] flex items-center">
        <FiDownload />
      </div>
    </button>
  );
};
