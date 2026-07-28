import { useMemo, useState } from "react";

import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { categories, products } from "../data/products";

export default function Products() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const map = { all: products.length };
    for (const product of products) {
      map[product.category] = (map[product.category] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title="Products"
        description="Fourteen products across grey and white ranges, mortars, repair materials and liquid chemicals — all manufactured at our own plants."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          {/* Category filter */}
          <div
            className="flex flex-wrap gap-2.5 border-b border-ink-100 pb-8"
            role="group"
            aria-label="Filter products by category"
          >
            {categories.map((category) => {
              const isActive = active === category.id;
              const count = counts[category.id] ?? 0;
              if (!count) return null;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  aria-pressed={isActive}
                  className={`rounded-sm border px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-200 text-ink-700 hover:border-ink-900 hover:text-ink-900"
                  }`}
                >
                  {category.label}
                  <span className={isActive ? "ml-2 text-brand-400" : "ml-2 text-ink-400"}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-ink-500">
            Showing {visible.length} of {products.length} products
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, index) => (
              <Reveal key={product.slug} delay={Math.min(index, 6) * 50}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering / spec note */}
      <section className="border-t border-ink-100 bg-ink-50 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Specifications"
              title="Every order ships with its data sheet"
              description="Application notes on this page are indicative. Coverage, open time, pot life and packing vary by batch and site condition."
            />
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                {
                  icon: "lab",
                  title: "Tested in our own lab",
                  body: "Our Karad unit has a fully equipped laboratory, so batches are checked before they leave the plant.",
                },
                {
                  icon: "drum",
                  title: "Packing to suit the site",
                  body: "Bag sizes and liquid packing can be matched to your project requirement — tell us the volume and schedule.",
                },
                {
                  icon: "truck",
                  title: "Delivered on our own fleet",
                  body: "Trucks, hyvas and bulkers we own, so the delivery date we commit is a date we control.",
                },
                {
                  icon: "bulb",
                  title: "Custom formulations",
                  body: "Our liquid chemicals line runs site-specific formulations on request from the Karad plant.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-5 border-b border-ink-200 pb-5 last:border-0">
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white text-brand-600 shadow-sm">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl leading-tight">{item.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-600">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
