// Feature highlights grid for the Bluemax home page.

import { HOME_FEATURES } from "@/data/homeContent";

export default function HomeFeatures() {
  return (
    <section
      id="sectionFeatures"
      className="border-t border-slate-200/80 bg-white py-20"
    >
      <div id="divFeaturesInner" className="mx-auto max-w-6xl px-6">
        <div id="divFeaturesHeader" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Why Bluemax
          </p>
          <h2
            id="headingFeatures"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for precision, made to last
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every detail is designed for professionals who need speed, control,
            and reliability on every project.
          </p>
        </div>

        <ul
          id="listFeatures"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOME_FEATURES.map((feature) => (
            <li
              key={feature.id}
              id={feature.id}
              className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition-shadow hover:shadow-md"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white"
                aria-hidden
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
