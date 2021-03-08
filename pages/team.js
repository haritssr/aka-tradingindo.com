import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Member from "../components/Member";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";
export default function team() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="min-h-screen mx-auto border-t-2 border-white dark:bg-gray-900">
      <Nav title={` ${t.nav.team} | AKA Trading Indonesia`}></Nav>
      <Breadcomb name="TEAM" />
      <div className="z-0 grid max-w-6xl grid-cols-1 mx-auto sm:grid-cols-2 sm:justify-evenly md:grid-cols-3">
        <div className="m-5">
          <Member
            image="/aa.png"
            name="Adriani Putri"
            departement="Chief Marketing Officer"
            ig="https://www.instagram.com/adrianiputri/"
            fb="https://www.facebook.com/adrianiputri17/"
            linkedIn="https://www.linkedin.com/in/adrianiputri/"
            titleig="adrianiputri"
            titlefb="adrianiputri17"
            titlelinkedin="adrianiputri"
          />
        </div>
        <div className="m-5">
          <Member
            image="/bb.png"
            name="Kania Cinari"
            departement="Chief Operating Officer"
            ig="https://www.instagram.com/kaniacinari/"
            fb="https://www.facebook.com/kania.sinamo"
            linkedIn="https://www.linkedin.com/in/kania-cinari-h-sinamo-a07035131/"
            titleig="kaniacinari"
            titlefb="kania.sinamo"
            titlelinkedin="kania-cinari-h-sinamo-a07035131"
          />
        </div>
        <div className="m-5">
          <Member
            image="/cc.png"
            name="Avianita Rahmawati"
            departement="Chief Financial Officer"
            ig="https://www.instagram.com/avooi/"
            fb="https://www.facebook.com/avooi"
            linkedIn="https://www.linkedin.com/in/avianita-rahmawati/"
            titleig="avooi"
            titlefb="avooi"
            titlelinkedin="avianita-rahmawati"
          />
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}
