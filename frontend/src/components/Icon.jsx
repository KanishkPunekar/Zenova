/**
 * Small inline icon set drawn with geometric primitives, so the site needs no
 * icon package. Every icon inherits colour via `currentColor`.
 */

const paths = {
  truck: (
    <>
      <rect x="1.5" y="6.5" width="12" height="9" rx="1" />
      <path d="M13.5 9.5h4l4 3.2v2.8h-8z" />
      <circle cx="6" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
      <path d="M8 17.5h7.5M1.5 17.5h2.5M19.5 17.5h2" />
    </>
  ),
  sand: (
    <>
      <path d="M2 18.5h20" />
      <path d="M2 18.5 8.5 8l4 5.5L15 10l7 8.5z" />
      <circle cx="18" cy="5.5" r="2.2" />
    </>
  ),
  flyash: (
    <>
      <path d="M6.5 16.5a3.5 3.5 0 0 1 .4-7 5 5 0 0 1 9.5 1.2 3 3 0 0 1-.4 5.8z" />
      <path d="M7 20h1.5M11 20h2M16 20h1.5" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16 15.2a4.6 4.6 0 0 1 4.5 4.3" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6M10 3v5.2L5.5 17a2.4 2.4 0 0 0 2.1 3.5h8.8a2.4 2.4 0 0 0 2.1-3.5L14 8.2V3" />
      <path d="M7.2 14h9.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-14 1 11-4 15-11 15a5 5 0 0 1-5-1z" />
      <path d="M9 15c2.5-3 5.5-5 9-6" />
    </>
  ),
  plaster: (
    <>
      <path d="M3 13.5 12 4l9 9.5-9 6.5z" />
      <path d="M8 11h8M10 15h4" />
    </>
  ),
  factory: (
    <>
      <path d="M2.5 20.5V10l6 3.5V10l6 3.5V6h7v14.5z" />
      <path d="M2.5 20.5h20M17 10h2.5M17 14h2.5" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2.2 1.6a11 11 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10v-6z" />
      <path d="m8.5 12 2.6 2.6 4.4-5" />
    </>
  ),
  drum: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 2.5S5.5 9.4 5.5 14a6.5 6.5 0 0 0 13 0c0-4.6-6.5-11.5-6.5-11.5z" />
      <path d="M9.2 15.5a2.8 2.8 0 0 0 2.8 2.8" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3.5" width="14" height="13" rx="2.5" />
      <path d="M5 10h14M9 6.5h6" />
      <path d="m7 16.5-2 4M17 16.5l2 4M8.5 20.5h7" />
      <circle cx="9" cy="13.3" r="0.9" />
      <circle cx="15" cy="13.3" r="0.9" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 17.5a6 6 0 1 1 6 0v1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19z" />
      <path d="M10 20.5h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8.5v4a4 4 0 0 0 4 4h5.5" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.6 }) {
  const shape = paths[name];
  if (!shape) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
