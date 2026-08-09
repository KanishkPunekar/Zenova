import { Link } from "react-router-dom";

import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import QualitySection from "../components/QualitySection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatStrip from "../components/StatStrip";
import { facilities, plantSummary } from "../data/company";

const processSteps = [
  {
    icon: "sand",
    title: "Sand washing & drying",
    body: "Silica sand from our own supply chain is washed, dried and graded at our unit — 10,000 MT a year of controlled raw material.",
  },
  {
    icon: "drum",
    title: "Automated blending",
    body: "Grey products run on a fully automatic 4 MT blender; white products on a separate 2 MT line to protect colour and purity.",
  },
  {
    icon: "lab",
    title: "In-house testing",
    body: "Batches are checked in our fully equipped laboratory before packing, against the same standard every time.",
  },
  {
    icon: "truck",
    title: "Dispatch on own fleet",
    body: "Trucks, hyvas and bulkers we own carry finished material out and raw material in, keeping delivery dates in our control.",
  },
];

const statusStyles = {
  Operational: "bg-green-50 text-green-700 ring-green-200",
  "Started May 2025": "bg-brand-50 text-brand-700 ring-brand-200",
};

export default function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Manufacturing"
        description="Powder and liquid production at Karad Industrial Area, Maharashtra, with a second plant at Hubballi, Karnataka since May 2025."
      />

      {/* Karad summary */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="grid gap-8 rounded-sm border border-ink-100 bg-ink-50 p-8 sm:p-10 lg:grid-cols-3">
              <div>
                <p className="eyebrow">Primary unit</p>
                <h2 className="mt-2 text-3xl leading-tight">{plantSummary.address}</h2>
              </div>
              <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
                <div className="border-l-2 border-brand-500 pl-5">
                  <p className="font-display text-4xl font-semibold leading-none text-ink-900">
                    {plantSummary.capacity}
                  </p>
                  <p className="mt-2 text-sm text-ink-600">Installed plant capacity</p>
                </div>
                <div className="border-l-2 border-ink-300 pl-5">
                  <p className="font-display text-4xl font-semibold leading-none text-ink-900">
                    10,000 MT / year
                  </p>
                  <p className="mt-2 text-sm text-ink-600">
                    Own silica sand washing &amp; drying
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="pb-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Capacity"
              title="Five lines under our control"
              description="Each line is dedicated to a product family, which is how we keep grey and white ranges consistent batch after batch."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {facilities.map((facility, index) => (
              <Reveal key={facility.name} delay={index * 60}>
                <article className="card-hover flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <Icon name="factory" className="h-8 w-8 text-brand-500" />
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                        statusStyles[facility.status] ?? "bg-ink-100 text-ink-700 ring-ink-200"
                      }`}
                    >
                      {facility.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl leading-tight">{facility.name}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
                    <Icon name="pin" className="h-4 w-4" />
                    {facility.location}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-600">{facility.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {facility.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-sm bg-ink-50 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="Raw sand to sealed bag"
              description="Backward integration is the point: the fewer inputs we buy finished, the more of the quality we can guarantee."
            />
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <li className="relative border-t border-ink-200 pt-6">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon name={step.icon} className="mt-4 h-8 w-8 text-brand-600" />
                  <h3 className="mt-4 text-xl leading-tight text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <QualitySection />

      {/* Expansion */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Expansion"
              title="FY 25-26 and beyond"
              description="The Hubballi semi-automatic plant started production in May 2025, adding 4,000 MT per month and bringing supply closer to customers in north Karnataka."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/network" className="btn-outline">
                Delivery network
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link to="/contact#enquiry" className="btn-primary">
                Discuss a supply contract
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-6">
            <div className="space-y-4">
              {[
                { label: "Hubballi, Karnataka", value: "4,000 MT / month", meta: "Semi-automatic · live since May 2025" },
                { label: "Karad grey line", value: "6,000 MT / month", meta: "Fully automatic · 4 MT blender" },
                { label: "Karad white line", value: "3,000 MT / month", meta: "Semi-automatic · 2 MT blender" },
                { label: "Liquid chemicals", value: "1,000 litres / day", meta: "Admixtures, waterproofing, bonding agents" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink-100 pb-4"
                >
                  <div>
                    <p className="font-display text-lg font-semibold uppercase tracking-wide text-ink-900">
                      {row.label}
                    </p>
                    <p className="text-sm text-ink-500">{row.meta}</p>
                  </div>
                  <p className="font-display text-2xl font-semibold text-brand-600">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="container-page mt-14">
          <Reveal>
            <StatStrip />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
