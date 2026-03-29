import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light text-ink">
            begin here
          </h1>
          <p className="text-lg text-ink/70 mt-4 max-w-2xl mx-auto">
            take your time filling this out.
            <br />
            there’s no right way to explain what you’re feeling.
          </p>
        </div>

        <div className="glass-card p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrRtHS5Y9E9FmVy7wfIEeGA4lqJfOpVYsbHe5JZTVrrgp3yw/viewform?embedded=true"
            width="100%"
            height="800"
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>

        <p className="text-center text-ink/60 mt-8 italic">
          this is your first step toward clarity.
        </p>
      </main>
      <Footer />
    </>
  );
}