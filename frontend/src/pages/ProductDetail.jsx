import { Link, useParams } from "react-router-dom";

import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { contact } from "../data/company";
import {
  categories,
  generalSafety,
  getProduct,
  hasPacking,
  hasTechnical,
  products,
  technicalLabels,
} from "../data/products";

const rangeStyles = {
  Grey: "bg-ink-100 text-ink-700",
  White: "bg-brand-50 text-brand-700",
  "Grey & White": "bg-ink-100 text-ink-700",
  Liquid: "bg-brand-100 text-brand-800",
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <NotFound />;

  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ?? "Products";
  // Same category first, then topped up from the rest so the list is never thin.
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  const related = [...sameCategory, ...others].slice(0, 3);
  const enquiryLink = `/contact?product=${encodeURIComponent(product.name)}#enquiry`;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
        <div className="hatch absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative py-14 sm:py-16">
          <nav
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink-500"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="transition-colors hover:text-brand-600">
              Home
            </Link>
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
            <Link to="/products" className="transition-colors hover:text-brand-600">
              Products
            </Link>
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
            <span className="text-ink-800">{product.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-sm px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.14em] ${
                rangeStyles[product.range] ?? "bg-ink-100 text-ink-700"
              }`}
            >
              {product.range} Range
            </span>
            {product.code && (
              <span className="rounded-sm border border-ink-300 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-800">
                {product.code}
              </span>
            )}
            <span className="text-sm text-ink-500">{categoryLabel}</span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] text-ink-900 sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
            {product.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={enquiryLink} className="btn-primary">
              Request a Quote
            </Link>
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
              className="btn-outline"
            >
              <Icon name="phone" className="h-4 w-4" />
              {contact.phones[0]}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-3xl leading-tight">About this product</h2>
              <span className="mt-4 block h-0.5 w-16 bg-brand-500" aria-hidden="true" />
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                {product.description}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-3xl leading-tight">Key features</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 rounded-sm border border-ink-100 bg-ink-50 p-4 text-[0.95rem] leading-relaxed text-ink-700"
                  >
                    <Icon name="check" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="text-2xl leading-tight">Areas of application</h2>
                  <ul className="mt-5 space-y-2.5 text-ink-700">
                    {product.applications.map((application) => (
                      <li key={application} className="flex gap-3">
                        <Icon
                          name="arrowRight"
                          className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                        />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl leading-tight">Suitable substrates</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {product.substrates.map((substrate) => (
                      <li
                        key={substrate}
                        className="rounded-sm bg-ink-100 px-3 py-1.5 text-sm font-medium text-ink-700"
                      >
                        {substrate}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Technical data — a real table once the TDS values are filled in,
                otherwise an honest "on request" panel. */}
            <Reveal className="mt-12">
              <h2 className="text-3xl leading-tight">Technical data</h2>
              {hasTechnical(product) ? (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <tbody>
                      {product.standard && (
                        <tr className="border-b border-ink-100">
                          <th
                            scope="row"
                            className="w-1/2 py-3.5 pr-4 font-sans text-sm font-medium normal-case tracking-normal text-ink-500"
                          >
                            {technicalLabels.standard}
                          </th>
                          <td className="py-3.5 font-medium text-ink-900">
                            {product.standard}
                          </td>
                        </tr>
                      )}
                      {Object.entries(technicalLabels)
                        .filter(([key]) => key !== "standard" && product.technical?.[key])
                        .map(([key, label]) => (
                          <tr key={key} className="border-b border-ink-100 last:border-0">
                            <th
                              scope="row"
                              className="w-1/2 py-3.5 pr-4 font-sans text-sm font-medium normal-case tracking-normal text-ink-500"
                            >
                              {label}
                            </th>
                            <td className="py-3.5 font-medium text-ink-900">
                              {product.technical[key]}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm text-ink-500">
                    Values are typical and measured under laboratory conditions. Site
                    results vary with temperature, substrate and workmanship.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-sm border border-ink-200 bg-ink-50 p-6 sm:p-7">
                  <Icon name="lab" className="h-7 w-7 text-brand-500" />
                  <h3 className="mt-4 text-xl leading-tight">
                    Technical data sheet on request
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-600">
                    Coverage, pot life, open time, bond strength and pack sizes are
                    issued on the current technical data sheet for this product, so the
                    figures you receive always match the batch you are buying. Ask for
                    it with your enquiry and our team will send it across.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to={enquiryLink} className="btn-dark">
                      Request the data sheet
                    </Link>
                    <a
                      href={`mailto:${contact.emails[0].address}?subject=${encodeURIComponent(
                        `TDS request — ${product.name}`,
                      )}`}
                      className="btn-outline bg-white"
                    >
                      <Icon name="mail" className="h-4 w-4" />
                      Email the technical team
                    </a>
                  </div>
                </div>
              )}
            </Reveal>

            {hasPacking(product) && (
              <Reveal className="mt-12">
                <h2 className="text-3xl leading-tight">Packing &amp; storage</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {product.packing.sizes?.length > 0 && (
                    <div className="card">
                      <Icon name="drum" className="h-7 w-7 text-brand-500" />
                      <h3 className="mt-4 text-xl leading-tight">Available packing</h3>
                      <ul className="mt-3 space-y-1.5 text-ink-700">
                        {product.packing.sizes.map((size) => (
                          <li key={size}>{size}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.packing.shelfLife && (
                    <div className="card">
                      <Icon name="calendar" className="h-7 w-7 text-brand-500" />
                      <h3 className="mt-4 text-xl leading-tight">Shelf life</h3>
                      <p className="mt-3 text-ink-700">{product.packing.shelfLife}</p>
                      <p className="mt-2 text-sm text-ink-500">
                        From the date of manufacture, in unopened bags stored dry.
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            <Reveal className="mt-12">
              <h2 className="text-3xl leading-tight">Handling &amp; safety</h2>
              <ul className="mt-6 space-y-3">
                {generalSafety.map((note) => (
                  <li key={note} className="flex gap-3 leading-relaxed text-ink-600">
                    <Icon name="shield" className="mt-1 h-4.5 w-4.5 shrink-0 text-brand-500" />
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <Reveal>
                <div className="rounded-sm border border-ink-200 bg-white p-7 shadow-lift">
                  <h2 className="text-2xl text-ink-900">Enquire about this product</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    Send us the quantity, your site location and the timeline. We will
                    come back with pricing, the data sheet and a delivery schedule.
                  </p>
                  <Link to={enquiryLink} className="btn-primary mt-6 w-full">
                    Request a Quote
                  </Link>
                  <div className="mt-6 space-y-2.5 border-t border-ink-100 pt-5 text-sm">
                    {contact.phones.slice(0, 2).map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2.5 text-ink-700 transition-colors hover:text-brand-600"
                      >
                        <Icon name="phone" className="h-4 w-4 text-brand-500" />
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`mailto:${contact.emails[0].address}`}
                      className="flex items-center gap-2.5 break-all text-ink-700 transition-colors hover:text-brand-600"
                    >
                      <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-500" />
                      {contact.emails[0].address}
                    </a>
                  </div>
                </div>
              </Reveal>

              {related.length > 0 && (
                <Reveal delay={80}>
                  <div className="rounded-sm border border-ink-100 p-6">
                    <h2 className="text-xl leading-tight">Related products</h2>
                    <ul className="mt-4 divide-y divide-ink-100">
                      {related.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/${item.slug}`}
                            className="group flex items-start justify-between gap-3 py-3.5"
                          >
                            <span>
                              <span className="block font-display text-base font-semibold uppercase tracking-wide text-ink-900 transition-colors group-hover:text-brand-600">
                                {item.name}
                              </span>
                              <span className="mt-0.5 block text-sm text-ink-500">
                                {item.range} range
                              </span>
                            </span>
                            <Icon
                              name="arrowRight"
                              className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-brand-500"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/products"
                      className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
                    >
                      All products
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}
