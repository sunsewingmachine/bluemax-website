"use client";
// Product image with a styled fallback when bluemax.jpg is not yet in public/.

import Image from "next/image";
import { useState } from "react";

export default function HomeProductImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        id="divProductImagePlaceholder"
        className="flex aspect-4/3 w-full max-w-lg flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-linear-to-br from-blue-50 to-slate-100 p-8 text-center shadow-inner"
        aria-hidden
      >
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700/10">
          <svg
            className="h-10 w-10 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.897 2.897 3 3 0 001.128 5.78 2.25 2.25 0 012.897-2.897m0 0l4.772-4.772m0 0a3 3 0 015.303 5.303L12 12.75V21"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          Add <code className="text-blue-700">public/bluemax.jpg</code> for your
          product photo
        </p>
      </div>
    );
  }

  return (
    <div
      id="divProductImageWrap"
      className="relative aspect-4/3 w-full max-w-lg overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-200/80"
    >
      <Image
        id="imgProductBluemax"
        src="/bluemax.jpg"
        alt="Bluemax sewing machine"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 512px"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}
