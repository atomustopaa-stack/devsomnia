import { cn } from "../../lib/cn";

const base = "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};
const variants = {
  primary: "bg-black text-white hover:bg-black/90",
  secondary: "bg-white text-black border border-black/10 hover:bg-black/5",
  ghost: "bg-transparent hover:bg-black/5",
  link: "bg-transparent underline underline-offset-4 hover:no-underline p-0 h-auto",
};

export default function Button({
  as: Comp = "button",
  children,
  size = "md",
  variant = "primary",
  className,
  ...props
}) {
  return (
    <Comp className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}