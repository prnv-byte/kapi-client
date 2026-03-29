import Link from "next/link";

export default function ClosingLine() {
  return (
    <section className="py-24 px-4 text-center max-w-3xl mx-auto">
      <p className="text-2xl md:text-3xl text-ink/80 italic leading-relaxed">
        Because at some point, the question isn’t just what you’re creating.
        <br />
        It’s who you are when you’re not.
      </p>
      <div className="mt-10">
        <Link href="/booking" className="btn-primary">
          book a session
        </Link>
      </div>
    </section>
  );
}