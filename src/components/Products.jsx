import { PRODUCTS } from "../data/siteData.js";
import CTAButton from "./CTAButton.jsx";

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-md">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          {product.tagline}
        </p>
        <h3 className="mt-1.5 text-lg font-bold text-slate-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-slate-900">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm font-medium text-slate-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        <CTAButton
          variant="ghost"
          className="mt-4 w-full px-4 py-2.5 text-sm"
        >
          Request a Price
        </CTAButton>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Devices Built for Every Lifestyle"
          subtitle="From flagship powerhouses to budget-friendly favorites — explore the Smart Mobile lineup."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
