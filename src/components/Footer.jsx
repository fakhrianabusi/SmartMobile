import { NAV_LINKS, CONTACT_INFO, GOOGLE_FORM_URL } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2.5" />
                  <path d="M11 18.5h2" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Smart<span className="text-brand-400">Mobile</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              The latest smart phones and connected technology, honest advice,
              and customer support that never sleeps. Technology with a human
              touch.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-500"
            >
              Order Now
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="break-words transition-colors hover:text-brand-400"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Smart Mobile. All rights reserved.</p>
          <p>Designed with 💙 for smart shoppers.</p>
        </div>
      </div>
    </footer>
  );
}
