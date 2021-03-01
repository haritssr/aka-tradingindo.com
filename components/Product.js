import Image from "next/image";
import Link from "next/link";
export default function Product(props) {
  return (
    <div className="z-0 w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-300 transform border rounded-xl hover:scale-105 hover:shadow dark:border-gray-500">
      <Image className="z-0" src={`${props.image}`} width={1080} height={605} />
      <div className="flex flex-col p-3 -my-2 cursor-pointer bg-gradient-to-br from-gray-50 to-gray-200 dark:bg-gray-600">
        <Link href={`${props.product}`}>
          <div className="my-2 font-serif text-2xl font-medium text-left text-gray-800">
            {props.productName}
          </div>
        </Link>
      </div>
    </div>
  );
}
