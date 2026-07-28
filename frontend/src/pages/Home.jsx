import { Link } from "react-router-dom";

import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatStrip from "../components/StatStrip";
import {
  company,
  facilities,
  marketReach,
  offerings,
  supportingBusiness,
} from "../data/company";
import { products } from "../data/products";

const featured = [
  products.find((p) => p.slug === "tile-adhesive-grey-type-3"),
  products.find((p) => p.slug === "block-jointing-mortar"),
  products.find((p) => p.slug === "ready-mix-plaster"),
  products.find((p) => p.slug === "basic-wall-putty"),
  products.find((p) => p.slug === "micro-concrete"),
  products.find((p) => p.slug === "liquid-construction-chemicals"),
].filter(Boolean);

const nearbyCities = marketReach.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="hatch absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-brand-600/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brand-400">{company.tagline}</p>
            <h1 className="mt-4 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Building materials
              <span className="block text-brand-500">made to perform</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              {company.shortName} manufactures tile adhesives, mortars, plasters,
              putty and construction chemicals at Karad, Maharashtra — backed by
              our own silica sand processing and transport fleet.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact#enquiry" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn-ghost-light">
                Explore Products
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-400">
              <span className="flex items-center gap-2">
                <Icon name="factory" className="h-5 w-5 text-brand-500" />
                2 plants · Karad & Hubballi
              </span>
              <span className="flex items-center gap-2">
                <Icon name="lab" className="h-5 w-5 text-brand-500" />
                In-house testing lab
              </span>
              <span className="flex items-center gap-2">
                <Icon name="truck" className="h-5 w-5 text-brand-500" />
                Own delivery fleet
              </span>
            </div>
          </div>

          {/* Capability panel */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-white/10 bg-white/5 p-7 backdrop-blur">
              <h2 className="text-2xl text-white">Production at a glance</h2>
              <dl className="mt-6 space-y-5">
                {[
                  { label: "Karad plant capacity", value: "1,00,000 MT / annum" },
                  { label: "Grey products (fully automatic)", value: "6,000 MT / month" },
                  { label: "White products (semi-automatic)", value: "3,000 MT / month" },
                  { label: "Hubballi plant, since May 2025", value: "4,000 MT / month" },
                  { label: "Liquid construction chemicals", value: "1,000 litres / day" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink-400">{row.label}</dt>
                    <dd className="shrink-0 font-display text-lg font-semibold text-white">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/manufacturing"
                className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
              >
                See our facilities
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + stats */}
      <section className="border-b border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who we are"
                title="From trader to manufacturer"
              />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-ink-700">{company.intro}</p>
              <p className="mt-5 leading-relaxed text-ink-600">
                {company.introSecondary}
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
              >
                Read our story
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <StatStrip />
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What we bring"
              title="Six things that keep your site moving"
              description="Manufacturing is only half of it. The rest is control over raw material, logistics and testing — so what leaves our plant arrives on time and performs as specified."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <Reveal key={offering.title} delay={index * 60}>
                <div className="card-hover h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
                    <Icon name={offering.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-2xl leading-tight">{offering.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-600">
                    {offering.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Product portfolio"
                title="Fourteen products, one standard"
                description="Grey and white tile adhesives across four types each, mortars, plaster, putty, repair products and liquid chemicals."
              />
              <Link to="/products" className="btn-outline shrink-0">
                All Products
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities + supporting business */}
      <section className="py-20">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Manufacturing"
              title="Plants built for consistency"
              description="Automated blending, a separate white-products line and our own sand processing — every step controlled in house."
            />
            <ul className="mt-9 space-y-4">
              {facilities.slice(0, 4).map((facility) => (
                <li
                  key={facility.name}
                  className="flex items-start gap-4 border-b border-ink-100 pb-4 last:border-0"
                >
                  <Icon name="factory" className="mt-1 h-6 w-6 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="text-xl leading-tight">{facility.name}</h3>
                    <p className="mt-1 text-sm text-ink-600">
                      {facility.highlights.join(" · ")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/manufacturing"
              className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
            >
              Full manufacturing detail
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="rounded-sm bg-ink-900 p-8">
              <p className="eyebrow text-brand-400">Supporting business</p>
              <h3 className="mt-2 text-3xl text-white">
                The trading roots we still run on
              </h3>
              <p className="mt-3 text-ink-300">
                Alongside manufacturing, we continue to supply the raw materials and
                logistics the industry depends on.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {supportingBusiness.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white"
                  >
                    <Icon name={item.icon} className="h-5 w-5 shrink-0 text-brand-500" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reach */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Delivery network"
              title="Karad puts your project within reach"
              align="center"
              description="Our Karad plant sits on the Pune–Bengaluru corridor, 13 km from Karad railway station, within a day's drive of most of western Maharashtra and north Karnataka."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyCities.map((city, index) => (
              <Reveal key={city.city} delay={index * 50}>
                <div className="flex items-center justify-between rounded-sm border border-ink-100 bg-white px-5 py-4">
                  <span className="flex items-center gap-3 font-medium text-ink-900">
                    <Icon name="pin" className="h-5 w-5 text-brand-500" />
                    {city.city}
                  </span>
                  <span className="font-display text-lg font-semibold text-ink-900">
                    {city.km} km
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/network" className="btn-dark">
              See the full network
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Our mission" title="Why we make what we make" />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <blockquote className="border-l-4 border-brand-500 pl-6">
              <p className="font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
                {company.mission}
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {company.values.map((value) => (
                <span
                  key={value.title}
                  className="rounded-sm bg-ink-50 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-ink-700"
                >
                  {value.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
