import Image from "next/image";
import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PrevNext from "../components/PrevNext";
export default function contact() {
  const ab =
    "h-10 px-2 mb-5 placeholder-gray-400 bg-gray-200 rounded-md shadow-inner focus:ring-2 focus:outline-none focus:ring-green-600 w-full dark:placeholder-gray-700";
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="Contact | AKA Trading Indo"></Nav>

      <div className="mx-auto">
        <Breadcomb name="CONTACT" />
      </div>
      <div className="grid grid-cols-1 p-5 sm:grid-cols-2">
        <div className="h-auto max-w-xl p-5 m-5 bg-gray-100 border rounded-lg md:mx-auto dark:bg-gray-800 dark:border-gray-500">
          <div className="mb-5 text-xl font-semibold text-center text-gray-500 dark:text-gray-200">
            Enquiry
          </div>
          <input
            placeholder="Full Name "
            className={ab}
            id="nama"
            type="text"
          />

          <input
            placeholder="Company Name "
            className={ab}
            id="nama"
            type="text"
          />

          <input placeholder="Email " className={ab} id="email" type="email" />

          <input
            placeholder="0812-4456-7xxx "
            className={ab}
            id="Email"
            type="tel"
          />

          <input
            placeholder="Address"
            className={ab}
            id="Address"
            type="text"
          />

          <input
            placeholder="Country "
            className={ab}
            id="Country"
            type="text"
          />

          <input
            placeholder="Subject "
            className={ab}
            id="Subject"
            type="text"
          />

          <textarea
            className="w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md shadow-inner focus:ring-2 focus:outline-none focus:ring-green-600"
            name=""
            id="message"
            cols="20"
            rows="5"
          ></textarea>

          <button className="w-full h-10 px-5 mt-5 font-bold text-white transition duration-300 transform bg-green-600 border-t-2 border-green-400 rounded-lg shadow hover:bg-green-500 hover:scale-90 hover:shadow-inner">
            Submit
          </button>
        </div>
        <div className="p-5">
          <Image className="z-0" src="/conta.svg" width={1080} height={605} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <PrevNext prev="/team" next="/" />
      <Footer />
    </div>
  );
}
