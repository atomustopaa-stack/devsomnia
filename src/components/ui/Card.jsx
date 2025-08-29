import { cn } from "../../lib/cn";

export default function Card({ title, description, children, className }) {
  return (
    <div className={cn("rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow", className)}>
      {title || description ? (
        <div className="p-6">
          {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
          {description && <p className="mt-1 text-sm text-black/60">{description}</p>}
        </div>
      ) : null}
      {children && <div className="p-6 pt-0">{children}</div>}
    </div>
  );
}