import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="">
      <div className="overflow-hidden transition-all duration-300 transform rotate-0 bg-white rounded-lg shadow-xl hover:rotate-1 hover:shadow-lg dark:bg-gray-700">
        <div className="p-4 text-xl leading-normal text-gray-700 dark:text-white">
          <svg
            width="45"
            height="36"
            className="mb-5 opacity-25 fill-current text-cyan-500"
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferndis
          nesciunt quasi volup
        </div>
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-green-600">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center justify-between mr-3">
              <div className="w-10 h-10 mr-5">
                <Image
                  className="rounded-full"
                  src="/bb.png"
                  alt="Foto"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="font-sans font-semibold text-white">Someone</div>
            </div>

            <svg
              className="text-white hover:text-white"
              width="33"
              height="32"
              fill="currentColor"
            >
              <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
