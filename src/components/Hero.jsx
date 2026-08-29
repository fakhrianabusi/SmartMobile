import CTAButton from "./CTAButton.jsx";

const STATS = [
  { value: "500K+", label: "Happy customers" },
  { value: "120+", label: "Retail stores" },
  { value: "24/7", label: "Support coverage" },
  { value: "4.9★", label: "Average rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 text-white"
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-float-slow absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            New 5G lineup available now
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Future of Mobile,
            <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              In Your Hands.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-100 lg:mx-0">
            Smart Mobile brings you the latest in smart phones, wearables, and
            connected technology — with unbeatable offers and customer support
            that actually cares.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CTAButton className="w-full px-8 py-3.5 text-base sm:w-auto">
              Order Now
            </CTAButton>
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-700 sm:w-auto"
            >
              Explore Products
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-200">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Phone mockup illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -m-8 rounded-[3rem] bg-gradient-to-tr from-cyan-400/30 to-emerald-400/30 blur-2xl" aria-hidden="true" />
            <div className="relative w-56 rounded-[2.5rem] border-4 border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-2xl shadow-black/50 sm:w-64">
              <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/30" aria-hidden="true" />
              <div className="aspect-[9/17] rounded-[1.8rem] bg-gradient-to-br from-brand-500 via-brand-700 to-brand-950 p-5 text-center">
                <div className="mt-8 text-4xl" aria-hidden="true">📱</div>
                <p className="mt-6 text-sm font-bold text-white">Smart Mobile</p>
                <p className="mt-1 text-xs text-brand-200">Apex Pro · 5G</p>
                <div className="mt-6 space-y-2" aria-hidden="true">
                  <div className="h-2 rounded-full bg-white/20" />
                  <div className="h-2 w-3/4 mx-auto rounded-full bg-white/20" />
                  <div className="h-2 w-1/2 mx-auto rounded-full bg-white/20" />
                </div>
                <div className="mt-8 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold text-brand-700">
                  From $999
                </div>
              </div>
              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
