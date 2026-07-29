import { useEffect, useState } from "react";

import { contact } from "../data/company";

const PRIMARY_PHONE = contact.phones[0].replace(/\D/g, "");
const WHATSAPP_MESSAGE =
  "Hello Zenova KSK, I would like to enquire about your building materials.";

/**
 * Floating WhatsApp and call buttons — how most enquiries actually arrive in this
 * trade. Appears after a little scrolling so it never covers the hero.
 */
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={`https://wa.me/${PRIMARY_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1EBE5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.5-.73-2.98-1.17-4.85-4.24-5-4.44-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36s.39 0 .56.01c.19.01.44-.07.68.52.24.58.83 2.02.9 2.17.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.19-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.56.34.07.13.07.75-.17 1.43Z" />
        </svg>
      </a>

      <a
        href={`tel:+${PRIMARY_PHONE}`}
        aria-label={`Call us on ${contact.phones[0]}`}
        title={`Call ${contact.phones[0]}`}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-ink-900 text-white shadow-lg transition hover:scale-105 hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M6.5 3h3l1.5 4-2.2 1.6a11 11 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3z" />
        </svg>
      </a>
    </div>
  );
}
