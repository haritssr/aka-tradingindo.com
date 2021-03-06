export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col w-full h-auto mt-40 ">
      <div className="flex flex-col items-center w-full p-4 md:flex-row justify-evenly">
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
      <div className="p-3 text-center text-gray-700 bg-opacity-10 dark:text-gray-500 bg-green-1000 dark:bg-gray-800">
        COPYRIGHT&copy;2021&nbsp;&nbsp; PT.AKA TRADING INDONESIA. ALL RIGHTS
        RESERVED
      </div>
    </div>
  );
}
