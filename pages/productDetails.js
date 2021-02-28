import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProductDetails from "../components/ProductDetails";
export default function productDetails() {
  return (
    <div className="min-h-screen mx-auto ">
      <Nav title="Product | AKA Trading Indo"></Nav>

      <div className="w-full mx-auto">
        <Breadcomb name="PRODUCT" />
      </div>
      <ProductDetails image="/a1-rev.svg" image2="/a2.svg" image3="/a3.svg" />
      <Footer />
    </div>
  );
}
