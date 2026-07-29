import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, qualityPractices } from "../data/company";

/**
 * How quality is controlled. The certifications grid appears only when
 * `certifications` in company.js has entries, so the site never implies an
 * approval the company does not hold.
 */
export default function QualitySection() {
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Quality assurance"
            title="How we keep every batch the same"
            description="Consistency is not a claim, it is a set of controls — our own raw material, separate lines for grey and white, automated batching and a lab that checks the result."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPractices.map((practice, index) => (
            <Reveal key={practice.title} delay={index * 60}>
              <div className="card-hover h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-white text-brand-600 shadow-sm">
                  <Icon name={practice.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl leading-tight">{practice.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {practice.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {certifications.length > 0 && (
          <Reveal className="mt-12">
            <h3 className="text-2xl leading-tight">Certifications &amp; approvals</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <li
                  key={certification.name}
                  className="flex items-start gap-4 rounded-sm border border-ink-200 bg-white p-5"
                >
                  <Icon name="shield" className="mt-0.5 h-6 w-6 shrink-0 text-brand-500" />
                  <span>
                    <span className="block font-display text-lg font-semibold uppercase tracking-wide text-ink-900">
                      {certification.name}
                    </span>
                    {certification.detail && (
                      <span className="mt-0.5 block text-sm text-ink-600">
                        {certification.detail}
                      </span>
                    )}
                    {certification.issuer && (
                      <span className="mt-1 block text-sm text-ink-500">
                        {certification.issuer}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
