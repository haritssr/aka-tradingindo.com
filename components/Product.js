import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <>
      <Link href={`${props.product}`}>
        <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden rounded-lg cursor-pointer hover:shadow-md dark:border-gray-500">
          <Image
            className="z-0"
            src={`${props.image}`}
            width={1080}
            height={705}
            priority
          />
          <div className="flex flex-col p-3 -mt-2 bg-gray-200 cursor-pointer hover:bg-gray-100 dark:bg-gray-400">
            <div className="my-2 text-2xl font-medium text-left text-gray-800 font-mont dark:text-gray-900">
              {props.productName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
