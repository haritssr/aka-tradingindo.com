import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function about() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="About Us | AKA Trading Indo"></Nav>

      <div className="max-w-6xl mx-auto mt-20 overflow-hidden rounded-lg h-50 md:h-auto">
        <img src="/abp.png" className="object-cover w-full h-full" alt="es" />
        {/* <img
          className="object-cover"
          src="/abp.png"
          alt="Foto"
          width={2000}
          height={900}
          priority
        /> */}
      </div>

      <div className="max-w-6xl p-5 m-5 mx-auto text-lg font-medium rounded bg-green-1000 bg-opacity-10 dark:text-white dark:border">
        <strong>AKA Trading Indonesia</strong> is an exporter company
        established since 2021. We prioritize in exporting best-quality of
        Gambier, Patchouli oil, Citronella oil, Incense, Cinnamon, and Coffee
        bean from Sumatra Island. We aim to help the farmers to gain more value
        and fulfil the world’s need towards certain commodities that we can
        offer. Our progressive planning in the future is to diversify our
        commodities and expand our services. We committed to implementing our
        plans by firstly adding more value to our commodities to generate more
        benefit for more people with our innovative programme. In our business
        practice, we hold the principles of “People, Prosperity, and Profit”. We
        believe that if we treat our people with integrity, it will surely bring
        prosperity and profit in every aspect of the business.
      </div>
      <Footer />
    </div>
  );
}
