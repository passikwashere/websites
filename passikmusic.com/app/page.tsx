import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import LiveSets from "@/components/LiveSets";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <LiveSets />
        <About />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
