import { stats } from "../data/company";

/** Capacity numbers, straight from the company profile. */
export default function StatStrip({ tone = "light" }) {
  const isLight = tone === "light";

  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-sm lg:grid-cols-4 ${
        isLight ? "bg-ink-100" : "bg-white/10"
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`p-6 sm:p-7 ${isLight ? "bg-white" : "bg-ink-900"}`}
        >
          <dd
            className={`font-display text-4xl font-semibold leading-none sm:text-5xl ${
              isLight ? "text-ink-900" : "text-white"
            }`}
          >
            {stat.value}
          </dd>
          <dd className="mt-1.5 font-display text-sm uppercase tracking-[0.18em] text-brand-600">
            {stat.unit}
          </dd>
          <dt className={`mt-3 text-sm ${isLight ? "text-ink-600" : "text-ink-400"}`}>
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
