import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { customers } from "../data/company";

/**
 * Customer wall. Renders a logo where one is supplied and sets the company name in
 * type where it is not, so the grid reads as a considered design either way.
 */
export default function Customers({ tone = "light" }) {
  if (customers.length === 0) return null;

  const isLight = tone === "light";

  return (
    <section
      className={`border-y py-20 ${
        isLight ? "border-ink-100 bg-white" : "border-white/10 bg-ink-900"
      }`}
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Customers"
            tone={isLight ? "dark" : "light"}
            align="center"
            title="Companies we supply"
            description="Our materials and manufacturing go to some of the largest names in Indian cement, tiles, sanitaryware and paints."
          />
        </Reveal>

        <Reveal className="mt-12">
          <ul
            className={`grid grid-cols-2 gap-px overflow-hidden rounded-sm sm:grid-cols-3 lg:grid-cols-4 ${
              isLight ? "bg-ink-100" : "bg-white/10"
            }`}
          >
            {customers.map((customer) => (
              <li
                key={customer.name}
                className={`group flex min-h-28 items-center justify-center p-5 text-center transition-colors ${
                  isLight ? "bg-white hover:bg-brand-50" : "bg-ink-900 hover:bg-white/5"
                }`}
              >
                {customer.logo ? (
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-12 w-auto max-w-full opacity-70 transition-opacity group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <span
                    className={`font-display text-lg font-semibold uppercase leading-tight tracking-wide transition-colors sm:text-xl ${
                      isLight
                        ? "text-ink-600 group-hover:text-ink-900"
                        : "text-ink-300 group-hover:text-white"
                    }`}
                  >
                    {customer.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
