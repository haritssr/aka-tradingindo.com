import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <>
      <Link href={`${props.product}`}>
        <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-200 transform shadow-lg cursor-pointer rounded-xl hover:scale-105 hover:shadow-xl dark:border dark:border-white">
          <Image
            className="z-0"
            src={`${props.image}`}
            width={1080}
            height={705}
            priority
          />
          <div className="flex flex-col p-3 -mt-2 cursor-pointer bg-opacity-90 bg-green-1000 hover:bg-opacity-70 ">
            <div className="text-2xl font-bold text-left text-white dark:text-white">
              {props.productName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
