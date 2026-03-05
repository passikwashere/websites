import Navigation from "@/components/Navigation";
import AmbientGlow from "@/components/AmbientGlow";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import LatestRelease from "@/components/LatestRelease";
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
        <LatestRelease />
        <NatureLiveSets />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
