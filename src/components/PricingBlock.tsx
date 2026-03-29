export default function PricingBlock() {
  const plans = [
    {
      name: "reflection session",
      duration: "40mins",
      price: "499rs",
      desc: "a guided conversation into your inner world",
    },
    {
      name: "emotional mapping session",
      duration: "60mins",
      price: "699rs",
      desc: "identifying recurring patterns and responses",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-2xl font-light text-ink">{plan.name}</h3>
          <p className="text-purple-deep text-sm mt-1">{plan.duration}</p>
          <p className="text-3xl font-light mt-4 text-ink">{plan.price}</p>
          <p className="text-ink/60 mt-2">{plan.desc}</p>
        </div>
      ))}
    </div>
  );
}