import Breadcomb from "../components/Breadcomb";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PrevNext from "../components/PrevNext";
export default function contact() {
  const ab =
    "h-10 px-2 mb-5 placeholder-gray-400 bg-gray-200 rounded-md shadow-inner focus:ring-2 focus:outline-none focus:ring-green-400 w-full ";
  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Nav title="Contact"></Nav>

      <div className="mx-auto">
        <Breadcomb name="CONTACT" />
      </div>

      <div className="h-auto max-w-xl p-5 m-5 rounded-lg shadow-md md:mx-auto bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mb-5 text-xl font-semibold text-center text-gray-500">
          Enquiry
        </div>
        <input placeholder="Full Name " className={ab} id="nama" type="text" />

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

        <input placeholder="Address" className={ab} id="Address" type="text" />

        <input placeholder="Country " className={ab} id="Country" type="text" />

        <input placeholder="Subject " className={ab} id="Subject" type="text" />

        <textarea
          className="w-full p-5 placeholder-gray-500 bg-gray-200 rounded-md shadow-inner focus:ring-2 focus:outline-none focus:ring-green-400"
          name=""
          id="message"
          cols="20"
          rows="5"
        ></textarea>

        <button className="w-full h-10 px-5 mt-5 font-bold text-white transition duration-300 transform bg-green-500 border-t-2 border-green-400 rounded-lg shadow-md hover:bg-green-500 hover:scale-90 hover:shadow-inner">
          Submit
        </button>
      </div>
      <br />
      <br />
      <br />
      <PrevNext prev="/team" next="/" />
      <Footer />
    </div>
  );
}
