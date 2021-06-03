import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import DarkModeButton from "../components/DarkModeButton";
import { HiOutlineChevronRight } from "react-icons/hi";

function product() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);
  const navigation =
    " text-sm text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-white py-4 font-inter lg:px-5 lg:py-0 block text-center ";
  return (
    <main>
      <Head>
        <title>{`${t.nav.product} ∙ AKA Trading Indonesia`}</title>
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
                  className={`${navigation}`}
                  onClick={() => {
                    router.push("/product", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={`${navigation}`}
                  onClick={() => router.push("/product", "/", { locale: "ID" })}
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>

      <div className="z-0 grid max-w-6xl grid-cols-1 pt-32 mx-auto sm:px-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="mb-5 sm:mx-0">
          <Product
            image="/gambir1.jpg"
            productName={`${t.name.gambier}`}
            product="/gambier"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            className="object-cover"
            image="/kemiri2.jpg"
            productName={`${t.name.candlenut}`}
            product="/candleNut"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Product(props) {
  return (
    <>
      <Link href={`${props.product}`}>
        <div className="z-0 w-5/6 h-auto m-5 mx-auto cursor-pointer ">
          <div>
            <Image
              className="z-0"
              src={`${props.image}`}
              width={1080}
              height={705}
              priority
            />
          </div>
          <div className="flex flex-col p-3 -mt-2 cursor-pointer bg-green-1000 hover:bg-opacity-70">
            <div className="px-2 text-xl font-bold text-left text-white font-inter dark:text-white">
              {props.productName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default product;
