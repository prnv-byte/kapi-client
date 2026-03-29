import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContentSections from "@/components/ContentSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContentSections />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}