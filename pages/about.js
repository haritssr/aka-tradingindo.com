// import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
export default function about() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-semibold text-base text-gray-600  hover:bg-green-1000 hover:text-white rounded-md  py-2 px-3  dark:text-white active:bg-green-1000 active:text-white";
  return (
    <div className="min-h-screen dark:bg-gray-900 pt-28">
      {/* <Nav title="About Us | AKA Trading Indo"></Nav> */}

      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white md:px-10 dark:bg-gray-800 ">
        <Head>
          <title>About Us | AKA Trading Indonesia</title>
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
                  width={2430}
                  height={1080}
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
                  className="w-7 h-7 dark:text-white text-green-1000"
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
            } lg:flex flex-col lg:flex-row lg:justify-around lg:w-2/3 w-full border-b-2 border-gray-500 lg:border-none items-center `}
          >
            <div className="m-5 ml-0 lg:m-1">
              <Link href="/">
                <a className={ya}>Home</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/about">
                <a className={ya}>About Us</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/product">
                <a className={ya}>Products</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/team">
                <a className={ya}>Team</a>
              </Link>
            </div>

            <div className="m-5 ml-0 lg:m-1">
              <Link href="/contact">
                <a className={ya}>Contact</a>
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
            <div className="items-center m-5 ml-1 lg:m-0">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-5 h-5 focus:outline-none"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <svg
                  className="w-5 h-5 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* {props.children} */}
      </section>
      <div className="p-5 mx-5 text-lg font-medium text-gray-800 md:rounded-t-xl md:mx-10 bg-green-1000 bg-opacity-10 dark:text-white dark:border">
        {t.about}
      </div>
      <div className="mt-5 overflow-hidden md:mt-0 md:mx-10 h-50 md:h-auto">
        <img src="/abp.png" className="object-cover w-full h-full sm:rounded-b-xl" alt="es" />
      </div>
      <Footer />
    </div>
  );
}
