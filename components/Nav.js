import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import DarkModeButton from "./DarkModeButton";

export default function Nav(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-medium text-base text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white  rounded-md  py-1 px-2   ";
  return (
    <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white shadow-lg md:px-10 dark:bg-gray-comp">
      <Head>
        <title>{props.title}</title>
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
          } lg:flex flex-col lg:flex-row lg:justify-around lg:w-2/3 w-full border-b-2 border-gray-500 lg:border-none items-center `}
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

          {/* i18n */}
          <div>
            <div className="inline-block">
              <button
                className={ya}
                onClick={() => {
                  router.push("/", "/", { locale: "EN" });
                }}
              >
                EN
              </button>
            </div>
            {`|`}
            <div className="inline-block">
              <button
                className={ya}
                onClick={() => router.push("/", "/", { locale: "ID" })}
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
  );
}
