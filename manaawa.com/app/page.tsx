import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedSet from "@/components/FeaturedSet";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedSet />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
