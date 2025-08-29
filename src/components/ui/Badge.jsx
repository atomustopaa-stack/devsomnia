import { cn } from "../../lib/cn";

const variants = {
  default: "bg-black text-white",
  outline: "border border-black/20 text-black",
  success: "bg-emerald-600 text-white",
  warning: "bg-amber-500 text-black",
};

export default function Badge({ children, variant = "default", className }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}