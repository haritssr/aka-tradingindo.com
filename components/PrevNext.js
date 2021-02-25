import Link from "next/link";

export default function PrevNext(props) {
  const style = "p-2 mr-2  text-lg hover:underline ";
  return (
    <div className="text-center">
      <Link href={`${props.prev}`}>
        <a className={style}>prev</a>
      </Link>
{"| "}
      <Link href={`${props.next}`}>
        <a className={style}>next</a>
      </Link>
    </div>
  );
}
