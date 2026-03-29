"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "is this therapy?", 
      a: "no — this is a reflective, insight-based space focused on understanding your inner world." 
    },
    { 
      q: "what if i don't know what to say?", 
      a: "that's completely okay. we'll figure it out together." 
    },
    { 
      q: "do you offer packages?", 
      a: "yes, packages can be discussed after an initial session." 
    },
    { 
      q: "is this confidential?", 
      a: "yes, this space is private, following all APA regulations and ethical guidelines for a therapeutic alliance." 
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 md:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-[#e6dcff] to-[#d7c8ff] overflow-hidden">
      
      {/* Decorative Background Image - Hide on mobile for performance */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none hidden md:flex">
        <img 
          src="/images/image_1d05e4.png" 
          className="w-full h-full object-cover opacity-[0.07] scale-110 grayscale" 
          alt="Decorative Background" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Centered Heading */}
        <div className="flex items-center text-[#b8a2e0] mb-8 md:mb-16">
          <div className="flex-1 border-t border-[#d7c8ff]"></div>
          <h2 className="px-4 md:px-8 text-2xl md:text-3xl lg:text-4xl italic text-[#111821] font-serif text-center">
            Commonly Asked
          </h2>
          <div className="flex-1 border-t border-[#d7c8ff]"></div>
        </div>

        {/* Dropdown Accordion */}
        <div className="space-y-1 md:space-y-2">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-[#d7c8ff]/50 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full py-4 md:py-6 flex justify-between items-center text-left group transition-all"
              >
                <span className="font-serif italic text-base md:text-lg lg:text-xl text-[#111821] group-hover:text-[#5a1fa5] pr-4 md:pr-8">
                  {faq.q}
                </span>
                <span className={`text-xl md:text-2xl text-[#b8a2e0] transform transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === i ? 'max-h-[400px] opacity-100 pb-4 md:pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#111821]/80 leading-relaxed font-serif text-sm md:text-base bg-white/70 shadow-sm p-3 md:p-4 rounded-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}