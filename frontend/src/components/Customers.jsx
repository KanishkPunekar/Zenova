import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { customers } from "../data/company";

/**
 * Every image in src/assets/customers/ is collected at build time and keyed by its
 * filename without the extension. A customer whose `slug` matches gets its logo;
 * one that does not simply shows its name. Nothing to import by hand, and a missing
 * file can never break the build.
 */
const logoModules = import.meta.glob("../assets/customers/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, src]) => [
    path.split("/").pop().replace(/\.(png|jpe?g|webp|svg)$/i, ""),
    src,
  ]),
);

export default function Customers() {
  if (customers.length === 0) return null;

  return (
    <section className="border-y border-ink-100 bg-ink-50 py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Customers"
            align="center"
            title="Companies we supply"
            description="Our materials and manufacturing go to some of the largest names in Indian cement, tiles, sanitaryware and paints."
          />
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {customers.map((customer) => {
              const logo = logos[customer.slug];

              return (
                <li key={customer.slug}>
                  <div className="flex h-full flex-col items-center justify-center gap-4 rounded-sm border border-ink-100 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg sm:p-6">
                    {/* Taller than a wide logo needs, so square-panel marks like
                        Somany, Nippon and Cera — which hit the height limit rather
                        than the width limit — do not read smaller than the rest. */}
                    {logo && (
                      <div className="flex h-16 w-full items-center justify-center sm:h-20">
                        <img
                          src={logo}
                          alt={`${customer.name} logo`}
                          className="max-h-full max-w-[90%] object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="font-display text-sm font-semibold uppercase leading-snug tracking-wide text-ink-600 sm:text-[0.95rem]">
                      {customer.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
