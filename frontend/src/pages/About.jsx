import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatStrip from "../components/StatStrip";
import { company, history, offerings, supportingBusiness } from "../data/company";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Zenova KSK"
        description={company.tagline}
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Introduction" title="A manufacturer with a trader's discipline" />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-700">{company.intro}</p>
            <p className="mt-5 leading-relaxed text-ink-600">{company.introSecondary}</p>
            <p className="mt-5 leading-relaxed text-ink-600">
              That history matters. Years of moving cement, sand and flyash taught us
              what a delayed truck costs a site — which is why we kept the fleet, the
              sand washing unit and the raw-material relationships when we moved into
              manufacturing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="History"
              title="How we got here"
              description="From cement transport and silica sand supply to automated powder manufacturing across two states."
            />
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {history.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 80}>
                <li className="relative h-full border-t-2 border-brand-500 pt-6">
                  <span className="absolute -top-2.5 left-0 h-4 w-4 rounded-full border-2 border-brand-500 bg-white" />
                  <p className="font-display text-5xl font-semibold leading-none text-brand-500">
                    {entry.year}
                  </p>
                  <h3 className="mt-4 text-2xl leading-tight">{entry.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-600">{entry.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & values */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Mission & values"
              title="What we hold ourselves to"
              align="center"
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-sm bg-ink-900 p-9 sm:p-12">
              <div className="hatch absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <Icon name="target" className="h-9 w-9 text-brand-500" />
                <p className="mt-6 max-w-4xl font-display text-3xl leading-tight text-white sm:text-4xl">
                  {company.mission}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <div className="card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
                    <Icon name={value.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-2xl leading-tight">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="border-t border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our offerings"
              title="Capabilities behind the bag"
            />
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {offerings.map((offering, index) => (
              <Reveal key={offering.title} delay={index * 50}>
                <div className="flex gap-5">
                  <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white text-brand-600 shadow-sm">
                    <Icon name={offering.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl leading-tight">{offering.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-600">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting business + stats */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Supporting business"
              title="Still supplying the basics"
              description="The businesses we grew up on continue to serve contractors, plants and dealers across the region."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportingBusiness.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-hover flex h-full flex-col items-start gap-4">
                  <Icon name={item.icon} className="h-8 w-8 text-brand-500" />
                  <div>
                    <h3 className="text-xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <StatStrip />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
