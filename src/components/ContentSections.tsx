// components/ContentSections.tsx
"use client";

import Link from "next/link";

export default function ContentSections() {
  return (
    <div className="relative">
      {/* ============================== */}
      {/* 2. Opening Reflection */}
      {/* ============================== */}
      <section className="py-20 px-4 max-w-4xl mx-auto relative z-10">
        {/* Decorative section header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/40"></div>
            <span className="handwritten text-sm uppercase tracking-wider text-[#5a1fa5]">01 / reflection</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#5a1fa5]/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#111821] serif-italic">
            the weight of creation
          </h2>
          <div className="w-16 h-0.5 bg-[#5a1fa5]/30 mx-auto mt-4"></div>
        </div>

        <div className="animate-paper-unfold">
          <p className="text-xl md:text-2xl text-[#111821]/80 leading-relaxed">
            For a lot of creators, the hardest part isn’t creating.
            <br />
            <br />
            It’s existing outside of it. You start tying your worth to how your work
            is received. You feel pressure to constantly show up, perform, prove
            something. And slowly, the line between who you are and what you do
            starts to blur.
            <br />
            <br />
            With a background in psychology and a deep interest in the inner lives
            of creatives, I focus on how identity, performance, and emotional
            experience intersect.
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* 3. What This Is */}
      {/* ============================== */}
      <section className="py-16 px-4 max-w-4xl mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-[#e2d9f5] transition-all duration-300 hover:shadow-hover">
          {/* Decorative section header inside card */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/40"></div>
              <span className="handwritten text-xs uppercase tracking-wider text-[#5a1fa5]">02 / purpose</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#5a1fa5]/40"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-[#111821]">
              what this space holds
            </h2>
            <div className="w-12 h-0.5 bg-[#5a1fa5]/30 mx-auto mt-3"></div>
          </div>
          <p className="max-w-2xl mx-auto text-[#111821]/70 leading-relaxed text-center">
            This is a space for creators who want to understand themselves beyond
            their work. Not through surface-level advice, but by exploring the
            patterns, emotions, and identity beneath it.
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* 4. What You’ll Find Here */}
      {/* ============================== */}
      <section className="py-16 px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/40"></div>
            <span className="handwritten text-sm uppercase tracking-wider text-[#5a1fa5]">03 / offerings</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#5a1fa5]/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#111821] serif-italic">
            what you'll find here
          </h2>
          <div className="w-16 h-0.5 bg-[#5a1fa5]/30 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "introspective insights", icon: "🌱" },
            { title: "emotional pattern decoding", icon: "🔍" },
            { title: "one-on-one reflective sessions", icon: "💬" },
            { title: "a space that feels like yours", icon: "🏡" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-[#e2d9f5] group"
            >
              <div className="text-3xl mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <p className="text-[#111821] font-light group-hover:text-[#5a1fa5] transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== */}
      {/* 5. Services Preview */}
      {/* ============================== */}
      <section className="py-16 px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/40"></div>
            <span className="handwritten text-sm uppercase tracking-wider text-[#5a1fa5]">04 / ways to work</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#5a1fa5]/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#111821] serif-italic">
            step into your own scene
          </h2>
          <div className="w-16 h-0.5 bg-[#5a1fa5]/30 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "reflection sessions",
              desc: "one-on-one conversations to explore what you've been feeling",
              icon: "🗣️",
            },
            {
              title: "emotional mapping",
              desc: "understanding patterns you keep returning to",
              icon: "🧭",
            },
            {
              title: "inner clarity work",
              desc: "making sense of thoughts that feel too layered",
              icon: "✨",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-[#e2d9f5] group"
            >
              <div className="text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-xl mb-4 text-[#5a1fa5] font-medium group-hover:text-[#4a1a8c] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#111821]/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/sessions"
            className="inline-block px-8 py-3 bg-[#5a1fa5] text-white rounded-full hover:bg-[#4a1a8c] transition-all duration-300 shadow-sm hover:shadow-md text-sm tracking-wide"
          >
            view sessions →
          </Link>
        </div>
      </section>

      {/* ============================== */}
      {/* 7. Closing Line */}
      {/* ============================== */}
      <section className="py-24 px-4 text-center max-w-3xl mx-auto relative z-10">
        <div className="animate-paper-unfold">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/40"></div>
              <span className="handwritten text-sm uppercase tracking-wider text-[#5a1fa5]">05 / invitation</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#5a1fa5]/40"></div>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-[#111821]/80 italic leading-relaxed">
            Because at some point, the question isn’t just what you’re creating.
            <br />
            It’s who you are when you’re not.
          </p>
          <div className="mt-10">
            <Link
              href="/booking"
              className="inline-block px-8 py-3 bg-[#5a1fa5] text-white rounded-full hover:bg-[#4a1a8c] transition-all duration-300 shadow-sm hover:shadow-md text-sm tracking-wide"
            >
              book a session
            </Link>
          </div>
        </div>
      </section>

      {/* Global styles for animations (matching the hero theme) */}
      <style jsx>{`
        @keyframes paper-unfold {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-paper-unfold {
          animation: paper-unfold 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .shadow-soft {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }
        .shadow-hover {
          box-shadow: 0 20px 30px -12px rgba(90, 31, 165, 0.15);
        }
        .handwritten {
          font-family: 'Nothing You Could Do', cursive;
        }
        .serif-italic {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}