import { Link } from "react-router-dom";

import Icon from "./Icon";
import Reveal from "./Reveal";
import { contact } from "../data/company";

/** Dealer and distributor appointment — a standard route to market in this trade. */
export default function DealerCTA() {
  return (
    <section className="py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-10 rounded-sm border border-ink-200 bg-white p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Dealers &amp; distributors</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">
                Stock Zenova in your territory
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-600">
                We are appointing dealers and distributors across Maharashtra,
                Karnataka and Goa. With two plants, our own transport fleet and a
                fourteen-product range covering grey, white, repair and liquid
                categories, you can serve a whole site from one supplier.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Full range from one manufacturer",
                  "Delivery on our own vehicles",
                  "Technical support for your customers",
                  "Territory-based appointment",
                ].map((point) => (
                  <li key={point} className="flex gap-2.5 text-[0.95rem] text-ink-700">
                    <Icon name="check" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="rounded-sm bg-ink-50 p-6">
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-ink-900">
                  Talk to the director
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Send your firm name, the territory you cover and the products you
                  want to stock.
                </p>
                <Link to="/contact#enquiry" className="btn-dark mt-5 w-full">
                  Apply to be a dealer
                </Link>
                <a
                  href={`mailto:${contact.emails[1].address}?subject=${encodeURIComponent(
                    "Dealership enquiry",
                  )}`}
                  className="btn-outline mt-3 w-full bg-white"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Email the director
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
