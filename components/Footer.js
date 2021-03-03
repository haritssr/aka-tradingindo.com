import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col w-full h-auto mt-40 ">
      <div className="flex flex-col items-center w-full p-4 md:flex-row justify-evenly">
        {/* <div className="flex flex-row items-center justify-between">
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
            <a className="ml-2 text-lg font-bold text-gray-500">
              AKATRADING&copy;2021
            </a>
          </Link>
        </div> */}
        <div className="text-gray-500 ">
          Need help?{" "}
          <a
            className="font-bold hover:text-green-1000 hover:underline"
            href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff"
          >
            Feel free to email us
          </a>
        </div>
      </div>
      <div className="p-3 text-sm text-center text-gray-500 bg-gray-300 dark:bg-gray-800">
        COPYRIGHT&copy;2021&nbsp;&nbsp; PT.AKA TRADING INDONESIA. ALL RIGHTS
        RESERVED
      </div>
    </div>
  );
}
