// Bluemax Sewing Machines marketing home page.

import HomeContactForm from "@/components/home/HomeContactForm";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeHeader from "@/components/home/HomeHeader";
import HomeProductImage from "@/components/home/HomeProductImage";
import { HOME_BRAND, HOME_CONTACT, HOME_HERO } from "@/data/homeContent";

export default function Home() {
  return (
    <div
      id="divHomePage"
      className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900"
    >
      <HomeHeader />

      <section
        id="sectionHero"
        className="relative overflow-hidden bg-linear-to-br from-blue-800 via-blue-700 to-blue-900 text-white"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
          }}
        />
        <div
          id="divHeroInner"
          className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-200">
            {HOME_BRAND.fullTitle}
          </p>
          <h1
            id="headingHero"
            className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {HOME_HERO.headline}
          </h1>
          <p
            id="paragraphHeroSub"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100"
          >
            {HOME_HERO.subheadline}
          </p>
        </div>
      </section>

      <section
        id="sectionProduct"
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20"
      >
        <div
          id="divProductGrid"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <HomeProductImage />
          <div id="divProductCopy">
            <h2
              id="headingProduct"
              className="text-3xl font-semibold tracking-tight text-slate-900"
            >
              The Bluemax difference
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From garment factories to home studios, Bluemax sewing machines
              deliver the smooth operation and fine control you need for
              professional results — day after day.
            </p>
            <a
              id="linkProductFeatures"
              href="#sectionFeatures"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
            >
              Explore features
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <HomeFeatures />

      <section
        id="sectionContact"
        className="border-t border-slate-200/80 bg-slate-100/80 py-20"
      >
        <div id="divContactInner" className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg sm:p-10">
            <h2
              id="headingContact"
              className="text-2xl font-semibold tracking-tight text-slate-900"
            >
              {HOME_CONTACT.heading}
            </h2>
            <p className="mt-2 text-slate-600">{HOME_CONTACT.description}</p>
            <div id="divContactFormWrap" className="mt-8">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer
        id="footerSite"
        className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500"
      >
        <p>
          © {new Date().getFullYear()} {HOME_BRAND.fullTitle}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
