import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SessionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-4xl mx-auto bg-gradient-to-b from-[#e6dcff] to-[#d7c8ff]">
        <div className="space-y-20">
          {/* Opening */}
          <div className="animate-paper-unfold [animation-delay:200ms]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111821] leading-tight">
              These are not therapy sessions.
            </h1>
            <p className="text-lg text-[#111821]/70 mt-4 leading-relaxed">
              They are structured, reflective conversations designed for
              creatives who want to better understand their inner world—
              especially in relation to their work.
            </p>
          </div>

          {/* What Happens in a Session */}
          <div className="animate-paper-unfold [animation-delay:400ms]">
            <h2 className="text-2xl font-light text-[#111821] mb-6">
              we explore:
            </h2>
            <ul className="space-y-3 text-[#111821]/80 list-disc pl-5">
              <li>patterns in how you think, feel, and respond</li>
              <li>your relationship with your work and identity</li>
              <li>the emotions that come up when you create (or avoid creating)</li>
              <li>underlying fears, pressure, or expectations</li>
              <li>the gap between who you are and who you feel you need to be</li>
            </ul>
          </div>

          {/* Who This Is For + What You Leave With - Two columns */}
          <div className="grid md:grid-cols-2 gap-12 animate-paper-unfold [animation-delay:600ms]">
            <div>
              <h2 className="text-2xl font-light text-[#111821] mb-6">
                who this is for
              </h2>
              <ul className="space-y-3 text-[#111821]/80 list-disc pl-5">
                <li>you feel overwhelmed but can’t fully explain why</li>
                <li>you think deeply and feel intensely</li>
                <li>you want clarity, not quick fixes</li>
                <li>you’re ready to understand yourself better</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-light text-[#111821] mb-6">
                what you leave with
              </h2>
              <p className="text-[#111821]/80 italic leading-relaxed">
                not perfect answers — <br />
                but clearer thoughts, <br />
                softer emotions, <br />
                and a better understanding of yourself.
              </p>
            </div>
          </div>

          {/* Pricing Block */}
          <div className="animate-paper-unfold [animation-delay:800ms]">
            <h2 className="text-2xl font-light text-[#111821] mb-8 text-center">pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-medium text-[#5a1fa5] mb-2">reflection session</h3>
                <p className="text-3xl font-light text-[#111821] mb-4">499rs</p>
                <p className="text-[#111821]/70 text-sm">40 mins</p>
                <div className="w-12 h-px bg-[#5a1fa5]/30 my-4"></div>
                <p className="text-[#111821]/80">a guided conversation into your inner world</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-medium text-[#5a1fa5] mb-2">emotional mapping session</h3>
                <p className="text-3xl font-light text-[#111821] mb-4">699rs</p>
                <p className="text-[#111821]/70 text-sm">60 mins</p>
                <div className="w-12 h-px bg-[#5a1fa5]/30 my-4"></div>
                <p className="text-[#111821]/80">identifying recurring patterns and responses</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pt-8 animate-paper-unfold [animation-delay:1000ms]">
            <a
              href="/booking"
              className="inline-block px-8 py-3.5 bg-[#5a1fa5] text-white rounded-full hover:bg-[#4a1a8c] transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base tracking-wide"
            >
              book now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}