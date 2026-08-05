import React from "react";

export const Chip = ({ children }: { children: string }) => {
  return (
    <span className="text-[0.6rem] md:text-[0.625rem] px-2 py-1 rounded bg-zinc-700/50">{children}</span>
  );
};
