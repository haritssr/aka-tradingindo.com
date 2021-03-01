import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function about() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="About Us | AKA Trading Indo"></Nav>
      <div className="flex flex-col h-auto p-5 m-5 mt-32 font-sans text-gray-700 border rounded-lg shadow bg-gray-50 dark:text-white dark:bg-gray-800 dark:border-gray-500">
        {/* about */}
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

      
      
      

      <Footer />
    </div>
  );
}
