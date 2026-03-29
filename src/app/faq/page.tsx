"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "is this therapy?",
    a: "no — this is a reflective, insight-based space focused on understanding your inner world.",
  },
  {
    q: "what if i don’t know what to say?",
    a: "that’s completely okay. we’ll figure it out together.",
  },
  {
    q: "do you offer packages?",
    a: "Yes, packages can be discussed after an initial session.",
  },
  {
    q: "is this confidential?",
    a: "yes, this space is private, following all APA regulations and ethical guidelines for a therapeutic alliance.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-ink text-center mb-12">
          frequently asked
        </h1>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-purple-deep/20 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-5 flex justify-between items-center text-left group"
              >
                <span className="text-lg text-ink font-light group-hover:text-purple-deep transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`text-2xl text-purple-deep transition-transform duration-300 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-ink/70">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}