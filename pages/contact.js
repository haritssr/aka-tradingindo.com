import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import emailjs from "emailjs-com";
import DarkModeButton from "../components/DarkModeButton";
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
    "font-medium text-base text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white  rounded-md  py-1 px-2   ";
  const ab =
    "h-10 px-2 placeholder-gray-500 focus:placeholder-gray-800 bg-gray-200 rounded-md  focus:outline-none  w-full  dark:placeholder-gray-400 dark:focus:hover:placeholder-white dark:bg-gray-button2 ";

  return (
    <div className="min-h-screen mx-auto dark:bg-gray-bkg">
      <section className="fixed top-0 z-20 w-full h-auto p-3 px-5 blur shadow-lg md:px-10 dark:bg-gray-comp">
        <Head>
          <title>{`${t.nav.contact} | AKA Trading Indonesia`}</title>
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

            <DarkModeButton />
          </div>
        </div>

        {/* {props.children} */}
      </section>

      <div className="flex flex-col pt-24 sm:px-5 md:flex-row">
        <div>
          <div className="m-5 space-y-2 font-sans text-gray-700 rounded-lg dark:text-gray-text">
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
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {/* phone number */}
              <div className="flex flex-row items-center p-2 overflow-hidden text-sm bg-gray-100 rounded-lg dark:text-gray-text dark:bg-gray-comp ">
                <div>
                  <svg
                    className="w-5 h-5 mr-2"
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
              <div className="flex flex-row items-center p-2 overflow-hidden text-sm bg-gray-100 rounded-lg dark:text-gray-text dark:bg-gray-comp">
                <div>
                  <svg
                    className="w-5 h-5 mr-2"
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
                <div className="flex flex-row items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-comp">
                  <div className="w-5 h-5 mr-2">
                    <Image src="/fbSVG.svg" width="100" height="100" priority />
                  </div>

                  <div className="text-sm font-bold text-blue-fb ">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>
              {/* ln */}
              <a
                href="https://www.linkedin.com/company/aka-tradingindo"
                target="_blank"
              >
                <div className="flex flex-row items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-comp">
                  <div className="w-5 h-5 mr-2">
                    <Image src="/lnSVG.svg" width="100" height="100" priority />
                  </div>

                  <div className="text-sm font-bold text-blue-ln ">
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
          className="h-auto p-5 m-5 space-y-5 bg-gray-100 border-[1.3px] border-gray-300 rounded-lg md:mx-auto dark:bg-gray-comp dark:border-gray-button2 md:mr-5"
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              placeholder={`${t.form.fullName}`}
              className={ab}
              id="nama"
              type="text"
              name="full_name"
            />

            <div className="">
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
            <div className="">
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
            className="w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md dark:placeholder-gray-text focus:ring-2 focus:outline-none focus:ring-green-1000 dark:bg-gray-button2"
            name="message"
            id="message"
            cols="20"
            rows="5"
          ></textarea>

          <input
            className=" h-10 px-5 mt-5 font-semibold text-white rounded-md shadow bg-green-1000 hover:shadow-xl hover:bg-opacity-90  transform hover:-translate-y-1"
            type="submit"
            value={`${t.form.send}`}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}
