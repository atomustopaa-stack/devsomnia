import { Star } from "lucide-react";

export default function TestimonialCard({ quote, name, role, avatar, rating = 5 }) {
  return (
    <figure className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
          decoding="async"
          width="48"
          height="48"
        />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-black text-black" />
            ))}
          </div>
          <blockquote className="mt-2 text-sm text-black/80">“{quote}”</blockquote>
          <figcaption className="mt-3 text-sm font-medium">
            {name} <span className="text-black/60 font-normal">— {role}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}