"use client";

export default function About() {
  return (
    <section id="about" className="relative py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#e6dcff] via-[#f0eaff] to-[#d7c8ff] overflow-hidden">
      {/* Background decorative mesh */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#b8a2e0]/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#5a1fa5]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* DECORATIVE LEFT COLUMN – abstract shapes, floating quote, artistic flair */}
          <div className="relative order-2 md:order-1 min-h-[400px] flex flex-col items-center justify-start md:justify-center">
            {/* Floating organic blobs */}
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-[#5a1fa5]/30 to-[#c4b5fd]/20 animate-pulse blur-2xl"></div>
            <div className="absolute bottom-10 right-0 w-56 h-56 rounded-full bg-gradient-to-bl from-[#d9c8ff] to-[#b8a2e0]/40 animate-gentle-float blur-xl"></div>
            
            {/* Dotted decorative line */}
            <svg className="absolute top-1/4 -left-8 w-24 h-24 text-[#5a1fa5]/20" viewBox="0 0 100 100" fill="none">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="30" cy="10" r="2" fill="currentColor" />
              <circle cx="50" cy="10" r="2" fill="currentColor" />
              <circle cx="70" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="30" r="2" fill="currentColor" />
              <circle cx="10" cy="50" r="2" fill="currentColor" />
              <circle cx="10" cy="70" r="2" fill="currentColor" />
              <circle cx="10" cy="90" r="2" fill="currentColor" />
            </svg>

            {/* Main decorative abstract shape */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#e2d9f5] to-[#c4b5fd] shadow-xl flex items-center justify-center animate-gentle-float">
              <div className="w-48 h-48 rounded-full bg-white/40 backdrop-blur-sm"></div>
              <div className="absolute w-32 h-32 rounded-full bg-[#5a1fa5]/20 blur-md"></div>
              <div className="absolute text-[#5a1fa5] font-handwritten text-sm rotate-12">~ feel deeply ~</div>
            </div>

            {/* Floating polaroid note (repositioned to left column) */}
            <div className="absolute -bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/3 rotate-3 z-20">
              <div className="bg-white p-4 rounded-lg shadow-gentle border border-[#e2d9f5] w-44 rotate-[-2deg]">
                <p className="handwritten text-[#5a1fa5] text-sm">"Emotions aren't problems to solve."</p>
                <div className="w-8 h-0.5 bg-[#5a1fa5]/30 my-2"></div>
                <p className="text-xs text-[#111821]/70">they're patterns to understand</p>
              </div>
            </div>

            {/* Small decorative circles */}
            <div className="absolute top-1/3 -right-4 w-12 h-12 rounded-full bg-[#5a1fa5]/10 border border-[#5a1fa5]/20 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-6 h-6 rounded-full bg-[#b8a2e0]/40"></div>
          </div>

          {/* RIGHT COLUMN – Bio text (not centered, left-aligned inside column) */}
          <div className="order-1 md:order-2">
            {/* Section Header */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-[#5a1fa5] to-transparent"></div>
                <span className="handwritten text-base md:text-lg text-[#5a1fa5]">this started with a question</span>
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#111821] mb-3 md:mb-4">
                <span className="serif-italic text-gradient-teal">what do creators do</span><br />
                with everything they feel<br />
                but don't fully understand?
              </h2>
            </div>

            {/* Bio text – intentionally left-aligned, not centered */}
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-base text-[#111821] leading-relaxed">
                i'm not here to give you answers.<br />
                i'm here to sit with you while you find your own.
              </p>
              
              <p className="text-sm md:text-base text-[#111821] leading-relaxed">
                with a background in psychology and a deep curiosity for inner worlds,
                i created this space for people in a public-facing creative field who feel deeply,
                think a lot,
                and often feel a little overwhelmed by both.
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 md:p-5 rounded-lg border-l-4 border-[#5a1fa5] shadow-sm">
                <p className="text-xs md:text-sm text-[#111821] leading-relaxed italic">
                  emotions aren't problems to solve.<br />
                  they're patterns to understand.<br />
                  the more you observe them,<br />
                  the less they control you.
                </p>
              </div>

              <p className="text-sm md:text-base text-[#111821] leading-relaxed">
                this isn't about becoming someone new.<br />
                it's about understanding who you already are.
              </p>
            </div>

            {/* CTA commented out as original */}
          </div>
        </div>
      </div>

      {/* Additional decorative squiggles */}
      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none">
        <svg className="w-full h-full text-[#5a1fa5]/10" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
          <path d="M0 0 L200 40 L400 20 L600 60 L800 30 L1000 50 L1200 10 L1200 120 L0 120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}