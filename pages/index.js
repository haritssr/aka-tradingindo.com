import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Link from "next/link";
export default function Home() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Nav title="AKA Trading Indo"></Nav>
      <div className="static mx-5 mt-28 md:mx-0 ">
        <section className="text-gray-600 body-font">
          <div className="flex-col items-center justify-center px-5 pb-24 mx-auto">
            <Image
              className="rounded-md shadow-lg "
              src="/z.jpg"
              width={1280}
              height={720}
              priority
            />
            <br />
            <div className="w-full text-center lg:mx-auto lg:w-2/3">
              <div className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
                We provide commodities to fulfill your company’s specific needs
              </div>
              <p className="mb-8 leading-relaxed">
                -------
                <br />
                <Link href="/productPage/gambier">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Gambier
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/patchouli-oil">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Patchouli Oil
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/citronella-oil">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Citronella Oil
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/cinnamon">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Cinnamon
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/incense">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Incense
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/coffee-bean">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Coffee Bean
                  </a>
                </Link>
                ,{" "}
                <Link href="/productPage/gambier">
                  <a className="font-serif text-green-800 ont-bold hover:underline hover:text-green-500">
                    Coffee Beans
                  </a>
                </Link>
              </p>
              <div className="flex justify-center">
                <Link href="/product">
                  <a className="inline-flex px-4 py-2 text-lg font-bold text-white transition duration-300 transform bg-green-600 border-0 rounded-lg shadow-sm focus:outline-none hover:bg-green-500 hover:scale-95 hover:shadow-lg">
                    Products
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded-lg focus:outline-none hover:bg-gray-200">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4 m-3 mt-20">
        <div className="mb-2 text-2xl font-bold text-center">
          Why &nbsp;
          <span className="text-gray-800">AKATRADING</span>
        </div>
        <div className="text-center text-gray-600">
          The world leading companis use and love{" "}
          <span className="text-gray-800">AKA</span>
          <span className="text-gray-600">TRADING</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <WhyUs
          judul="Masdasdad"
          subjudul="repellat atque dolo  non laudantium veniam nostrum ratione a officiis rerum, voluptates repellat atque dolo non laudantium v"
        />
        <WhyUs
          judul="Kasdadada"
          subjudul="repellat atque dolo  non laudantium veniam nostrum ratione a officiis rerum, voluptates repellat atque dolo non laudantium veniam nostrum  re"
        />
        <WhyUs
          judul="Lasdaasd"
          subjudul="repellat atque dolo  non laudantium veniam nostrum ratione a officiis rerum, voluptates repellat atque dolo non laudantium veniam noepellat atque dolo non laudantium veniam nostrum ratione a officiis rerum, voluptates re"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="font-semibold text-center">TESTIMONIAL</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5">
          <Testimonial />
        </div>
        <div className="p-5">
          <Testimonial />
        </div>
        <div className="p-5">
          <Testimonial />
        </div>
        <div className="p-5">
          <Testimonial />
        </div>
      </div>
      <br />
      <br />

      <div className="text-center">
        <Link href="/about">
          <a className="p-2 mr-2 text-lg hover:underline q">
            next
          </a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
