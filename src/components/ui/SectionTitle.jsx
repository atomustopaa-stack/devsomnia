import { cn } from "../../lib/cn";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
  }[align];

  return (
    <div className={cn("max-w-2xl mx-auto", alignClass, className)}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-widest text-black/60">{eyebrow}</div>
      )}
      {title && (
        <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-black/60">{subtitle}</p>
      )}
    </div>
  );
}