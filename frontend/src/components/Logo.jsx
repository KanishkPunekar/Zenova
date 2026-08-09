import logo from "../assets/zenova-logo.jpeg";
import { company } from "../data/company";

/** Full logo lockup — for light backgrounds (the artwork has a light plate). */
export function Logo({ className = "h-9" }) {
  return (
    <img
      src={logo}
      alt={`${company.legalName} logo`}
      // The artwork ships on a near-white plate; multiply blends it into the header.
      className={`${className} w-auto mix-blend-multiply`}
      width="300"
      height="75"
    />
  );
}

/**
 * Stacked lockup used in the footer: the orange mark beside a typeset wordmark.
 * Set in ink rather than white, since every surface is now light.
 */
export function LogoDark({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/zenova-mark.png"
        alt=""
        className="h-11 w-11 rounded-sm bg-white p-1 ring-1 ring-ink-100"
        width="69"
        height="69"
      />
      <span className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-ink-900">
        Zenova
        <span className="ml-1.5 text-brand-500">KSK</span>
      </span>
    </div>
  );
}

export default Logo;
