export default function OrnamentBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="stroke" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity=".35" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity=".15" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => {
          const y = 30 + i * 60;
          return (
            <path key={i} d={`M-50 ${y} C 250 ${y - 40}, 950 ${y + 40}, 1250 ${y}`}
              fill="none" stroke="url(#stroke)" strokeWidth={i % 4 === 0 ? 1.5 : 0.7}/>
          );
        })}
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#ffffff" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#e2f2ff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
