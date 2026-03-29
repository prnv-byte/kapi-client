"use client";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Reflection Sessions",
      desc: "Explore what you've been feeling beneath the surface.",
    },
    {
      title: "Emotional Mapping",
      desc: "Understand patterns you keep returning to.",
    },
    {
      title: "Inner Clarity Work",
      desc: "Make sense of layered thoughts.",
    },
  ];

  return (
    <section>
      <h2 className="text-center mb-12">
        Step into your own scene.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="glass p-10 text-center">
            <h3 className="text-xl mb-4">{service.title}</h3>
            <p className="text-ink/70">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/sessions" className="btn-primary">
          View All Sessions
        </Link>
      </div>
    </section>
  );
}