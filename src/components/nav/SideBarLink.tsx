import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { ComponentType } from "react";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  href: string;
  children: string;
  value: string;
  variant?: "vertical" | "horizontal";
  open?: boolean;
  compactLabel?: string;
  Icon?: ComponentType<{ className?: string }>;
  onNavigate?: () => void;
  className?: string;
}

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
  variant = "vertical",
  open = true,
  compactLabel,
  Icon,
  onNavigate,
  className,
}: Props) => {
  const isVertical = variant === "vertical";
  const baseClassName = isVertical
    ? open
      ? "flex h-11 w-full items-center justify-start gap-3 rounded-md px-4 text-sm font-medium"
      : "flex h-11 w-11 items-center justify-center rounded-md px-0 text-[11px] font-semibold uppercase"
    : "flex w-full items-center justify-center border px-4 py-3 text-center text-md md:text-sm";

  const stateClassName =
    selected === value
      ? "bg-zinc-800 border-[#4B6E8E] opacity-100 text-white"
      : isVertical
        ? "border border-transparent opacity-70 hover:border-zinc-700 hover:bg-zinc-900/80"
        : "border-zinc-800 bg-zinc-900/60 opacity-80 hover:border-zinc-600 hover:bg-zinc-900";

  return (
    <Link
      href={href}
      onClick={() => {
        setSelected(value);
        onNavigate?.();
      }}
      className={twMerge(baseClassName, "transition-all", stateClassName, className)}
    >
      {isVertical ? (
        <>
          {Icon ? (
            <span className="grid size-5 shrink-0 place-content-center overflow-hidden">
              <Icon className="size-4 text-[#4B6E8E]" />
            </span>
          ) : null}
          {open ? <span className="truncate">{children}</span> : null}
        </>
      ) : (
        children
      )}
    </Link>
  );
};
