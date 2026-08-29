const FEATURES = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "To make cutting-edge mobile technology accessible and affordable for everyone — no jargon, no pressure, just honest advice.",
  },
  {
    icon: "🛠️",
    title: "Expert Support",
    text: "Our certified technicians handle setup, transfers, and repairs in-store, so your new device works perfectly from day one.",
  },
  {
    icon: "💬",
    title: "Always Here",
    text: "24/7 customer support by phone, chat, and email. Real humans, fast answers, and a satisfaction guarantee on every purchase.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                alt="Smart Mobile store team helping a customer"
                loading="lazy"
                className="h-64 w-full rounded-2xl object-cover shadow-lg sm:h-80"
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Latest smart devices on display"
                loading="lazy"
                className="mt-8 h-64 w-full rounded-2xl object-cover shadow-lg sm:h-80"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-700 px-6 py-4 text-center text-white shadow-xl">
              <p className="text-2xl font-extrabold">10+ Years</p>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-200">
                of mobile innovation
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Smart Mobile — Technology With a Human Touch
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Founded with a simple belief: buying a phone should be exciting,
              not confusing. Smart Mobile curates the best devices on the
              market, explains them in plain language, and stands behind every
              sale with industry-leading support.
            </p>

            <div className="mt-8 space-y-5">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-md"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
