import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Delivery from "../components/Delivery";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingOrderButton from "../components/FloatingOrderButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Delivery />
        <Offers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingOrderButton />
    </>
  );
}
