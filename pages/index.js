import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero.js";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-bkg">
      <Nav title="AKA Trading Indonesia"></Nav>
      <Hero />
      <Footer />
    </div>
  );
}
