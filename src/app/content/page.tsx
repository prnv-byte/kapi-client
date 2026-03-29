"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "feeling overwhelmed",
  "emotional burnout",
  "overthinking",
  "self-awareness",
  "relationships & patterns",
];

const contentMap: Record<string, string[]> = {
  "feeling overwhelmed": [
    "The weight of everything all at once—and how to carry it differently.",
    "When your mind feels like a browser with too many tabs open.",
    "It's not that you can't handle it. It's that you shouldn't have to alone.",
  ],
  "emotional burnout": [
    "When giving feels like draining. Recognizing the signs before you're empty.",
    "The quiet exhaustion of always being 'on'.",
    "Burnout isn't just about rest—it's about reconnecting to what matters to you.",
  ],
  overthinking: [
    "The mind that loops. Learning to watch thoughts without being caught in them.",
    "Overthinking is a protective pattern. Understanding why can loosen its grip.",
    "What if nothing goes wrong? A gentle reframe for anxious thoughts.",
  ],
  "self-awareness": [
    "Noticing without judging. The first step to real change.",
    "Who are you when no one is watching?",
    "Self-awareness isn't self-criticism. It's self-understanding.",
  ],
  "relationships & patterns": [
    "The stories we repeat. How early experiences shape how we connect now.",
    "Boundaries as self-respect. Not walls, but doors you choose to open.",
    "Relationships mirror back parts of ourselves we often don't see alone.",
  ],
};

export default function ContentPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-ink">
            thoughts, patterns, and quiet realisations —
            <br />
            in words.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? "bg-purple-deep text-white"
                  : "bg-white/50 text-ink hover:bg-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {contentMap[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6"
            >
              <p className="text-ink/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}