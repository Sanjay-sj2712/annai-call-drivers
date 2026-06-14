import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Drivers from "@/components/Drivers";
import Services from "@/components/Services";
import Tariff from "@/components/Tariff";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConciergeBar from "@/components/ConciergeBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tariff />
        <Drivers />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ConciergeBar />
    </>
  );
}
