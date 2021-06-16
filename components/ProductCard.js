import Link from "next/link";
import Image from "next/image";

const ProductCard = (props) => {
  return (
    <main>
      <Link href={`${props.product}`}>
        <a className="block w-5/6 h-auto m-5 mx-auto cursor-pointer ">
          <div>
            <Image src={`${props.image}`} width={1080} height={705} priority />
          </div>
          <div className="flex flex-col px-3 py-4 -mt-2 cursor-pointer bg-green-brand hover:bg-opacity-70">
            <div className="px-2 text-2xl font-bold text-left text-white font-EBGaramond dark:text-white">
              {props.productName}
            </div>
          </div>
        </a>
      </Link>
    </main>
  );
};

export default ProductCard;
