import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import DarkModeButton from "../components/DarkModeButton";

export default function about() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;

  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-medium text-base text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white  rounded-md  py-1 px-2   ";
  return (
    <div className="min-h-screen dark:bg-gray-bkg pt-28">
      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 blur shadow-lg md:px-10 dark:bg-gray-comp ">
        <Head>
          <title>{` ${t.nav.about} | AKA Trading Indonesia`}</title>
          <link rel="icon" href="/logo.ico" />
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
            } lg:flex flex-col lg:flex-row lg:justify-around lg:w-2/3 w-full items-center `}
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
                    router.push("/about", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={ya}
                  onClick={() => router.push("/about", "/", { locale: "ID" })}
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

      <div className="p-5 mx-5 text-lg font-normal text-gray-700 bg-gray-200 border  md:mx-10 dark:text-gray-text dark:bg-gray-comp dark:border-gray-button2">
        {t.about}
      </div>
      <div className="mt-5 overflow-hidden md:mt-0 md:mx-10 h-50 md:h-auto">
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
      </div>
      <Footer />
    </div>
  );
}
