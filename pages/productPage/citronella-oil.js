import Image from "next/image";
import Link from "next/link";
import Breadcomb from "../../components/Breadcomb";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function citronellaOil() {
  return (
    <div className="min-h-screen mx-auto">
      <Nav title="Citronella Oil | AKA Trading Indo"></Nav>

      <div className="w-full mx-auto">
        <Breadcomb name="PRODUCT" />
      </div>

      <div className="grid m-5 grids-1 md:grid-cols-2 -colp-5 ">
        <div>
          <Image
            className="w-full h-30"
            src="/a1-rev.svg"
            width={1080}
            height={605}
            priority
          />
          <Image
            className="w-full h-30"
            src="/a2.svg"
            width={1080}
            height={605}
          />
          <Image
            className="w-full h-30"
            src="/a3.svg"
            width={1080}
            height={605}
          />
        </div>
        <div>
          <div className="pl-3 mb-5 text-3xl font-bold border-l-4 border-black fon3">
          Citronella Oil
          </div>
          <p>
            <strong>Description</strong>: -
            <br />
            <br />
            <strong>Contents</strong> :-
            <br />
            <strong>Suitable Industry</strong> : -
            <br />
            <strong>Scientific Name</strong> : -
            <br />
            <strong>Place of Origin</strong> : -
            <br />
            <strong>Extraction Type</strong> : -
          </p>

          <div className="flex flex-row justify-between mt-10">
            <Link href="/product">
              <a className="px-4 py-2 mr-5 font-medium text-gray-700 border-2 border-black rounded-lg hover:text-gray-900">
                Back
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-4 py-2 font-bold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-sm hover:scale-95 hover:shadow-lg">
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
