import { useRouter } from "next/router";
import { EN, ID } from "../translation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div className="relative shadow-inner mt-14">
      <Image
        src="/hero.jpg"
        layout="fill"
        className="absolute inset-0 object-cover w-full h-64 bg-opacity-50"
      />
      <section className="relative max-w-5xl py-5 mx-auto ">
        <div className="w-full px-8 py-10 lg:py-14 lg:pl-0 sm:max-w-3xl ">
          <div className="mb-4 text-3xl font-bold text-center text-white bg-black bg-opacity-30 md:text-5xl md:text-left title-font">
            <p className="block leading-normal font-EBGaramond"> {t.hero}</p>
          </div>

          {/* <p className="block text-lg text-white bg-black border-t border-white text-centermt bg-opacity-30 md:text-left font-EBGaramond">
            {t.bahan}
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
