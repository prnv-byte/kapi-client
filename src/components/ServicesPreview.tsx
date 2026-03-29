import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "reflection sessions",
      desc: "one-on-one conversations to explore what you've been feeling",
    },
    {
      title: "emotional mapping",
      desc: "understanding patterns you keep returning to",
    },
    {
      title: "inner clarity work",
      desc: "making sense of thoughts that feel too layered",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-ink text-center mb-12">
          step into your own scene
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-light text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-ink/60">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/sessions"
            className="inline-block border-b border-purple-deep text-ink hover:text-purple-deep transition-colors"
          >
            view sessions
          </Link>
        </div>
      </div>
    </section>
  );
}