export default function Stat({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <div className="text-3xl font-bold leading-none">{value}</div>
      <div className="mt-1 text-sm text-black/60">{label}</div>
      {hint && <div className="mt-2 text-xs text-black/50">{hint}</div>}
    </div>
  );
}