import { Link } from "react-router-dom";

import Icon from "./Icon";

/** Dark banner used at the top of every inner page. */
export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="hatch absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 sm:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-ink-400" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-brand-400">
            Home
          </Link>
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
          <span className="text-ink-200">{title}</span>
        </nav>

        {eyebrow && <p className="eyebrow text-brand-400">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
