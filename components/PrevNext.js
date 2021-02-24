import Link from "next/link";

export default function PrevNext(props) {
  const style =
    "p-2 mr-2 font-bold text-white bg-blue-500 rounded-lg  border-2 border-blue-500 hover:bg-white hover:text-blue-500";
  return (
    <div className="text-center">
      <Link href={`${props.prev}`}>
        <a className={style}>back</a>
      </Link>

      <Link href={`${props.next}`}>
        <a className={style}>next</a>
      </Link>
    </div>
  );
}
