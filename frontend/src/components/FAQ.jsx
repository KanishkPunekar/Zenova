import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/company";

/**
 * Native <details> accordion — keyboard accessible and works without JS,
 * so the answers are always readable and indexable by search engines.
 */
export default function FAQ({ limit }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="border-t border-ink-100 py-20">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we get asked"
            description="If your question is not here, call us — the technical team would rather talk it through than have you order the wrong grade."
          />
        </Reveal>

        <Reveal delay={80} className="lg:col-span-8">
          <div className="divide-y divide-ink-100 border-y border-ink-100">
            {items.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-5 font-display text-xl font-semibold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="mt-1 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <Icon name="close" className="h-5 w-5 rotate-45" />
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl pr-10 leading-relaxed text-ink-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
