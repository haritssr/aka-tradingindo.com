import Image from "next/image";
export default function Content(props) {
  return (
    <div className="rounded-lg bg-gradient-to-br from-green-100 to-green-200 m-5 p-4 h-auto shadow-inner">
      <div className="md:flex md:flex-row">
        <div>
          <Image
            className="rounded-lg shadow-inner "
            src={`${props.image}`}
            alt="Foto"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <br />
        <div className="md:p-4">
          <div className="text-xl font-bold">{props.judul}</div>
          <div className="text-sm font-medium text-gray-500">
            {props.subjudul}
          </div>
          <br />
          <div className="font-serif text-md font-medium text-gray-700leading-snug">
            {props.isi}
          </div>
          <br />
          <div className="text-md font-semibold text-gray-700 leading leading-snug">
            Find me on : {props.findMe}
          </div>
        </div>
      </div>
    </div>
  );
}
