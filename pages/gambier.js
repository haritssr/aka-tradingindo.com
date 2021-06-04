import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import DarkModeButton from "../components/DarkModeButton";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function gambier() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);
  const navigation =
    " text-sm text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-white py-4 font-inter lg:px-5 lg:py-0 block text-center ";
  return (
    <main>
      <Head>
        <title>Gambier ∙ AKA Trading Indonesia</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      {/* fixed wrapper */}
      <nav className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white border-b border-black dark:border-gray-button2 md:px-10 dark:bg-gray-comp font-inter">
        {/* max-w-5xl */}
        <section className="flex flex-col items-center max-w-5xl mx-auto lg:justify-between lg:flex-row">
          {/*  */}
          <article className="flex flex-row items-center justify-between w-full lg:justify-start lg:space-x-5 lg:w-1/3">
            {/* Mobile & Desktop -  Logo */}
            <article className="flex w-8 h-8 ">
              <Link href="/">
                <a className="block">
                  <Image
                    src="/Logo.PNG"
                    width="1000px"
                    height="1000px"
                    layout="intrinsic"
                    priority
                  />
                </a>
              </Link>
            </article>

            {/* Mobile & Desktop -  Logo Name */}
            <article className="text-lg font-bold font-EBGaramond text-green-1000 md:text-2xl">
              AKA Trading Indonesia
            </article>

            {/* Mobile - Hamburger Menu - lg:hidden */}
            <article>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block lg:hidden focus:outline-none"
              >
                <svg
                  className="w-8 h-8 dark:text-white text-green-1000"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Hamburger */}
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  {/* X */}
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </article>
          </article>

          {/* Mobile & Desktop - Navigation Link */}
          <article
            className={` ${
              !isOpen ? "hidden" : "block"
            } items-center flex-col lg:flex lg:flex-row lg:justify-end lg:w-2/3 w-full divide-y lg:divide-y-0 lg:divide-x  divide-gray-500 pt-5 lg:pt-0`}
          >
            <div>
              <Link href="/">
                <a className="flex items-center justify-between ">
                  <div className={navigation}>{t.nav.home}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/about">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.about}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/product">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.product}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/team">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.team}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.contact}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            {/* Dark mode button */}
            <DarkModeButton />

            {/* Internasionalization button */}
            <article className="flex items-center lg:justify-center ">
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() => {
                    router.push("/candleNut", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() =>
                    router.push("/candleNut", "/", { locale: "ID" })
                  }
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>
      <div className="max-w-5xl p-5 mx-auto sm:p-0">
        <div className="grid grid-cols-1 pt-24 space-y-3 md:pt-20 md:m-5 md:grid-cols-2 md:space-y-0 font-inter">
          <div className="h-auto space-y-3 md:p-5 md:px-0">
            <Image
              className="w-full h-auto "
              src="/gambir1.jpg"
              width={1080}
              height={805}
              priority
            />

            <div>
              <Image
                className="w-full h-auto "
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

            {/* next/prev */}
            <div className="flex flex-row items-center justify-between mt-10">
              <div className="flex flex-row justify-start font-semibold">
                <Link href="/candleNut">
                  <a className="px-4 py-1 hover:bg-gray-100">
                    <HiOutlineChevronLeft size={30} />
                  </a>
                </Link>
                <Link href="/candleNut">
                  <a className="px-4 py-1 hover:bg-gray-100">
                    <HiOutlineChevronRight size={30} />
                  </a>
                </Link>
              </div>

              {/* Order Button */}
              <Link href="/contact">
                <a className="px-6 py-2 font-semibold text-white hover:bg-opacity-80 bg-green-1000 hover:-translate-y-1">
                  {t.order}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
