import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Link from "next/link";
import en from "../locales/en";
import id from "../locales/id";
import { useRouter } from "next/router";

export default function Home() {
  const haha = "font-serif  text-green-1000 hover:underline dark:text-white";
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : id;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="AKA Trading Indo"></Nav>
      <div className="static mx-5 mt-20 md:mx-0 ">
        <section className="text-gray-600 body-font">
          <div className="flex-col items-center justify-center px-5 py-5 mx-auto">
            <Image
              className="rounded-md shadow-lg "
              src="/z.jpg"
              width={1480}
              height={820}
              priority
            />
            <br />
            <div className="w-full text-center lg:mx-auto lg:w-2/3">
              <div className="mb-4 text-3xl font-medium text-gray-900 dark:text-white title-font sm:text-4xl">
                {t.headline}
              </div>
              <p className="mb-8 leading-relaxed dark:text-white">
                -------
                <br />
                <Link href="/productPage/gambier">
                  <a className={haha}>Gambier</a>
                </Link>
                ,{" "}
                <Link href="/productPage/patchouli-oil">
                  <a className={haha}>Patchouli Oil</a>
                </Link>
                ,{" "}
                <Link href="/productPage/citronella-oil">
                  <a className={haha}>Citronella Oil</a>
                </Link>
                ,{" "}
                <Link href="/productPage/cinnamon">
                  <a className={haha}>Cinnamon</a>
                </Link>
                ,{" "}
                <Link href="/productPage/incense">
                  <a className={haha}>Incense</a>
                </Link>
                ,{" "}
                <Link href="/productPage/coffee-bean">
                  <a className={haha}>Coffee Bean</a>
                </Link>
                ,{" "}
                <Link href="/productPage/gambier">
                  <a className={haha}>Coffee Beans</a>
                </Link>
              </p>
              <div className="flex justify-center">
                <Link href="/product">
                  <a className="inline-flex px-4 py-2 text-lg font-bold text-white border-0 rounded-lg shadow-sm bg-green-1000 focus:outline-none hover:bg-opacity-95 hover:shadow-md">
                    Products
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="inline-flex px-6 py-2 ml-4 text-lg font-bold text-gray-700 bg-gray-100 border-0 rounded-lg focus:outline-none hover:bg-gray-200">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
