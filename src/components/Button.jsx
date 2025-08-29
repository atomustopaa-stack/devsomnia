export default function Button({ as: Tag = "button", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium shadow-sm hover:shadow transition active:scale-[0.98]";
  const style = "bg-slate-900 text-white";
  return <Tag className={`${base} ${style} ${className}`} {...props} />;
}
