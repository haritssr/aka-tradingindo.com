import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../../translation";
import DarkModeButton from "../../components/DarkModeButton";

export default function gambier() {
  const memperbesar = function () {
    let yes = document.getElementById("gambar");
    let oke = yes.addEventListener("onclick", function () {
      return yes.classList("max-w-3xl mx-auto h-100");
    });
    return oke;
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-medium text-base text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white  rounded-md  py-1 px-2   ";
  return (
    <div className="min-h-screen mx-auto">
      {/* <Nav title="Gambier | AKA Trading Indo"></Nav> */}
      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 blur shadow-lg md:px-10 dark:bg-gray-comp ">
        <Head>
          <title>Gambier | AKA Trading Indonesia</title>
          <link rel="icon" href="/logo.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="flex flex-col items-center rounded-lg lg:justify-between lg:flex-row">
          <div className="flex flex-row items-center justify-between w-full lg:w-1/3">
            <div className="flex items-center w-40 h-14">
              <Link href="/">
                <Image
                  className="p-2 cursor-pointer"
                  src="/IMG_2685.PNG"
                  width={2245}
                  height={913}
                  priority
                />
              </Link>
            </div>

            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block lg:hidden"
              >
                <svg
                  className="w-10 h-10 dark:text-white text-green-1000"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={` ${
              !isOpen ? "hidden" : "block"
            } lg:flex flex-col lg:flex-row lg:justify-around lg:w-2/3 w-full  items-center `}
          >
            <div className="m-5 ml-0 lg:m-1">
              <Link href="/">
                <a className={ya}>{t.nav.home}</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/about">
                <a className={ya}>{t.nav.about}</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/product">
                <a className={ya}>{t.nav.product}</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/team">
                <a className={ya}>{t.nav.team}</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/contact">
                <a className={ya}>{t.nav.contact}</a>
              </Link>
            </div>
            <div>
              <div className="inline-block">
                <button
                  className={ya}
                  onClick={() => {
                    router.push("/productPage/gambier", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={ya}
                  onClick={() =>
                    router.push("/productPage/gambier", "/", { locale: "ID" })
                  }
                >
                  ID
                </button>
              </div>
            </div>
            {/* dark-mode */}
            <DarkModeButton />
          </div>
        </div>

        {/* {props.children} */}
      </section>

      <div className="grid grid-cols-1 p-5 pt-24 space-y-3 md:pt-20 md:m-5 md:grid-cols-2 md:space-y-0">
        <div className="h-auto space-y-3 md:p-5 md:px-0">
          <Image
            className="w-full h-auto transform rounded-xl hover:scale-150"
            src="/gambir1.jpg"
            width={1080}
            height={805}
            priority
          />

          <div id="gambar" onClick={memperbesar}>
            <Image
              className="w-full h-auto transform rounded-xl hover:scale-150"
              src="/gambir2.jpg"
              width={1080}
              height={805}
            />
          </div>
        </div>
        <div className="text-gray-900 md:p-5">
          <div className="pl-3 mt-4 mb-2 text-2xl font-bold border-l-4 border-black md:mt-0 md:mb-5 md:text-4xl">
            Gambier (Uncaria Gambir)
          </div>
          <p className="">
            {t.gambier.description}
            <br />
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.CatechinContent}
            </span>
            {t.gambier.isiCatechinContent}
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.Industry}
            </span>
            {t.gambier.isiIndustry}
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.ScientificName}
            </span>
            {t.gambier.isiScientificName}
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.PlaceOfOrigin}
            </span>
            {t.gambier.IsiPlaceOfOrigin}
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.ExtractionType}
            </span>
            {t.gambier.isiExtractionType}
            <br />
            <span className="font-semibold text-gray-800">
              {t.gambier.HSCode}
            </span>
            {t.gambier.isiHSCode}
          </p>

          <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row justify-start font-semibold">
              <Link href="/productPage/candlenut">
                <a className="px-4 py-2 mr-5 font-semibold text-gray-400 border-2 border-gray-400 rounded-md hover:text-gray-700 hover:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/productPage/candlenut">
                <a className="px-4 py-2 mr-5 font-semibold text-gray-400 border-2 border-gray-400 rounded-md hover:text-gray-700 hover:border-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <Link href="/contact">
              <a className="py-2 px-6 hover:shadow-xl hover:bg-opacity-90 bg-green-1000  text-white rounded-md font-semibold   transform hover:-translate-y-1">
                {t.order}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
