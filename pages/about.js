import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import DarkModeButton from "../components/DarkModeButton";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function about() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);

  const navigation =
    " text-sm text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-white py-4 font-inter lg:px-5 lg:py-0 block text-center ";
  return (
    <div>
      <Head>
        <title>{` ${t.nav.about} ∙ AKA Trading Indonesia`}</title>
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
                    router.push("/about", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() => router.push("/about", "/", { locale: "ID" })}
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>

      {/* AKA Trading Indonesia */}
      {/* <div className="p-5 mx-5 text-lg text-gray-800 bg-gray-200 border rounded-lg md:mx-10 dark:text-gray-text dark:bg-gray-comp dark:border-gray-button2 sm:rounded-b-none font-EBGaramond">
        {t.about}
      </div> */}

      {/* Gambar */}
      {/* <div className="mt-5 overflow-hidden md:mt-0 md:mx-10 h-50 md:h-auto">
        <div className="flex flex-col overflow-hidden rounded-b-lg md:flex-row">
          <div>
            <Image src="/abp1.png" width={1400} height={1000} priority />
          </div>
          <div>
            <Image src="/abp2.png" width={1400} height={1000} priority />
          </div>
          <div>
            <Image src="/abp3.png" width={1400} height={1000} priority />
          </div>
        </div>
      </div> */}

      <div className="max-w-5xl px-5 mx-auto lg:px-0">
        {/* AKA Trading Indonesia adalah ... */}
        <div className="mt-32 mb-20 text-3xl font-EBGaramond">
          {t.about.top}
        </div>

        {/* Tujuan Kami */}
        <section className="flex flex-col mb-20 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
          <article className="sm:w-1/2">
            <Image src="/abp1.png" width="880px" height="626px" priority />
          </article>
          <article className="font-EBGaramond sm:w-1/2">
            <div className="mb-3 text-4xl font-semibold text-green-1000">
              {t.about.tujuanTitle}
            </div>
            <div className="text-2xl">{t.about.tujuan}</div>
          </article>
        </section>

        {/* Komitmen Kami */}
        <section className="flex flex-col mb-20 space-y-5 sm:flex-row-reverse sm:space-y-0">
          <article className="sm:w-1/2 sm:ml-5">
            <Image src="/abp2.png" width="880px" height="626px" priority />
          </article>
          <article className="font-EBGaramond sm:w-1/2">
            <div className="mb-3 text-4xl font-semibold text-green-1000">
              {t.about.komitmenTitle}
            </div>
            <div className="text-2xl">{t.about.komitmen}</div>
          </article>
        </section>

        {/* Prinsip Kami */}
        <section className="flex flex-col mb-20 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
          <article className="sm:w-1/2">
            <Image src="/abp3.png" width="880px" height="626px" priority />
          </article>
          <article className="font-EBGaramond sm:w-1/2">
            <div className="mb-3 text-4xl font-semibold text-green-1000">
              {t.about.prinsipTitle}
            </div>
            <div className="text-2xl">{t.about.prinsip}</div>
          </article>
        </section>
      </div>

      <Footer />
    </div>
  );
}
