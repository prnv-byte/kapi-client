"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "sessions", href: "/sessions" },
    { label: "content", href: "/content" },
    { label: "faq", href: "/faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-light tracking-tight text-ink hover:text-purple-deep transition-colors font-fraunces"
          >
            the scene within
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-ink/70 hover:text-purple-deep transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/booking" className="btn-primary text-sm">
              book a session
            </Link>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "70px" }}
      >
        <div className="flex flex-col items-center gap-6 py-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-ink text-lg py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            book a session
          </Link>
        </div>
      </div>
    </>
  );
}