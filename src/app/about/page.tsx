import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="about" className="relative z-10">
        <section id="about" className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#e6dcff] to-[#d7c8ff]">
          <div className="max-w-3xl mx-auto">
            
            {/* Section Header with Personality */}
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

            {/* Bio with Personal Touch */}
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
              
              <div className="bg-white p-4 md:p-5 rounded-lg border-l-4 border-[#5a1fa5] shadow-sm">
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

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}