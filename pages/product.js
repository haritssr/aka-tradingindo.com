import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PrevNext from "../components/PrevNext";
import Product from "../components/Product";
export default function product() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="Product | AKA Trading Indo"></Nav>

      <div className="w-full mx-auto">
        <Breadcomb name="PRODUCTS" />
      </div>
      <div className="z-0 grid grid-cols-1 sm:px-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="mb-5 sm:mx-0">
          <Product
            image="/a1-rev.svg"
            productName="Gambier"
            subProductName="Powder"
            product="/productPage/gambier"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Patchouli Oil"
            subProductName="Powder"
            product="/productPage/patchouli-oil"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Citronella Oil"
            subProductName="Powder"
            product="/productPage/citronella-oil"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Cinnamon"
            subProductName="Powder"
            product="/productPage/cinnamon"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Incense"
            subProductName="Powder"
            product="/productPage/incense"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Coffee Bean"
            subProductName="Powder"
            product="/productPage/coffee-bean"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <PrevNext prev="/about" next="/team" />
      <Footer />
    </div>
  );
}
