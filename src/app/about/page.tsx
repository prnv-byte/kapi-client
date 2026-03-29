import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-20">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-tight">
              this started with a question —<br />
              what do creators do with everything they feel but don’t fully
              understand?
            </h1>
          </div>

          <div className="space-y-12">
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed">
              i’m not here to give you answers.
              <br />
              i’m here to sit with you while you find your own.
            </p>

            <p className="text-lg text-ink/70 leading-relaxed">
              with a background in psychology and a deep curiosity for inner
              worlds,
              <br />
              i created this space for people in a public-facing creative field
              who feel deeply,
              <br />
              think a lot,
              <br />
              and often feel a little overwhelmed by both.
            </p>
          </div>

          <div className="border-t border-purple-deep/20 pt-12">
            <h2 className="text-2xl md:text-3xl font-light text-ink mb-6">
              philosophy
            </h2>
            <p className="text-lg text-ink/80 italic leading-relaxed">
              emotions aren’t problems to solve.
              <br />
              they’re patterns to understand.
              <br />
              the more you observe them,
              <br />
              the less they control you.
            </p>
          </div>

          <div className="border-t border-purple-deep/20 pt-12">
            <p className="text-xl text-ink/80 font-light italic">
              this isn’t about becoming someone new.
              <br />
              it’s about understanding who you already are.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}