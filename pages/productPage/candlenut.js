import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function candlenut() {
  return (
    <div className="min-h-screen mx-auto">
      <Nav title="Candlenut | AKA Trading Indo"></Nav>

      <div className="grid grid-cols-1 p-5 pt-32 md:m-5 md:grid-cols-2 ">
        <div className="h-auto p-5">
          <Image
            className="w-full rounded"
            src="/kemiri.jpg"
            width={1080}
            height={1000}
            priority
          />
        </div>
        <div className="m-5">
          <div className="pl-3 mb-5 text-4xl font-bold border-l-4 border-black font-3xl">
            Candlenut (Aleurites moluccanus)
          </div>
          <p>
            We are providing freshly peeled candlenut from a natural plantation
            that is cultivated and processed traditionally. In Indonesia, we use
            candlenut as a natural thickener and gives white colour to our
            cuisine. However, it can also contribute to a savoury flavour to the
            cuisine. Other than that, candlenut can produce oil that could
            benefit skin and hair. Hence, this candlenut is surely good either
            to be consumed or to be applied to the body.
            <br />
            <br />
            <strong>Oil Contents</strong> : Above 60%
            <br />
            <strong>Suitable Industry</strong> : Food and Beverage, Cosmetic,
            Pharmacy
            <br />
            <strong>Scientific Name</strong> : Aleurites moluccanus
            <br />
            <strong>Place of Origin</strong> : Kupang, East Nusa Tenggara
            <br />
            <strong>Type</strong> : Whole candlenut
            <br />
            <strong>HS Code</strong>:08029000
          </p>

          <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row justify-start">
              <Link href="/productPage/gambier">
                <a className="px-4 py-2 mr-5 font-medium text-gray-700 border-2 border-black rounded-lg hover:text-gray-900">
                  prev
                </a>
              </Link>
              <Link href="/productPage/cinnamon">
                <a className="px-4 py-2 mr-5 font-medium text-gray-700 border-2 border-black rounded-lg hover:text-gray-900">
                  next
                </a>
              </Link>
            </div>
            <Link href="/contact">
              <a className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-lg shadow-sm bg-green-1000 hover:scale-95 hover:shadow-lg">
                Order
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
