import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="mx-auto dark:bg-gray-bkg">
      <Nav title="AKA Trading Indonesia" />
      <Hero />
      <div className="h-40"></div>
      <Footer />
    </main>
  );
};

export default Home;
