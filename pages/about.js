import Nav from "../components/Nav";
import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import PrevNext from "../components/PrevNext";
export default function about() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Nav title="About Us | AKA Trading Indo"></Nav>
      <Breadcomb name="ABOUT US" />
      <div className="flex flex-col h-auto p-5 m-5 font-sans text-gray-700 rounded-lg shadow bg-gray-50">
        <div className="text-lg font-medium ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <strong>AKA Trading Indonesia</strong> is an exporter company
          established since 2021. We prioritize in exporting best-quality of
          Gambier, Patchouli oil, Citronella oil, Incense, Cinnamon, and Coffee
          bean from Sumatra Island. We aim to help the farmers to gain more
          value and fulfil the world’s need towards certain commodities that we
          can offer. Our progressive planning in the future is to diversify our
          commodities and expand our services. We committed to implementing our
          plans by firstly adding more value to our commodities to generate more
          benefit for more people with our innovative programme. In our business
          practice, we hold the principles of “People, Prosperity, and Profit”.
          We believe that if we treat our people with integrity, it will surely
          bring prosperity and profit in every aspect of the business.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 m-5 font-sans text-gray-700 rounded-lg shadow bg-gradient-to-br from-green-50 to-green-100">
          <div className="mb-1 text-xl font-semibold text-center">
            Head Office
          </div>
          <div></div>
          <div className="flex flex-row items-start justify-start">
            <div>
              <svg
                className="w-5 h-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="pb-2 -mt-1">
              QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44, Tanjung
              Barat, Jagakarsa – Jakarta Selatan 12530
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div>
              <svg
                className="w-5 h-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="pb-1">+62-8128-0493-635</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div>
              <svg
                className="w-5 h-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="pb-1">
              <a
                className="hover:underline"
                href="mailto:eksportiraka@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff "
              >
                eksportirAKA@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <iframe
            className={`w-full p-5 h-60`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.656300461767!2d106.83740851413296!3d-6.30880499543414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2b940afd89%3A0x6186386a52b3ee04!2sQP%20OFFICE!5e0!3m2!1sen!2sid!4v1613370918140!5m2!1sen!2sid"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <PrevNext prev="/" next="/product" />
      <Footer />
    </div>
  );
}
