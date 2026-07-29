import CTABand from "../components/CTABand";
import DealerCTA from "../components/DealerCTA";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contact, marketReach, nearestRailway } from "../data/company";

// Single series, one measure — sorted nearest first so the chart reads as a
// distance ranking. One colour for every bar: length already encodes magnitude.
const sorted = [...marketReach].sort((a, b) => a.km - b.km);
const maxKm = Math.max(...sorted.map((c) => c.km));

const logistics = [
  {
    icon: "truck",
    title: "Own fleet",
    body: "Trucks, hyvas and bulkers owned by us — outbound deliveries and inbound raw material both run on our own vehicles.",
  },
  {
    icon: "train",
    title: `${nearestRailway.km} km to rail`,
    body: `${nearestRailway.station} railway station is the nearest railhead to the plant, on the central line through western Maharashtra.`,
  },
  {
    icon: "route",
    title: "On the Pune–Bengaluru corridor",
    body: "Karad sits on NH-48, which puts Pune, Kolhapur, Belgaum and Mumbai within a single day's run.",
  },
  {
    icon: "factory",
    title: "Two production points",
    body: "Karad for Maharashtra and Goa; Hubballi for north Karnataka, live since May 2025.",
  },
];

export default function Network() {
  return (
    <>
      <PageHero
        eyebrow="Delivery network"
        title="Network"
        description={`Our Karad plant serves twelve key markets across Maharashtra, Karnataka, Goa and Gujarat, with ${nearestRailway.station} railway station ${nearestRailway.km} km away.`}
      />

      {/* Distance chart */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Potential market"
              title="Road distance from the Karad factory"
              description="Ten of the twelve markets we serve sit within 300 km of the plant — close enough for same-day or next-day dispatch on our own vehicles."
            />
          </Reveal>

          <Reveal className="mt-12">
            <figure className="rounded-sm border border-ink-100 p-6 sm:p-8">
              <table className="w-full border-collapse">
                <caption className="sr-only">
                  Road distance in kilometres from the Karad plant to each market,
                  nearest first
                </caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Market</th>
                    <th scope="col">Relative distance</th>
                    <th scope="col">Distance in kilometres</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((city) => {
                    const percent = Math.max((city.km / maxKm) * 100, 1.5);
                    return (
                      <tr key={city.city} className="border-b border-ink-100 last:border-0">
                        <th
                          scope="row"
                          className="w-24 py-3.5 pr-4 text-left font-sans text-sm font-medium normal-case tracking-normal text-ink-900 sm:w-32 sm:text-base"
                        >
                          {city.city}
                        </th>
                        <td className="py-3.5">
                          {/* Track shows the 0–750 km span; the fill is the mark. */}
                          <div className="h-2.5 w-full bg-ink-100" aria-hidden="true">
                            <div
                              className="h-2.5 rounded-r-[4px] bg-brand-600"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </td>
                        <td className="w-20 py-3.5 pl-4 text-right font-display text-base font-semibold tabular-nums text-ink-900 sm:w-24 sm:text-lg">
                          {city.km} km
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 pt-4 text-sm text-ink-500">
                <span>Bar length scaled to 0 – {maxKm} km. Distances are approximate road distances.</span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-6 rounded-r-[4px] bg-brand-600" aria-hidden="true" />
                  Distance from Karad
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Logistics */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Logistics"
              title="Why the distances hold up"
              description="Timely delivery was our first business. It still shapes how we ship."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {logistics.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-hover h-full bg-white">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl leading-tight">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DealerCTA />

      {/* Locations */}
      <section className="border-t border-ink-100 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Locations"
              title="Where to find us"
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[contact.factory, contact.registeredOffice].map((place, index) => (
              <Reveal key={place.label} delay={index * 80}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink-900 text-brand-500">
                      <Icon name="pin" className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="eyebrow">{place.label}</p>
                      <address className="mt-2 not-italic leading-relaxed text-ink-700">
                        {place.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      <a
                        className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          place.mapsQuery,
                        )}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Open in Maps
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
