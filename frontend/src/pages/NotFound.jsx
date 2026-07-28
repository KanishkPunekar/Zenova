import { Link } from "react-router-dom";

import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <section className="bg-ink-900">
      <div className="hatch">
        <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="font-display text-7xl font-semibold text-brand-500">404</p>
          <h1 className="mt-4 text-4xl text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-md text-ink-300">
            The page you are looking for has moved or never existed. Try the product
            catalogue or get in touch with us directly.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
            <Link to="/products" className="btn-ghost-light">
              View products
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
