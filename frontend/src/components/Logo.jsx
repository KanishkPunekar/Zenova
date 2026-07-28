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
 * Logo for dark backgrounds: the orange mark sits on its own light tile and the
 * wordmark is set in type, so nothing looks pasted onto the dark panel.
 */
export function LogoDark({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/zenova-mark.png"
        alt=""
        className="h-11 w-11 rounded-sm bg-ink-50 p-1"
        width="69"
        height="69"
      />
      <span className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-white">
        Zenova
        <span className="ml-1.5 text-brand-500">KSK</span>
      </span>
    </div>
  );
}

export default Logo;
