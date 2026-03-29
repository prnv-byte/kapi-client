import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 px-4 border-t border-purple-deep/20 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-ink/60 text-sm">a quiet space for your inner world.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://instagram.com/the.scene.within.by.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/60 hover:text-purple-deep text-sm transition-colors"
          >
            instagram
          </a>
          <a
            href="mailto:anushika28@gmail.com"
            className="text-ink/60 hover:text-purple-deep text-sm transition-colors"
          >
            contact
          </a>
          <Link
            href="/booking"
            className="text-ink/60 hover:text-purple-deep text-sm transition-colors"
          >
            book a session
          </Link>
        </div>
        <p className="text-ink/40 text-xs mt-8">
          © {new Date().getFullYear()} The Scene Within
        </p>
      </div>
    </footer>
  );
}