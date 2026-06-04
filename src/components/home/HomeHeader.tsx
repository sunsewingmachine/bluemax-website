// Site header with Bluemax branding for the home page.

import Link from "next/link";
import { HOME_BRAND } from "@/data/homeContent";

export default function HomeHeader() {
  return (
    <header
      id="headerSite"
      className="sticky top-0 z-50 border-b border-blue-900/10 bg-white/90 backdrop-blur-md"
    >
      <div
        id="divHeaderInner"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          id="linkHeaderBrand"
          href="/"
          className="flex items-baseline gap-2 text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="text-blue-700">{HOME_BRAND.name}</span>
          <span className="text-sm font-normal text-slate-500">
            {HOME_BRAND.tagline}
          </span>
        </Link>
        <nav id="navHeader" className="hidden items-center gap-8 text-sm sm:flex">
          <a
            id="linkNavFeatures"
            href="#sectionFeatures"
            className="text-slate-600 transition-colors hover:text-blue-700"
          >
            Features
          </a>
          <a
            id="linkNavContact"
            href="#sectionContact"
            className="rounded-full bg-blue-700 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-800"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
