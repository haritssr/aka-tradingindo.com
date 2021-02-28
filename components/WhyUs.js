export default function WhyUs(props) {
  return (
    <div className="h-auto p-5 m-3 border-2 border-gray-200 rounded-lg dark:border hover:border-green-400 group dark:bg-gray-800 dark:border-gray-500">
      <div className="mb-3 font-sans text-2xl font-bold text-center text-gray-800 group-hover:text-green-600 dark:group-hover:text-white dark:text-white">
        {props.judul}
      </div>
      <div className="font-serif font-medium text-gray-600 group-hover:text-green-400 dark:group-hover:text-white dark:text-white">
        {props.subjudul}
      </div>
    </div>
  );
}
