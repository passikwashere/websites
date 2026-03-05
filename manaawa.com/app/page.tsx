import Navigation from "@/components/Navigation";
import AmbientGlow from "@/components/AmbientGlow";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NatureLiveSets from "@/components/NatureLiveSets";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AmbientGlow />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <NatureLiveSets />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
