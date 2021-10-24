import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EN, ID } from '../../translation';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import Layout from '../../components/Layout';

const gambier = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;

  return (
    <Layout
      browserTitle={t.name.gambier}
      href='/product/gambier'
      description={`AKA Trading Indonesia ${t.name.gambier} Page`}
    >
      <main className='max-w-5xl p-5 mx-auto sm:p-0'>
        {/* Grid */}
        <div className='grid grid-cols-1 pt-24 space-y-3 md:pt-20 md:m-5 md:grid-cols-2 md:space-y-0 font-inter'>
          {/* Image */}
          <section className='h-auto '>
            <Image
              className='w-full h-auto '
              src='/new/gambir.jpg'
              width={1080}
              height={805}
              priority
            />
          </section>

          {/* Information */}
          <section className='text-gray-900 md:p-5'>
            <div className='pl-3 mt-4 mb-2 text-2xl font-bold border-l-4 border-black md:mt-0 md:mb-5 md:text-4xl'>
              Gambier (Uncaria Gambir)
            </div>

            <section className='flex flex-row items-center justify-between mt-10'>
              {/* next/prev */}
              <article className='flex flex-row justify-start font-semibold'>
                <Link href='/candleNut'>
                  <a className='px-4 py-1 hover:bg-gray-100'>
                    <HiOutlineChevronLeft size={30} />
                  </a>
                </Link>
                <Link href='/candleNut'>
                  <a className='px-4 py-1 hover:bg-gray-100'>
                    <HiOutlineChevronRight size={30} />
                  </a>
                </Link>
              </article>
              {/* Order Button */}
              <Link href='/contact'>
                <a className='px-6 py-2 font-semibold text-white rounded hover:bg-opacity-80 bg-green-brand hover:-translate-y-1'>
                  {t.order}
                </a>
              </Link>
            </section>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default gambier;
