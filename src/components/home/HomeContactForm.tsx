"use client";
// Contact form UI for the home page (client-side submit feedback until a backend is wired).

import { FormEvent, useState } from "react";
type FormStatus = "idle" | "submitted";

export default function HomeContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        id="divContactSuccess"
        className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center"
        role="status"
      >
        <p className="text-lg font-medium text-green-900">Thank you!</p>
        <p className="mt-2 text-sm text-green-800">
          Your message has been noted. We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      id="formContactUs"
      className="space-y-4"
      onSubmit={handleSubmitContact}
    >
      <div id="divContactFieldName">
        <label htmlFor="inputContactName" className="sr-only">
          Your name
        </label>
        <input
          id="inputContactName"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <div id="divContactFieldEmail">
        <label htmlFor="inputContactEmail" className="sr-only">
          Your email
        </label>
        <input
          id="inputContactEmail"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <div id="divContactFieldMessage">
        <label htmlFor="textareaContactMessage" className="sr-only">
          Your message
        </label>
        <textarea
          id="textareaContactMessage"
          name="message"
          required
          rows={4}
          placeholder="Your message"
          className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <button
        id="buttonContactSubmit"
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
