import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contact, googleForm, googleFormUrl } from "../data/company";
import { productNames } from "../data/products";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("product") ?? "";
  const product = productNames.includes(requested) ? requested : "";

  const embedUrl = googleFormUrl({ embedded: true, product });
  const openUrl = googleFormUrl({ product });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Tell us what you are building and where it is. We will come back with product recommendations, pricing and a delivery schedule."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          {/* Direct contact details */}
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Reach us directly" title="Talk to the team" />

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-lg tracking-[0.16em] text-ink-500">Phone</h3>
                <ul className="mt-3 space-y-2">
                  {contact.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 font-display text-xl font-semibold text-ink-900 transition-colors hover:text-brand-600"
                      >
                        <Icon name="phone" className="h-5 w-5 text-brand-500" />
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg tracking-[0.16em] text-ink-500">Email</h3>
                <ul className="mt-3 space-y-2">
                  {contact.emails.map((email) => (
                    <li key={email.address}>
                      <a
                        href={`mailto:${email.address}`}
                        className="flex items-start gap-3 text-ink-700 transition-colors hover:text-brand-600"
                      >
                        <Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                        <span>
                          <span className="block break-all font-medium text-ink-900">
                            {email.address}
                          </span>
                          <span className="text-sm text-ink-500">{email.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {[contact.registeredOffice, contact.factory].map((place) => (
                <div key={place.label}>
                  <h3 className="text-lg tracking-[0.16em] text-ink-500">{place.label}</h3>
                  <address className="mt-3 flex items-start gap-3 not-italic leading-relaxed text-ink-700">
                    <Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                    <span>
                      {place.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </address>
                  <a
                    className="mt-3 ml-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
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
              ))}
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={80} className="lg:col-span-7">
            <div id="enquiry" className="rounded-sm border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <p className="eyebrow">Enquiry form</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Request a quote</h2>
              <p className="mt-3 text-ink-600">
                Fill in the form below and our team will get back to you, usually
                within one working day.
              </p>

              {product && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-3.5 py-2 text-sm text-brand-800">
                  <Icon name="check" className="h-4 w-4 shrink-0" />
                  Enquiring about <strong className="font-semibold">{product}</strong>
                </p>
              )}

              {embedUrl ? (
                <GoogleFormEmbed
                  embedUrl={embedUrl}
                  openUrl={openUrl}
                  height={googleForm.embedHeight}
                />
              ) : (
                <FormNotConnected />
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** The Google Form in an iframe, with a loading state and an escape hatch. */
function GoogleFormEmbed({ embedUrl, openUrl, height }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-7">
      <div className="relative overflow-hidden rounded-sm border border-ink-200 bg-white">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-brand-500" />
            <p className="text-sm text-ink-500">Loading the enquiry form…</p>
          </div>
        )}
        <iframe
          src={embedUrl}
          title="Zenova KSK enquiry form"
          className="w-full"
          style={{ height: `${height}px` }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        >
          Loading…
        </iframe>
      </div>

      <p className="mt-4 text-sm text-ink-500">
        Form not loading?{" "}
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-ink-900 underline decoration-brand-500 decoration-2 underline-offset-2 hover:text-brand-600"
        >
          Open it in a new tab
        </a>{" "}
        or call us on {contact.phones[0]}.
      </p>
    </div>
  );
}

/**
 * Shown until a Google Form id is configured, so the page is never a dead end.
 * See GOOGLE-FORM-SETUP.md.
 */
function FormNotConnected() {
  return (
    <div className="mt-7 rounded-sm border border-dashed border-ink-300 bg-white p-6 sm:p-8">
      <Icon name="mail" className="h-8 w-8 text-brand-500" />
      <h3 className="mt-4 text-2xl leading-tight">Send us your requirement</h3>
      <p className="mt-2 leading-relaxed text-ink-600">
        The online form is being set up. In the meantime, the fastest way to reach
        us is a call or an email — please include the product, quantity and your
        site location.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="btn-primary">
          <Icon name="phone" className="h-4 w-4" />
          {contact.phones[0]}
        </a>
        <a href={`mailto:${contact.emails[0].address}`} className="btn-outline bg-white">
          <Icon name="mail" className="h-4 w-4" />
          Email sales
        </a>
      </div>

      {/* Reminder for whoever is building the site — never shipped to visitors. */}
      {import.meta.env.DEV && (
        <p className="mt-6 border-t border-ink-100 pt-4 text-sm text-ink-500">
          Setting this up? Add your Google Form id to{" "}
          <code className="rounded bg-ink-100 px-1.5 py-0.5 text-ink-700">
            googleForm.formId
          </code>{" "}
          in{" "}
          <code className="rounded bg-ink-100 px-1.5 py-0.5 text-ink-700">
            src/data/company.js
          </code>{" "}
          — see GOOGLE-FORM-SETUP.md.
        </p>
      )}
    </div>
  );
}
