import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "muted" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

export function Button({
  as: As = "button",
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ComponentProps<React.ElementType> & {
  as?: React.ElementType;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:   "bg-white text-slate-950 hover:bg-white/90 shadow-sm",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    muted:     "bg-white/5 text-white/70 hover:bg-white/10",
    outline:   "bg-transparent border border-white/20 text-white hover:bg-white/10",
    ghost:     "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    destructive: "bg-rose-600 text-white hover:bg-rose-700",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-2.5 py-1.5 text-xs rounded-xl",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const v = variant as ButtonVariant;
  const s = size    as ButtonSize;

  return (
    <As className={cn(base, variants[v], sizes[s], className)} {...props}>
      {children}
    </As>
  );
}

export default Button;
