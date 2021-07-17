import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { EN, ID } from '../translation';

export default function AboutUs() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  return (
    <div className='grid max-w-5xl grid-cols-1 gap-5 px-5 py-5 mx-auto my-5 border-t border-b border-gray-500 sm:grid-cols-4 sm:px-0'>
      <a href='https://www.instagram.com/akatradingindo' target='_blank'>
        <Image src='/new/1.png' width={1000} height={1000} priority className='rounded-md' />
      </a>
      <a href='https://www.instagram.com/akatradingindo' target='_blank'>
        <Image src='/new/2.png' width={1000} height={1000} priority className='rounded-md' />
      </a>
      <a href='https://www.instagram.com/akatradingindo' target='_blank'>
        <Image src='/new/3.png' width={1000} height={1000} priority className='rounded-md' />
      </a>
      <div className='flex flex-col justify-between space-y-5 sm:space-y-0'>
        <div className='text-2xl font-medium font-DMSans'>About us</div>
        <div className="text-gray-700">{t.aboutUsHomePage}</div>
        <Link href='/about'>
          <a className='block px-10 py-2 text-center text-white bg-gray-700 rounded-full hover:opacity-90'>
            read more
          </a>
        </Link>
      </div>
    </div>
  );
}
