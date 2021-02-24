import Image from "next/image";
import Link from "next/link";

export default function ProductDetails(props) {
  return (
    <div className="grid m-5 grids-1 md:grid-cols-2 -colp-5 ">
      <div>
        <Image
          className="w-full h-30"
          src={`${props.image}`}
          width={1080}
          height={605}
          priority
        />
        <Image
          className="w-full h-30"
          src={`${props.image2}`}
          width={1080}
          height={605}
        />
        <Image
          className="w-full h-30"
          src={`${props.image3}`}
          width={1080}
          height={605}
        />
      </div>
      <div>
        <div className="pl-3 mb-5 text-3xl font-bold border-l-4 border-black fon3">
          Gambier
        </div>
        <p>
          <strong>Description</strong>: Gambier here refers to aqueous extract
          of the gambir leaves that are processed into a pulp, shaped, and then
          dried tailored to the desired shape and dryness level. We still
          cultivate and process our gambier in a traditional way by the farmers
          in the West PakPak regency, North Sumatra. Our gambier are rich with
          Catechin, Tanin, Polyphenols, and Antioxidants that can be utilized in
          multi kind of industries ranging from Chemical up to Pharmacy
          industries. These gambier from Sumatra are still supplying more than
          80% of gambier's world market.
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
          <strong>Extraction Type</strong> : Maceration extraction HS code :
          32019010
        </p>

        <div className="flex flex-row justify-between mt-10">
          <Link href="/product">
            <a className="px-4 py-2 mr-5 font-medium text-gray-700 border-2 border-black rounded-lg hover:text-gray-900">
              Back
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-4 py-2 font-bold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-sm hover:scale-110 hover:shadow-lg">
              Order
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
