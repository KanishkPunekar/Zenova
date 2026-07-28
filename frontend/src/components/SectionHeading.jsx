export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const centered = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${isLight ? "text-brand-400" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-2 text-4xl leading-[1.05] sm:text-5xl ${
          isLight ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-0.5 w-16 bg-brand-500 ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            isLight ? "text-ink-300" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
