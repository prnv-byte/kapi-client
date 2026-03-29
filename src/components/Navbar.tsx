"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem =
  | { label: string; href: string; isPage: true }
  | { label: string; href: string; isPage?: false; anchorId: string };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "/#home", anchorId: "home" },
    { label: "About", href: "/#about", anchorId: "about" },
    { label: "Sessions", href: "/sessions", isPage: true },
    { label: "Content", href: "/content", isPage: true },
    { label: "FAQ", href: "/#faq", anchorId: "faq" },
  ];

  const handleSamePageAnchor = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/#${anchorId}`);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 md:py-4 backdrop-blur-sm bg-[#e6dcff]/95 shadow-soft" 
          : "py-4 md:py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <div className="hidden sm:block">
                <h3 className="font-serif italic text-[#111821] text-lg md:text-xl">THE SCENE WITHIN</h3>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                if ("isPage" in item && item.isPage) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a1fa5] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  );
                } else {
                  // It's an anchor item with anchorId
                  const anchorItem = item as { label: string; href: string; anchorId: string };
                  if (isHomePage) {
                    return (
                      <a
                        key={anchorItem.label}
                        href={anchorItem.href}
                        onClick={(e) => handleSamePageAnchor(e, anchorItem.anchorId)}
                        className="text-sm text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium relative group"
                      >
                        {anchorItem.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a1fa5] group-hover:w-full transition-all duration-300"></span>
                      </a>
                    );
                  } else {
                    return (
                      <Link
                        key={anchorItem.label}
                        href={anchorItem.href}
                        className="text-sm text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium relative group"
                      >
                        {anchorItem.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a1fa5] group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    );
                  }
                }
              })}
              <Link
                href="/booking"
                className="px-5 py-2 md:px-6 md:py-2.5 bg-[#5a1fa5] text-white text-xs uppercase tracking-widest rounded-full hover:bg-[#4a1a8c] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book a Session
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#111821]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden pt-20">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => {
              if ("isPage" in item && item.isPage) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                );
              } else {
                const anchorItem = item as { label: string; href: string; anchorId: string };
                if (isHomePage) {
                  return (
                    <a
                      key={anchorItem.label}
                      href={anchorItem.href}
                      onClick={(e) => {
                        handleSamePageAnchor(e, anchorItem.anchorId);
                        setMobileMenuOpen(false);
                      }}
                      className="text-lg text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium py-2"
                    >
                      {anchorItem.label}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={anchorItem.label}
                      href={anchorItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg text-[#111821] hover:text-[#5a1fa5] transition-colors font-medium py-2"
                    >
                      {anchorItem.label}
                    </Link>
                  );
                }
              }
            })}
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 bg-[#5a1fa5] text-white text-sm uppercase tracking-widest rounded-full hover:bg-[#4a1a8c] transition-all duration-300 hover:shadow-xl mt-4"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </>
  );
}