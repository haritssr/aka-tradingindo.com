import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
export default function contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-semibold text-base text-gray-600  hover:bg-green-1000 hover:text-white rounded-md   py-1 px-2 dark:text-white";
  const ab =
    "h-10 px-2 mb-5 placeholder-gray-400 bg-gray-200 rounded-md  focus:ring-2 focus:outline-none focus:ring-green-1000 w-full dark:placeholder-gray-700";

  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white md:px-10 dark:bg-gray-800 ">
        <Head>
          <title>Contact | AKA Trading Indo</title>
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
                    router.push("/contact", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={ya}
                  onClick={() => router.push("/contact", "/", { locale: "ID" })}
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

      {/* <Nav title="Contact | AKA Trading Indo"></Nav> */}

      <div className="mx-auto">
        <Breadcomb name="CONTACT" />
      </div>

      <div className="flex flex-col sm:px-5 md:flex-row">
        <div>
          <div className="p-5 m-5 font-sans text-gray-700 rounded-lg dark:text-white">
            <div className="mb-4 text-xl font-semibold">Head Office</div>
            <div></div>
            <div className="flex flex-row items-start justify-start">
              <div>
                <svg
                  className="w-5 h-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="pb-2 -mt-1">
                QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44,
                Tanjung Barat, Jagakarsa – Jakarta Selatan 12530
              </div>
            </div>

            <div className="flex flex-row items-center justify-start">
              <div>
                <svg
                  className="w-5 h-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="pb-1">+62-8128-0493-635</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div>
                <svg
                  className="w-5 h-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="pb-1">
                <a
                  className="hover:underline"
                  href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff "
                >
                  eksportirAKA@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* maps */}
          <div>
            <iframe
              className={`w-full p-5 h-80`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.656300461767!2d106.83740851413296!3d-6.30880499543414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2b940afd89%3A0x6186386a52b3ee04!2sQP%20OFFICE!5e0!3m2!1sen!2sid!4v1613370918140!5m2!1sen!2sid"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>

        {/* enquiry */}
        <div className="h-auto p-5 m-5 bg-gray-100 border rounded-lg md:mx-auto dark:bg-gray-800 dark:border-gray-500 md:mr-5">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <input
              placeholder={`${t.form.fullName}`}
              className={ab}
              id="nama"
              type="text"
            />

            <div className="sm:pl-2">
              <input
                placeholder={`${t.form.companyName}`}
                className={ab}
                id="nama"
                type="text"
              />
            </div>

            <input
              placeholder={`${t.form.email}`}
              className={ab}
              id="email"
              type="email"
            />
            <div className="sm:pl-2">
              <input
                placeholder={`${t.form.phoneNumber}`}
                className={ab}
                id="Email"
                type="tel"
              />
            </div>
          </div>

          <input
            placeholder={`${t.form.address}`}
            className={ab}
            id="Address"
            type="text"
          />

          <input
            placeholder={`${t.form.country}`}
            className={ab}
            id="Country"
            type="text"
          />

          <input
            placeholder={`${t.form.subject}`}
            className={ab}
            id="Subject"
            type="text"
          />

          <textarea
            className="w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md focus:ring-2 focus:outline-none focus:ring-green-1000"
            name=""
            id="message"
            cols="20"
            rows="5"
          ></textarea>

          <button className="w-full h-10 px-5 mt-5 font-bold text-white border-green-400 rounded-lg shadow bg-green-1000 hover:bg-opacity-90">
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
