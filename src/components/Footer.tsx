export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#e6dcff] to-[#d7c8ff] pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
        
        {/* Branding / Tagline */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-serif italic text-lg md:text-xl text-[#111821]">a quiet space for your inner world.</h4>
          <p className="text-xs text-[#111821]/70 uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} THE SCENE WITHIN
          </p>
        </div>

        {/* Social & Contact - only icons, no text */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5a1fa5] font-bold">Connect</h4>
          <div className="flex gap-4">
            {/* Instagram Icon */}
            <a 
              href="https://instagram.com/the.scene.within.by.ag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#111821]/70 hover:text-[#5a1fa5] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.159 3.56.599 2.322 1.837.082 4.077.082 8.284.082 12s0 7.923.082 10.163c.082 1.758.524 3.395 1.762 4.633 1.238 1.238 2.875 1.68 4.633 1.762 1.72.082 2.31.082 6.163.082s4.443 0 6.163-.082c1.758-.082 3.395-.524 4.633-1.762 1.238-1.238 1.68-2.875 1.762-4.633.082-1.72.082-2.31.082-6.163s0-4.443-.082-6.163c-.082-1.758-.524-3.395-1.762-4.633C19.84.599 18.203.157 16.445.075 15.165.014 14.756 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Email Icon */}
            <a 
              href="mailto:anushika28@gmail.com" 
              className="text-[#111821]/70 hover:text-[#5a1fa5] transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA / Book a Session */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5a1fa5] font-bold">Begin</h4>
          <div className="flex flex-col gap-1 md:gap-2">
            <a 
              href="/booking" 
              className="inline-block px-6 py-2 bg-[#5a1fa5] text-white text-sm rounded-full hover:bg-[#4a1a8c] transition-all duration-300 shadow-sm hover:shadow-md text-center"
            >
              book a session
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto pt-6 md:pt-8 border-t border-[#5a1fa5]/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p className="text-[10px] text-[#111821]/50 uppercase tracking-widest text-center md:text-left">
          a quiet space for the thoughts you don’t always understand, but feel deeply anyway.
        </p>
        <div className="flex gap-4 md:gap-6 text-[10px] text-[#111821]/50 uppercase tracking-widest">
          <a href="#" className="hover:text-[#5a1fa5] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#5a1fa5] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}