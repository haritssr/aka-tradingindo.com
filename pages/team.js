import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Member from "../components/Member";
import PrevNext from "../components/PrevNext";
export default function team() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Nav title="Team"></Nav>
      <Breadcomb name="TEAM" />
      <div className="z-0 grid grid-cols-1 sm:grid-cols-2 sm:justify-evenly md:grid-cols-3">
        <div className="m-5">
          <Member
            image="/aa.png"
            name="Adriani Putri"
            departement="Chief Marketing Officer"
          />
        </div>
        <div className="m-5">
          <Member
            image="/bb.png"
            name="Kania Cinari"
            departement="Chief Operating Officer"
          />
        </div>
        <div className="m-5">
          <Member
            image="/cc.png"
            name="Avianita Rahmawati"
            departement="Chief Financial Officer"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <PrevNext prev="/product" next="/contact" />
      <Footer />
    </div>
  );
}
