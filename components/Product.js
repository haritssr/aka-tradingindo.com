import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <>
      <Link href={`${props.product}`}>
        <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-200 transform rounded-lg cursor-pointer hover:scale-105 hover:shadow-md dark:border-gray-500">
          <Image
            className="z-0"
            src={`${props.image}`}
            width={1080}
            height={705}
            priority
          />
          <div className="flex flex-col p-3 -mt-2 bg-opacity-50 cursor-pointer bg-green-1000 hover:bg-opacity-70 ">
            <div className="text-2xl font-medium text-left text-gray-800 font-mont dark:text-gray-900">
              {props.productName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
