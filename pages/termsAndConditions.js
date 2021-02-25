import Nav from "../components/Nav";
import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";

export default function about() {
  return (
    <>
      <div className="max-w-6xl min-h-screen mx-auto">
        <Nav title="Privacy Policy"></Nav>
        <Breadcomb name="Terms and Conditions" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptatibus, suscipit deleniti quibusdam consequuntur consequatur ad
          nam cum quam aliquid excepturi quis quidem ratione. Maiores dolorem
          facilis exercitationem iure quo nobis in eos. At facilis aperiam quis
          eos eveniet, odit quos, facere itaque similique et dolores, fuga
          dignissimos perferendis in exercitationem cum ipsum quas! Impedit ea
          harum, non perspiciatis alias similique quas suscipit animi quam
          inventore vero incidunt voluptatem eligendi ipsam asperiores unde
          doloribus amet sequi sit nulla tempore consectetur veniam eum a.
          Maxime, tenetur deserunt temporibus necessitatibus nisi soluta vero
          possimus, sapiente placeat ullam repellendus saepe eaque quisquam
          architecto.
        </div>
      </div>
      <Footer />
    </>
  );
}
