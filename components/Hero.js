import Link from "next/link";
export default function Hero() {
  const haha =
    "font-serif text-white hover:underline dark:text-white text-center";
  return (
    <div className="relative mt-20">
      <img
        src="/z.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="es"
      />
      <div className="relative py-10 bg-gray-900 bg-opacity-50">
        <div className="w-full p-10 sm:max-w-2xl ">
          <div className="mb-4 text-3xl font-medium text-center text-white sm:text-5xl sm:text-left title-font">
            We provide commodities to fulfill your company’s specific needs.
          </div>
          <p className="mb-2 leading-relaxed text-center text-white sm:text-left">
            <div className="text-center sm:text-left">----------</div>
            <br />
            <Link href="/productPage/gambier">
              <a className={haha}>Gambier</a>
            </Link>
            ,{" "}
            <Link href="/productPage/patchouli-oil">
              <a className={haha}>Candlenuut</a>
            </Link>
            ,{" "}
            <Link href="/productPage/cinnamon">
              <a className={haha}>Cinnamon</a>
            </Link>
            ,{" "}
            <Link href="/productPage/coffee-bean">
              <a className={haha}>Coffee Bean</a>
            </Link>
          </p>
          <div className="flex flex-row justify-center sm:justify-start">
            <div>
              <Link href="/product">
                <a className="inline-block px-4 py-2 text-lg font-bold text-white border-0 rounded-lg shadow-sm bg-green-1000 focus:outline-none hover:bg-opacity-95">
                  Products
                </a>
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <a className="inline-block px-6 py-2 ml-4 text-lg font-bold text-gray-500 bg-gray-100 border-0 rounded-lg focus:outline-none hover:bg-gray-200">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
