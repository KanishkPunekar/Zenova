import { Link } from "react-router-dom";

import Icon from "./Icon";
import { LogoDark } from "./Logo";
import { company, contact, legal, navLinks, social } from "../data/company";
import { products } from "../data/products";

const footerProducts = products.slice(0, 6);

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", path: "M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.6c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58.98-3.02 1.67V8.5H9.9V20h2.94v-6.13c0-1.62.3-2.6 1.83-2.6 1.5 0 1.39 1.4 1.39 2.7V20H20v-6.4Z" },
  { key: "facebook", label: "Facebook", path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.5-.13-2.45 0-4.15 1.5-4.15 4.25V9.9H7.4V13h2.25v8h3.85Z" },
  { key: "instagram", label: "Instagram", path: "M12 4.6c2.4 0 2.68.01 3.63.05.87.04 1.35.19 1.66.31.42.17.72.36 1.03.68.32.31.51.61.68 1.03.12.31.27.79.31 1.66.04.95.05 1.23.05 3.63s-.01 2.68-.05 3.63c-.04.87-.19 1.35-.31 1.66-.17.42-.36.72-.68 1.03-.31.32-.61.51-1.03.68-.31.12-.79.27-1.66.31-.95.04-1.23.05-3.63.05s-2.68-.01-3.63-.05c-.87-.04-1.35-.19-1.66-.31a2.77 2.77 0 0 1-1.03-.68 2.77 2.77 0 0 1-.68-1.03c-.12-.31-.27-.79-.31-1.66C4.61 14.68 4.6 14.4 4.6 12s.01-2.68.05-3.63c.04-.87.19-1.35.31-1.66.17-.42.36-.72.68-1.03.31-.32.61-.51 1.03-.68.31-.12.79-.27 1.66-.31C9.32 4.61 9.6 4.6 12 4.6Zm0 3.65a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 6.19a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88Zm4.78-6.34a.88.88 0 1 1-1.75 0 .88.88 0 0 1 1.75 0Z" },
  { key: "youtube", label: "YouTube", path: "M21.1 8.2s-.18-1.29-.74-1.86c-.71-.74-1.5-.75-1.87-.79C17.15 5.4 12 5.4 12 5.4h-.01s-5.14 0-6.48.15c-.37.04-1.16.05-1.87.79-.56.57-.74 1.86-.74 1.86S2.72 9.72 2.72 11.24v1.42c0 1.52.18 3.04.18 3.04s.18 1.29.74 1.86c.71.74 1.65.71 2.07.79 1.53.14 6.29.15 6.29.15s5.15-.01 6.49-.16c.37-.04 1.16-.05 1.87-.79.56-.57.74-1.86.74-1.86s.18-1.52.18-3.04v-1.42c0-1.52-.18-3.04-.18-3.04ZM10.2 14.4V9.6l4.8 2.41-4.8 2.39Z" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-100 bg-ink-50 text-ink-600">
      {/* Same warm treatment as the hero, flipped, so the page is bookended. */}
      <div className="hatch absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-40 h-[26rem] w-[26rem] rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative border-b border-ink-200">
        <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {company.tagline}. Manufacturing tile adhesives, mortars, plasters,
              putty and construction chemicals from Karad, Maharashtra and
              Hubballi, Karnataka.
            </p>
            <p className="mt-5 font-display text-sm uppercase tracking-[0.18em] text-ink-500">
              Founded {company.founded}
            </p>

            {/* Only profiles with a URL in company.js are shown. */}
            {socialLinks.some((item) => social[item.key]) && (
              <ul className="mt-6 flex items-center gap-3">
                {socialLinks
                  .filter((item) => social[item.key])
                  .map((item) => (
                    <li key={item.key}>
                      <a
                        href={social[item.key]}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={item.label}
                        title={item.label}
                        className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-200 text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-600"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path d={item.path} />
                        </svg>
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base tracking-[0.18em] text-ink-900">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base tracking-[0.18em] text-ink-900">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="transition-colors hover:text-brand-600"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-brand-600 transition-colors hover:text-brand-700"
                >
                  View all {products.length} products
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base tracking-[0.18em] text-ink-900">Reach Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                <span>
                  <span className="block font-medium text-ink-900">{contact.factory.label}</span>
                  {contact.factory.lines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                <span className="space-y-1">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block transition-colors hover:text-brand-600"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${contact.emails[0].address}`}
                  className="break-all transition-colors hover:text-brand-600"
                >
                  {contact.emails[0].address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page relative flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          {/* Statutory identifiers, shown only once filled in. */}
          {(legal.cin || legal.gstin) && (
            <p className="mt-1 text-ink-500">
              {legal.cin && <>CIN: {legal.cin}</>}
              {legal.cin && legal.gstin && " · "}
              {legal.gstin && <>GSTIN: {legal.gstin}</>}
            </p>
          )}
        </div>
        <p className="max-w-md text-ink-500 sm:text-right">
          Product specifications are indicative — request the technical data sheet
          for project use.
        </p>
      </div>
    </footer>
  );
}
