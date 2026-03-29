export default function WhatYouFind() {
  const items = [
    "introspective insights",
    "emotional pattern decoding",
    "one-on-one reflective sessions",
    "a space that feels like yours",
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover p-6 text-center"
          >
            <p className="text-ink font-light text-lg">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}