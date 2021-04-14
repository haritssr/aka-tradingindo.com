import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import Image from "next/image";

function team() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="min-h-screen mx-auto border-t-2 border-white dark:bg-gray-bkg">
      <Nav title={` ${t.nav.team} | AKA Trading Indonesia`}></Nav>
      <div className="z-10 w-full px-5 py-3 mx-auto mt-24 font-semibold text-center text-gray-600 dark:text-gray-500">
        TEAM
      </div>
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

function Member(props) {
  return (
    <div className="w-3/4 h-auto mx-auto text-center  transition duration-300 ease-in-out transform shadow-lg bg-green-1000   rounded-2xl hover:scale-105 hover:shadow-2xl">
      <div className="p-5">
        <div className=" rounded-full  h-[150px] w-[150px] mx-auto my-5">
          <Image
            className="rounded-full "
            src={`${props.image}`}
            alt="Foto"
            width="150px"
            height="150px"
            priority
          />
        </div>
        <div className="text-lg font-bold text-gray-200">{props.name}</div>
        <div className="text-sm  text-gray-300">{props.departement}</div>
        <div className="flex flex-row items-center justify-center mt-5 space-x-5">
          {/* IG */}
          <a target="_blank" rel="noopener noreferrer" href={`${props.ig}`}>
            <div className="h-8 w-8 ">
              <Image src="/igc.svg" width="100" height="100" priority />
            </div>
          </a>

          {/* FB */}
          <a target="_blank" rel="noopener noreferrer" href={`${props.fb}`}>
            <div className="h-8 w-8">
              <Image src="/fbc.svg" width="100" height="100" priority />
            </div>
          </a>

          {/* linkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${props.linkedIn}`}
          >
            <div className="h-8 w-8">
              <Image src="/lnc.svg" width="100" height="100" priority />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default team;
