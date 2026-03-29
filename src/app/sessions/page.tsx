import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingBlock from "@/components/PricingBlock";

export default function SessionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-20">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight">
              These are not therapy sessions.
            </h1>
            <p className="text-lg text-ink/70 mt-4 leading-relaxed">
              They are structured, reflective conversations designed for
              creatives who want to better understand their inner world—
              especially in relation to their work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-ink mb-6">
              what happens in a session
            </h2>
            <ul className="space-y-4 text-ink/80 list-disc pl-5">
              <li>patterns in how you think, feel, and respond</li>
              <li>your relationship with your work and identity</li>
              <li>the emotions that come up when you create (or avoid creating)</li>
              <li>underlying fears, pressure, or expectations</li>
              <li>the gap between who you are and who you feel you need to be</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light text-ink mb-6">
                who this is for
              </h2>
              <ul className="space-y-3 text-ink/80 list-disc pl-5">
                <li>you feel overwhelmed but can’t fully explain why</li>
                <li>you think deeply and feel intensely</li>
                <li>you want clarity, not quick fixes</li>
                <li>you’re ready to understand yourself better</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-light text-ink mb-6">
                what you leave with
              </h2>
              <p className="text-ink/80 italic">
                not perfect answers — <br />
                but clearer thoughts, <br />
                softer emotions, <br />
                and a better understanding of yourself.
              </p>
            </div>
          </div>

          <PricingBlock />

          <div className="text-center pt-8">
            <a href="/booking" className="btn-primary">
              book now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}