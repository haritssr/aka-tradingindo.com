import Image from "next/image";
import Link from "next/link";
export default function Blog(props) {
  return (
    <div className="w-5/6 h-auto m-5 mx-auto overflow-hidden transition duration-300 transform rounded-lg shadow-md hover:scale-105 hover:shadow-xl">
      <Image
        className="hidden sm:block"
        src={`${props.image}`}
        width={1080}
        height={605}
        priority
      />
      <div className="flex flex-col h-full p-5 -my-2 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="font-serif text-2xl font-medium">
          <Link href={`${props.linkBlog}`}>
            <a>{props.title}</a>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between mt-2 mb-1 ">
          <div className="flex flex-row items-center">
            <div className="mr-1 text-sm font-semibold text-gray-400">oleh</div>
            <div>
              <a href="" className="text-sm font-semibold text-gray-600">
                {props.writer}
              </a>
            </div>
          </div>

          <div className="text-sm font-semibold text-gray-400">
            {props.time}
          </div>
        </div>
      </div>
    </div>
  );
}
