import Image from "next/image";
export default function Member(props) {
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
