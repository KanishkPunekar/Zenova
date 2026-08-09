import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Icon from "./Icon";
import { Logo } from "./Logo";
import { contact, navLinks } from "../data/company";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page behind the drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    [
      "relative py-2 font-display text-[1.05rem] font-semibold uppercase tracking-wide transition-colors",
      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand-500 after:transition-transform",
      isActive
        ? "text-brand-600 after:scale-x-100"
        : "text-ink-700 after:scale-x-0 hover:text-ink-900 hover:after:scale-x-100",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip: the fastest ways to reach the company. */}
      <div className="hidden border-b border-ink-100 bg-ink-50 text-ink-600 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-sm">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-brand-500" />
            Karad Industrial Area, Maharashtra · Hubballi, Karnataka
          </p>
          <div className="flex items-center gap-6">
            <a
              className="flex items-center gap-2 transition-colors hover:text-ink-900"
              href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            >
              <Icon name="phone" className="h-4 w-4 text-brand-500" />
              {contact.phones[0]}
            </a>
            <a
              className="flex items-center gap-2 transition-colors hover:text-ink-900"
              href={`mailto:${contact.emails[0].address}`}
            >
              <Icon name="mail" className="h-4 w-4 text-brand-500" />
              {contact.emails[0].address}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-ink-100 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="Zenova KSK home">
            <Logo className="h-9 sm:h-10" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact#enquiry" className="btn-primary hidden text-sm sm:inline-flex">
              Request a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink-200 text-ink-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-ink-100 py-4 font-display text-xl font-semibold uppercase tracking-wide ${
                    isActive ? "text-brand-600" : "text-ink-900"
                  }`
                }
              >
                {link.label}
                <Icon name="arrowRight" className="h-5 w-5 text-ink-300" />
              </NavLink>
            ))}

            <div className="mt-6 space-y-3">
              <Link to="/contact#enquiry" className="btn-primary w-full">
                Request a Quote
              </Link>
              <a
                href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
                className="btn-outline w-full"
              >
                <Icon name="phone" className="h-4 w-4" />
                {contact.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
