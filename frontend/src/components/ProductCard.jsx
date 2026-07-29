import { Link } from "react-router-dom";

import Icon from "./Icon";

const rangeStyles = {
  Grey: "bg-ink-100 text-ink-700",
  White: "bg-brand-50 text-brand-700",
  "Grey & White": "bg-ink-100 text-ink-700",
  Liquid: "bg-brand-100 text-brand-800",
};

export default function ProductCard({ product }) {
  return (
    <article className="card-hover group flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`rounded-sm px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.14em] ${
            rangeStyles[product.range] ?? "bg-ink-100 text-ink-700"
          }`}
        >
          {product.range}
        </span>
        <Icon
          name={product.category === "liquid" ? "droplet" : "drum"}
          className="h-6 w-6 text-ink-300 transition-colors group-hover:text-brand-500"
        />
      </div>

      <h3 className="mt-4 text-2xl leading-tight">
        <Link
          to={`/products/${product.slug}`}
          className="transition-colors hover:text-brand-600"
        >
          {product.name}
        </Link>
      </h3>
      {product.code && (
        <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-400">
          {product.code}
        </p>
      )}
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
        {product.summary}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-ink-600">
        {product.applications.map((application) => (
          <li key={application} className="flex gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {application}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-brand-600"
        >
          View details
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
        {/* Carries the product through to the enquiry form. */}
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}#enquiry`}
          className="font-display text-sm font-semibold uppercase tracking-wider text-ink-500 transition-colors hover:text-brand-600"
        >
          Enquire
        </Link>
      </div>
    </article>
  );
}
