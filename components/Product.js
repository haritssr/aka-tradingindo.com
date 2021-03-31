import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <>
      <Link href={`${props.product}`}>
        <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-200 transform shadow-lg cursor-pointer rounded-md hover:scale-105 hover:shadow-2xl  ">
          <Image
            className="z-0"
            src={`${props.image}`}
            width={1080}
            height={705}
            priority
          />
          <div className="flex flex-col p-3 -mt-2 bg-transparent cursor-pointer to-green-1000 from-green-950 bg-gradient-to-b hover:bg-opacity-70">
            <div className="px-2 text-xl font-bold text-left text-white dark:text-white">
              {props.productName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
