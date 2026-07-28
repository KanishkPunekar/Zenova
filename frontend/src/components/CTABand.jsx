import { Link } from "react-router-dom";

import Icon from "./Icon";
import { contact } from "../data/company";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand-500">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 2px, transparent 2px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-4xl leading-tight text-white sm:text-5xl">
            Planning a project? Let's talk material.
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/90">
            Send us your requirement and our team will come back with product
            recommendations, pricing and a delivery schedule.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Link to="/contact#enquiry" className="btn bg-ink-900 text-white hover:bg-ink-950">
            Request a Quote
          </Link>
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="btn border border-white/60 text-white hover:bg-white/15"
          >
            <Icon name="phone" className="h-4 w-4" />
            {contact.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
