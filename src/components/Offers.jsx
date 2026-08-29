import { OFFERS, GOOGLE_FORM_URL } from "../data/siteData.js";
import CTAButton from "./CTAButton.jsx";

function OfferCard({ offer }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br ${offer.accent} p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8`}
    >
      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-14 -left-8 h-32 w-32 rounded-full bg-white/10"
        aria-hidden="true"
      />

      <span className="relative inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
        Limited Time
      </span>
      <h3 className="relative mt-4 text-2xl font-extrabold sm:text-3xl">
        {offer.discount}
      </h3>
      <p className="relative mt-1 text-sm font-semibold text-white/85">{offer.title}</p>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/80">
        {offer.description}
      </p>

      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        {offer.code !== "AUTO" && (
          <code className="rounded-lg border border-dashed border-white/50 bg-white/10 px-3 py-1.5 text-sm font-bold tracking-wider">
            {offer.code}
          </code>
        )}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Claim Offer
        </a>
      </div>
    </article>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Current Offers
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Deals You Don't Want to Miss
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Real savings on the devices you love. These promotions are running
            right now — grab them before they're gone.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <CTAButton className="px-8 py-3.5 text-base">
            Order Now &amp; Apply My Deal
          </CTAButton>
          <p className="mt-3 text-xs text-slate-400">
            Mention your promo code in the order form to redeem your offer.
          </p>
        </div>
      </div>
    </section>
  );
}
