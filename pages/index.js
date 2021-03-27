import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero.js";
import Na from "../components/Na";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-bkg">
      <Nav title="AKA Trading Indonesia"></Nav>
      <Hero />
      <Footer />
      {/* <Na>
        <div>
          <div className="inline-block">
            <button
              className="font-semibold text-base text-gray-600  hover:bg-green-1000 hover:text-white rounded-md  py-2 px-3  dark:text-gray-text active:bg-green-1000 active:text-white"
              onClick={() => {
                router.push("/about", "/", { locale: "EN" });
              }}
            >
              EN
            </button>
          </div>
          {`|`}
          <div className="inline-block">
            <button
              className="font-semibold text-base text-gray-600  hover:bg-green-1000 hover:text-white rounded-md  py-2 px-3  dark:text-gray-text active:bg-green-1000 active:text-white"
              onClick={() => router.push("/about", "/", { locale: "ID" })}
            >
              ID
            </button>
          </div>
        </div>
      </Na> */}
    </div>
  );
}
