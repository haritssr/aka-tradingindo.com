import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="mx-auto dark:bg-gray-bkg">
      <Nav title="AKA Trading Indonesia"></Nav>
      <Hero />
      <div className="h-40"></div>
      <Footer />
    </main>
  );
}
