import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function coffeebean() {
  return (
    <div className="min-h-screen mx-auto">
      <Nav title="Gambier | AKA Trading Indonesia"></Nav>

      <div className="grid grid-cols-1 p-5 pt-32 md:m-5 md:grid-cols-2 ">
      <div className="h-auto p-5">
          <Image
            className="w-full rounded h-30"
            src="/gambir1.jpg"
            width={1080}
            height={605}
            priority
          />
          <Image
            className="w-full rounded h-30"
            src="/gambir2.jpg"
            width={1080}
            height={605}
          />
        </div>
        <div className="md:p-5">
          <div className="pl-3 mt-4 mb-2 text-2xl font-bold border-l-4 border-black md:mt-0 md:mb-5 md:text-4xl ">
            Coffee Bean
          </div>
          <p>
            Gambier here refers to aqueous extract of the gambir leaves that are
            processed into a pulp, shaped, and then dried tailored to the
            desired shape and dryness level. We still cultivate and process our
            gambier in a traditional way by the farmers in the West PakPak
            regency, North Sumatra. Our gambier are rich with Catechin, Tanin,
            Polyphenols, and Antioxidants that can be utilized in multi kind of
            industries ranging from Chemical up to Pharmacy industries. These
            gambier from Sumatra are still supplying more than 80% of gambier's
            world market.
            <br />
            <br />
            <strong>Contents</strong> : Catechin, Tanin, Polyphenols
            <br />
            <strong>Suitable Industry</strong> : Chemical, cosmetic, food,
            pharmacy, and tobacco
            <br />
            <strong>Scientific Name</strong> : Uncaria Gambir
            <br />
            <strong>Place of Origin</strong> : West PakPak, North Sumatra
            <br />
            <strong>Extraction Type</strong> : Maceration extraction
            <br />
            <strong>HS Code</strong>: 32019010
          </p>

          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-row justify-start">
              <Link href="/productPage/cinnamon">
                <a className="px-4 py-2 mr-5 font-medium text-gray-700 border-2 border-black rounded-lg hover:text-gray-900">
                  prev
                </a>
              </Link>
              <Link href="/productPage/gambier">
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
