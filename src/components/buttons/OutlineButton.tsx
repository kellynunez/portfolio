import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "group relative z-0 flex m-2 px-4 items-center overflow-hidden font-semibold text-[#38FF96] transition-all duration-300 bg-white/10 backdrop-blur-sm min-h-[38px]",
        className
      )}
      {...rest}
    >
      {children}
      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
    </button>
  );
};
