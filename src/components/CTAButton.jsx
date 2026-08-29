import { GOOGLE_FORM_URL } from "../data/siteData.js";

/**
 * CTAButton — reusable call-to-action button.
 * Opens the Google Form (GOOGLE_FORM_URL) in a new browser tab.
 */
export default function CTAButton({
  children = "Order Now",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
    "transition-all duration-300 focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-brand-400 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5",
    outline:
      "border-2 border-white/80 text-white hover:bg-white hover:text-brand-700",
    ghost:
      "border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
  };

  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`${children} — opens order form in a new tab`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z" />
        <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z" />
      </svg>
    </a>
  );
}
