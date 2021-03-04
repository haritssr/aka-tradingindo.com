import { useRouter } from "next/router";
import { EN, ID } from "../translation";
export default function Hero() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="relative mt-20">
      <img
        src="/z.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="es"
      />
      <div className="relative py-10 bg-gray-900 bg-opacity-50">
        <div className="w-full p-10 sm:max-w-2xl ">
          <div className="mb-4 text-3xl font-medium text-center text-white md:text-5xl md:text-left title-font">
            <p className="leading-normal"> {t.hero}</p>
          </div>
          <div className="mb-2 leading-relaxed text-center text-white md:text-left"></div>
          <div className="text-center text-white md:text-left">----------</div>
          <p className="text-center text-white md:text-left">
            Gambier, Candlenut, Cinnamon, Coffee Bean, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
