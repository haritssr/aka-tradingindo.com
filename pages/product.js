import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Product from "../components/Product";

export default function product() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="Product | AKA Trading Indo"></Nav>
      <div className="z-0 grid max-w-6xl grid-cols-1 pt-32 mx-auto sm:px-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="mb-5 sm:mx-0">
          <Product
            image="/gambir1.jpg"
            productName="Gambier"
            product="/productPage/gambier"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/kemiri.jpg"
            productName="Candlenut"
            product="/productPage/candlenut"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Cinnamon"
            product="/productPage/cinnamon"
          />
        </div>
        <div className="mb-5 sm:mx-0">
          <Product
            image="/c.jpg"
            productName="Coffee bean"
            product="/productPage/coffee-bean"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
