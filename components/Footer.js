import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col items-center w-full h-auto p-4 mt-40 md:flex-row justify-evenly ">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <div className="h-5 w-7">
            <Image
              className=""
              src="/akaLogo.PNG"
              alt="Foto"
              width={150}
              height={150}
              priority
            />
          </div>
        </Link>
        <Link href="/">
          <a className="ml-2 text-lg font-bold">AKATRADING&copy;2021</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="text-gray-500 hover:text-green-700 hover:underline">
            Privacy
          </a>
        </Link>
      </div>
      <div className="text-gray-500 hover:text-green-700 hover:underline">
        <Link href="/">
          <a>Term & Condition</a>
        </Link>
      </div>
      <div className="text-gray-500 ">
        Need help?{" "}
        <a
          className="font-bold hover:text-green-600 hover:underline"
          href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff"
        >
          eksportiraka@gmail.com
        </a>
      </div>
    </div>
  );
}
