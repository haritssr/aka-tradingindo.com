import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { EN, ID } from '../../translation';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import Layout from '../../components/Layout';

export default function candleNut() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;

  return (
    <Layout
      browserTitle={t.name.candlenut}
      href='/product/candleNut'
      description={`AKA Trading Indonesia ${t.name.candlenut} Page`}
    >
      <main className='grid max-w-5xl grid-cols-1 p-5 pt-24 mx-auto space-y-3 md:grid-cols-2 font-inter md:pt-20 '>
        {/* Image */}
        <section className='space-y-3 md:p-5 md:px-0'>
          <Image
            className='w-full h-auto '
            src='/new/kemiri.png'
            width={1080}
            height={1200}
            priority
          />
        </section>

        {/* Information */}
        <section className='text-gray-900 md:p-5 '>
          <div className='pl-3 mt-4 mb-2 text-2xl font-bold border-l-4 border-black md:mt-0 md:mb-5 md:text-4xl '>
            {t.candlenut.title}
          </div>

          <section className='flex flex-row items-center justify-between mt-10'>
            {/* next/prev */}
            <article className='flex flex-row justify-start font-semibold'>
              <Link href='/gambier'>
                <a className='px-4 py-1 hover:bg-gray-100'>
                  <HiOutlineChevronLeft size={30} />
                </a>
              </Link>
              <Link href='/gambier'>
                <a className='px-4 py-1 hover:bg-gray-100'>
                  <HiOutlineChevronRight size={30} />
                </a>
              </Link>
            </article>

            {/* Order Button */}
            <Link href='/contact'>
              <a className='px-6 py-2 text-white transform rounded hover:shadow-xl hover:bg-opacity-90 bg-green-brand hover:-translate-y-1'>
                {t.order}
              </a>
            </Link>
          </section>
        </section>
      </main>
    </Layout>
  );
}
