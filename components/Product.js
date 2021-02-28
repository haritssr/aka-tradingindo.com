import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-300 transform border rounded-xl hover:scale-105 hover:shadow dark:border-gray-500">
      <Image className="z-0" src={`${props.image}`} width={1080} height={605} />
      <div className="flex flex-col p-3 -my-2 bg-gradient-to-br from-gray-50 to-gray-200 dark:bg-gray-600">
        <div className="my-2 font-serif text-2xl font-medium text-left text-gray-800">
          {props.productName}
        </div>
        <div className="flex items-center justify-start mt-2 mb-4 ">
          <div>
            <Link href={`${props.product}`}>
              <a className="p-2 font-semibold text-gray-700 bg-gray-200 border-2 rounded-lg hover:border-gray-700">
                More Details
              </a>
            </Link>
          </div>
          {/* <button className="px-6 py-1 font-bold text-gray-100 transform bg-gray-700 border-2 border-gray-700 rounded-md text-md hover:scale-105 hover:shadow-xl">
            <Link href="/contact">
              <a>Order</a>
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}
