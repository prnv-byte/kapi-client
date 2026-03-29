export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-ink leading-tight">
          The Scene Within
        </h1>
        <p className="text-xl md:text-2xl text-ink/70 mt-6 max-w-2xl mx-auto">
          a quiet space for the thoughts you don’t always understand,
          <br />
          but feel deeply anyway.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="/about" className="btn-secondary">
            explore your inner world
          </a>
          <a href="/booking" className="btn-primary">
            book a session
          </a>
        </div>
      </div>
    </section>
  );
}