import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Props = {
  to: string;
  label: string;
  variant?: "light" | "dark";
};

/**
 * Reusable two-part button: icon block + text block.
 * On hover, the two slide together and the colors invert.
 */
export function SplitButton({ to, label, variant = "dark" }: Props) {
  const base =
    variant === "dark"
      ? "border-border text-foreground"
      : "border-foreground/20 text-background bg-foreground";

  return (
    <Link to={to} className="group inline-flex items-center select-none">
      <span
        className={`grid place-items-center w-11 h-11 rounded-md border ${base} transition-all duration-500 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </span>
      <span
        className={`h-11 inline-flex items-center rounded-md border border-l-0 px-5 text-sm transition-all duration-500 ${base} group-hover:-translate-x-1 group-hover:bg-foreground group-hover:text-background`}
      >
        {label}
      </span>
    </Link>
  );
}
