import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";

function Home() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-bkg">
      <Nav title="AKA Trading Indonesia"></Nav>
      <Hero />
      <Footer />
    </div>
  );
}

function Hero() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="relative mt-20">
      <img
        src="/z.jpg"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative py-10 bg-gray-900 bg-opacity-40">
        <div className="w-full p-10 sm:max-w-3xl ">
          <div className="mb-4 text-2xl font-medium text-center text-white md:text-5xl md:text-left title-font">
            <p className="leading-normal  font-EBGaramond"> {t.hero}</p>
          </div>
          <div className="mb-2 leading-relaxed text-center text-white md:text-left"></div>
          <div className="text-center text-white md:text-left">----------</div>
          <p className="text-center text-white md:text-left font-EBGaramond">{t.bahan}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
