import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpeningReflection from "@/components/OpeningReflection";
import WhatThisIs from "@/components/WhatThisIs";
import WhatYouFind from "@/components/WhatYouFind";
import ServicesPreview from "@/components/ServicesPreview";
import ClosingLine from "@/components/ClosingLine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OpeningReflection />
        <WhatThisIs />
        <WhatYouFind />
        <ServicesPreview />
        <ClosingLine />
      </main>
      <Footer />
    </>
  );
}