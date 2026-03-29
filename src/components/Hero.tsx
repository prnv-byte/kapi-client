"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [leafCount] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e6dcff] to-[#d7c8ff]">
      {/* Animated Leaves - Reduced on mobile */}
      {Array.from({ length: leafCount }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 pointer-events-none z-0 hidden sm:block"
          style={{
            left: `${(i + 1) * (100 / (leafCount + 1))}%`,
            animation: `leaf-fall ${15 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
            opacity: 0.6 - i * 0.05,
          }}
        >
          <div className="leaf-shape w-6 h-8 sm:w-8 sm:h-12 bg-gradient-to-br from-[#5a1fa5]/30 to-[#b8a2e0]/20 transform -rotate-45"></div>
        </div>
      ))}

      {/* Watercolor Background Blobs - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-16 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 rounded-full mix-blend-multiply opacity-20 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #5a1fa5 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 h-48 sm:w-96 sm:h-96 rounded-full mix-blend-multiply opacity-15 animate-gentle-float"
          style={{ 
            background: 'radial-gradient(circle, #b8a2e0 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Content */}
        <div className="mb-8 sm:mb-12 pt-12 sm:pt-16">
          {/* Organic Divider */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#5a1fa5]/30"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#5a1fa5]/20 animate-pulse"></div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-[#5a1fa5]/30 to-transparent"></div>
          </div>

          {/* Main Heading with Character */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light mb-4 md:mb-6 relative">
            <span className="block serif-italic text-[#111821] animate-paper-unfold [animation-delay:200ms] relative z-10">
              The Scene
            </span>
            <span className="block relative mt-4 sm:mt-6 md:mt-8">
              <span className="bg-gradient-to-r from-[#5a1fa5] to-[#b8a2e0] bg-clip-text text-transparent font-medium animate-ink-spread [animation-delay:600ms] relative z-10 px-1 sm:px-2 py-0.5 sm:py-1 inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Within
              </span>
              <svg 
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 md:w-64 z-0" 
                viewBox="0 0 200 12"
                style={{ transform: `translateX(-50%) translateY(${Math.min(scrollY * 0.1, 20)}px)` }}
              >
                <path 
                  d="M0,6 Q50,0 100,6 T200,6" 
                  fill="none" 
                  stroke="url(#organic-gradient)" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="organic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5a1fa5" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#b8a2e0" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#5a1fa5" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle & CTAs with Personality */}
          <div className="max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-16 animate-paper-unfold [animation-delay:1000ms]">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl serif-italic text-[#111821] mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              a quiet space for the thoughts you don’t always understand,<br className="hidden sm:block" />
              but feel deeply anyway.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="px-8 py-3.5 bg-[#5a1fa5] text-white rounded-full hover:bg-[#4a1a8c] transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base tracking-wide w-full sm:w-auto">
                explore your inner world
              </button>
              <button className="px-8 py-3.5 border border-[#5a1fa5]/40 text-[#5a1fa5] rounded-full hover:bg-[#5a1fa5]/5 transition-all duration-300 text-sm sm:text-base tracking-wide w-full sm:w-auto">
                book a session
              </button>
            </div>
          </div>
        </div>
        
        {/* Photo Grid - Untouched as requested */}
        <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 animate-paper-unfold [animation-delay:1800ms] pb-8 md:pb-12">
          
          {/* Image 1 */}
          <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" 
              alt="Book in grass" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 2 */}
          <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop" 
              alt="Peaceful mind" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 3 */}
          <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" 
              alt="Landscape journey" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 4 */}
          <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=600&auto=format&fit=crop" 
              alt="Cozy comfort" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 5 (White Background & Border) */}
          <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-white border border-[#e2d9f5] p-2 md:p-4 group flex items-center justify-center col-span-2 sm:col-span-1 sm:col-start-2 lg:col-span-1 lg:col-start-auto">
            <img 
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop" 
              alt="Pink flower" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}