export default function DarkModeButton() {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="items-center inline-block p-1 pb-1 m-5 ml-2 text-base font-semibold text-gray-600 rounded-md h-7 w-7 lg:m-0 focus:outline-none "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <svg
        className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
}
