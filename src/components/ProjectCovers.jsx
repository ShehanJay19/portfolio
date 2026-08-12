// Abstract, deterministic line-art covers — one motif per project, no photography involved.

export function NetworkCover({ className, ...rest }) {
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M28 74 L86 30 L146 52 L172 22" />
        <path d="M86 30 L104 78 L146 52" />
        <path d="M28 74 L104 78" />
      </g>
      <g fill="currentColor">
        <circle cx="28" cy="74" r="3.5" />
        <circle cx="86" cy="30" r="3.5" />
        <circle cx="146" cy="52" r="3.5" />
        <circle cx="172" cy="22" r="3.5" />
        <circle cx="104" cy="78" r="3.5" />
      </g>
    </svg>
  );
}

export function ScanCover({ className, ...rest }) {
  const widths = [120, 84, 150, 60, 132, 96];
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      <g stroke="currentColor" strokeWidth="1.5">
        {widths.map((w, i) => (
          <line key={w + i} x1="20" y1={16 + i * 12} x2={20 + w} y2={16 + i * 12} />
        ))}
      </g>
    </svg>
  );
}

export function RadarCover({ className, ...rest }) {
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      <g stroke="currentColor" strokeWidth="1">
        <circle cx="150" cy="50" r="14" />
        <circle cx="150" cy="50" r="26" />
        <circle cx="150" cy="50" r="38" />
      </g>
      <line x1="150" y1="50" x2="182" y2="26" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

export function BracketsCover({ className, ...rest }) {
  const frame = (x, y, s) => (
    <g key={`${x}-${y}`} stroke="currentColor" strokeWidth="1.5" fill="none">
      <path d={`M${x} ${y + s} V${y} H${x + s}`} />
      <path d={`M${x + s * 2.6} ${y} H${x + s * 3.6} V${y + s}`} />
      <path d={`M${x + s * 3.6} ${y + s * 1.8} V${y + s * 2.8} H${x + s * 2.6}`} />
      <path d={`M${x + s} ${y + s * 2.8} H${x} V${y + s * 1.8}`} />
    </g>
  );
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      {frame(24, 24, 16)}
      {frame(110, 40, 12)}
    </svg>
  );
}

export function ScatterCover({ className, ...rest }) {
  const points = [
    [20, 70], [38, 58], [52, 78], [70, 40], [88, 62], [104, 30],
    [118, 70], [136, 48], [150, 66], [164, 36], [178, 58],
  ];
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      {points.map(([cx, cy], i) => (
        <circle
          key={cx + cy}
          cx={cx}
          cy={cy}
          r={i === 5 ? 4.5 : 2.5}
          fill="currentColor"
          opacity={i === 5 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}

export function MeshCover({ className, ...rest }) {
  const lines = [-40, -20, 0, 20, 40, 60, 80];
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="xMidYMid slice" fill="none" {...rest}>
      <g stroke="currentColor" strokeWidth="1">
        {lines.map((offset) => (
          <line key={offset} x1={offset} y1="0" x2={offset + 100} y2="100" />
        ))}
      </g>
      <circle cx="96" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
