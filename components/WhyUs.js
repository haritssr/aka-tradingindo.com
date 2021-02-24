export default function WhyUs(props) {
  return (
    <div className="rounded-lg h-auto m-3 p-5 border-2 border-gray-200 hover:border-green-400 group">
      <div className="text-gray-800 group-hover:text-green-600 font-bold text-2xl font-sans mb-3">
        {props.judul}
      </div>
      <div className="font-medium group-hover:text-green-400 text-gray-600 font-serif ">
        {props.subjudul}
      </div>
      <div className="text-green-500 group-hover:text-green-500 hover:text-green-300 font-semibold ">
        Check&rarr;
      </div>
    </div>
  );
}
