import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import emailjs from "emailjs-com";
export default function contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ibi2aip",
        "contact_form",
        e.target,
        "user_E6WrSXVVfdvAp9k2YeHDO"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          console.log(result.text);
        },
        (error) => {
          console.log("GAGAL", error);
        }
      );
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ya =
    "font-semibold text-base text-gray-600  hover:bg-green-1000 hover:text-white rounded-md   py-2 px-3  dark:text-white";
  const ab =
    "h-10 px-2 mb-5 placeholder-gray-500 bg-gray-200 dark:bg-gray-300 rounded-md  focus:ring-2 focus:outline-none focus:ring-green-1000 w-full dark:placeholder-gray-700";

  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white shadow-lg md:px-10 dark:bg-gray-800">
        <Head>
          <title>{`${t.nav.contact} | AKA Trading Indonesia`}</title>
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

            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="items-center inline-block p-1 pb-1 m-5 ml-1 text-base font-semibold text-gray-600 rounded-md h-7 w-7 lg:m-0 focus:outline-none hover:bg-gray-100 "
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-white dark:hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </div>
        </div>

        {/* {props.children} */}
      </section>

      {/* <Nav title="Contact | AKA Trading Indo"></Nav> */}

      <div className="flex flex-col sm:px-5 md:flex-row pt-24">
        <div>
          <div className=" m-5 font-sans text-gray-700 rounded-lg dark:text-white space-y-2 bg-gray-50 dark:bg-gray-900">
            <div className="mb-2 text-xl font-semibold">Head Office</div>
            <div></div>

            {/* address */}
            <div className="flex flex-row items-start justify-start p-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* phone number */}
              <div className="flex flex-row items-center p-2 bg-gray-100 rounded-lg text-sm dark:text-gray-900">
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
                <div className="">081223191932</div>
              </div>

              {/* email */}
              <div className="flex flex-row items-center p-2 bg-gray-100 rounded-lg text-sm dark:text-gray-900">
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
                <div className="">
                  <a
                    className="hover:underline"
                    href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff "
                  >
                    eksportirAKA@gmail.com
                  </a>
                </div>
              </div>

              {/* fb  */}
              <a
                href="https://www.facebook.com/AKA-Trading-Indonesia-108120014669787"
                target="_blank"
              >
                <div className="flex flex-row items-center  bg-gray-100 rounded-lg p-2 hover:shadow-md">
                  <div className="h-5 w-5 mr-2">
                    <Image src="/fbSVG.svg" width="100" height="100" priority />
                  </div>

                  <div className="text-blue-fb font-bold text-sm">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>
              {/* ln */}
              <a
                href="https://www.linkedin.com/company/aka-tradingindo"
                target="_blank"
              >
                <div className="flex flex-row items-center  bg-gray-100 rounded-lg p-2 hover:shadow-md">
                  <div className="h-5 w-5 mr-2">
                    <Image src="/lnSVG.svg" width="100" height="100" priority />
                  </div>

                  <div className="text-blue-ln font-bold text-sm">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>
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
        <form
          className="h-auto p-5 m-5 bg-gray-100 border rounded-lg md:mx-auto dark:bg-gray-800 dark:border-gray-600 md:mr-5"
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <input
              placeholder={`${t.form.fullName}`}
              className={ab}
              id="nama"
              type="text"
              name="full_name"
            />

            <div className="sm:pl-2">
              <input
                placeholder={`${t.form.companyName}`}
                className={ab}
                id="nama"
                type="text"
                name="company_Name"
              />
            </div>

            <input
              placeholder={`${t.form.email}`}
              className={ab}
              id="email"
              type="email"
              name="email"
            />
            <div className="sm:pl-2">
              <input
                placeholder={`${t.form.phoneNumber}`}
                className={ab}
                id="Email"
                type="tel"
                name="phone_number"
              />
            </div>
          </div>

          <input
            placeholder={`${t.form.address}`}
            className={ab}
            id="Address"
            type="text"
            name="address"
          />

          <input
            placeholder={`${t.form.country}`}
            className={ab}
            id="Country"
            type="text"
            name="country"
          />

          <input
            placeholder={`${t.form.subject}`}
            className={ab}
            id="Subject"
            type="text"
            name="subject"
          />

          <textarea
            className="w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md focus:ring-2 focus:outline-none focus:ring-green-1000"
            name="message"
            id="message"
            cols="20"
            rows="5"
          ></textarea>

          {/* <button className="w-full h-10 px-5 mt-5 font-bold text-white border-green-400 rounded-lg shadow bg-green-1000 hover:bg-opacity-90">
            Send
          </button> */}
          <input
            className="w-full h-10 px-5 mt-5 font-bold text-white transition duration-200 transform border-green-400 rounded-lg shadow bg-green-1000 hover:bg-opacity-90 hover:scale-95"
            type="submit"
            value={`${t.form.send}`}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}
