import { Link } from "react-router-dom";

import Icon from "./Icon";
import { LogoDark } from "./Logo";
import { company, contact, navLinks } from "../data/company";
import { products } from "../data/products";

const footerProducts = products.slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="hatch border-b border-white/10">
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
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base tracking-[0.18em] text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-brand-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base tracking-[0.18em] text-white">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerProducts.map((product) => (
                <li key={product.slug}>
                  <Link to="/products" className="transition-colors hover:text-brand-400">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-brand-400 transition-colors hover:text-brand-300"
                >
                  View all {products.length} products
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base tracking-[0.18em] text-white">Reach Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                <span>
                  <span className="block text-white">{contact.factory.label}</span>
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
                      className="block transition-colors hover:text-brand-400"
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
                  className="break-all transition-colors hover:text-brand-400"
                >
                  {contact.emails[0].address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {company.legalName}. All rights reserved.
        </p>
        <p className="text-ink-500">
          Product specifications are indicative — request the technical data sheet
          for project use.
        </p>
      </div>
    </footer>
  );
}
