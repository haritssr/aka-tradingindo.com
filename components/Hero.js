import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  return (
    <div className='relative max-w-5xl pl-5 mx-auto mt-16 mb-10 shadow-inner'>
      <Image
        src='/new/hero.jpg'
        layout='fill'
        className='absolute inset-0 object-cover w-full bg-opacity-50 h-72'
      />
      <section className='relative max-w-5xl py-10 pl-0 pr-5 mx-auto md:px-5 '>
        <div className='w-full py-5 lg:py-14 sm:max-w-2xl '>
          <div className='p-5 text-3xl font-bold text-center text-white bg-black bg-opacity-50 rounded-md md:text-4xl md:text-left title-font'>
            <p className='block tracking-wide font-CGaramond'>{t.hero}</p>
          </div>
        </div>
        <div className=''>
          <Link href='/contact'>
            <a className='block w-full px-5 py-3 tracking-wider text-center text-white bg-gray-700 rounded-full sm:w-72 hover:bg-gray-600 '>
              {t.connectWithUs}
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
