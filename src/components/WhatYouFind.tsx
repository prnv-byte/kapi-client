export default function WhatYouFind() {
  const items = [
    "introspective insights",
    "emotional pattern decoding",
    "one-on-one reflective sessions",
    "a space that feels like yours",
  ];

  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="glass p-6 text-center">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}