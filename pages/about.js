import Nav from "../components/Nav";
import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import PrevNext from "../components/PrevNext";
export default function about() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Nav title="About Us"></Nav>
      <Breadcomb name="ABOUT US" />
      <div className="flex flex-col h-auto p-5 m-5 rounded-lg shadow-md bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mb-5 text-xl font-bold text-center">About Us</div>
        <div className="text-lg font-medium ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AKA trading Indonesia is an
          exporter company established since 2021. We prioritize in exporting
          best-quality of Gambier, Patchouli oil, Citronella oil, Incense,
          Cinnamon, and Coffee bean from Sumatra Island. We aim to help the
          farmers to gain more value and fulfil the world’s need towards certain
          commodities that we can offer. Our progressive planning in the future
          is to diversify our commodities and expand our services. We committed
          to implementing our plans by firstly adding more value to our
          commodities to generate more benefit for more people with our
          innovative programme. In our business practice, we hold the principles
          of “People, Prosperity, and Profit”. We believe that if we treat our
          people with integrity, it will surely bring prosperity and profit in
          every aspect of the business.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 m-5 rounded-lg shadow-md bg-gradient-to-br from-green-50 to-green-100">
          <div className="text-xl font-semibold text-center">Head Office</div>
          <div>
            QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44, Tanjung
            Barat, Jagakarsa – Jakarta Selatan 12530
          </div>
          <div>+6281280493635</div>
          <div>eksportirAKA@gmail.com</div>
        </div>

        <div>
          <iframe
            className="w-full p-5 rounded-lg h-60"
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
