import { useState } from "react";
import { CONTACT_INFO } from "../data/siteData.js";

const INFO_ITEMS = [
  {
    icon: "📧",
    label: "Email Us",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: "📞",
    label: "Call Us",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: "📍",
    label: "Visit Us",
    value: CONTACT_INFO.address,
    href: null,
  },
  {
    icon: "🕘",
    label: "Business Hours",
    value: CONTACT_INFO.hours,
    href: null,
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit — wire this up to your form backend or Google Form later.
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Questions about a device, an offer, or an order? Reach out — our
            team typically responds within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info cards */}
          <div className="space-y-5 lg:col-span-2">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-words text-sm text-slate-500 transition-colors hover:text-brand-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Feedback form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <h3 className="text-lg font-bold text-slate-900">Send Feedback</h3>
            <p className="mt-1 text-sm text-slate-500">
              Share a question, comment, or suggestion with our team.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-xl sm:w-auto"
            >
              Send Message
            </button>

            {submitted && (
              <p
                className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                role="status"
              >
                ✅ Thank you! Your message has been received — we'll get back to
                you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
