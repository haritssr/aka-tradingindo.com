import { useRouter } from "next/router";
import { EN, ID } from "../translation";
export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="bottom-0 flex flex-col w-full h-auto mt-40 ">
      <div className="flex flex-col items-center w-full p-4 md:flex-row justify-evenly">
        <div className="text-gray-500 ">
          {t.needHelp}{" "}
          <a
            className="font-bold hover:text-green-1000 hover:underline"
            href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff"
          >
            {t.emailUs}
          </a>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-center p-3 text-xs text-center text-gray-800 sm:text-sm bg-opacity-10 dark:text-gray-100 bg-gray-700 dark:bg-gray-comp ">
        <div><span className="text-gray-500">COPYRIGHT &copy; 2021 ∙</span> PT.AKA TRADING INDONESIA ∙&nbsp;</div>
        <div className="text-gray-500">ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
