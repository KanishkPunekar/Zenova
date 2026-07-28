import { useEffect, useRef, useState } from "react";

/**
 * Fades its children up the first time they scroll into view.
 * Falls back to visible immediately when IntersectionObserver is unavailable.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);

    // Safety net: never leave content invisible if the observer never fires
    // (very tall viewports, print, crawlers that don't scroll).
    const fallback = setTimeout(() => setShown(true), 1200);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "animate-rise" : "opacity-0"}`}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
