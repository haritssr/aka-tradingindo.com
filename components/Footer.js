import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import Link from "next/link";
export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    // outermost layer
    <main className="bottom-0 mt-40 bg-gray-100 border-t dark:border-gray-400 lg:py-5 dark:bg-gray-bkg">
      {/* max-w-5xl */}
      <main className="flex flex-col w-full h-auto max-w-5xl p-5 mx-auto space-y-5 lg:p-0 sm:space-y-0 sm:flex-row">
        {/* Navigation + Product */}
        <section className="grid grid-cols-2 mb-10 sm:w-1/2 sm:mb-0">
          {/* Navigation */}
          <article className="flex flex-col space-y-1 ">
            <div className="text-sm font-light text-gray-500 dark:text-white">Navigation</div>
            <Link href="/">
              <a className="hover:underline dark:text-white">{t.nav.home}</a>
            </Link>
            <Link href="/about">
              <a className="hover:underline dark:text-white">{t.nav.about}</a>
            </Link>
            <Link href="/product">
              <a className="hover:underline dark:text-white">{t.nav.product}</a>
            </Link>
            {/* <Link href="/team">
              <a className="hover:underline dark:text-white">{t.nav.team}</a>
            </Link> */}
            <Link href="/contact">
              <a className="hover:underline dark:text-white">{t.nav.contact}</a>
            </Link>
          </article>

          {/* Product */}
          <article className="flex flex-col space-y-1 ">
            <div className="text-sm font-light text-gray-500 dark:text-white">Product</div>
            <Link href="/gambier">
              <a className="hover:underline dark:text-white">
                <div>Gambir</div>
              </a>
            </Link>
            <Link href="/candleNut.js">
              <a className="hover:underline dark:text-white">
                <div>Candlenut</div>
              </a>
            </Link>
          </article>
        </section>

        {/* Identity */}
        <section className="mt-10 text-sm sm:w-1/2 dark:text-white">
          <div className="text-4xl font-semibold font-EBGaramond text-green-brand ">
            AKA Trading Indonesia
          </div>
          <div className="mt-5 text-base text-gray-700 dark:text-white">
            PT. AKA Trading Indonesia
          </div>
          <div className="text-gray-700 dark:text-white">
            QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44, Tanjung
            Barat, Jagakarsa – Jakarta Selatan 12530
          </div>
          <div className="mt-5 text-gray-500 dark:text-white">
            Copyright &copy; 2021. All Right Reserved.
          </div>
        </section>
      </main>
    </main>
  );
}
