import Footer from './Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import { HiOutlineChevronRight } from 'react-icons/hi';

export default function Layout({ browserTitle, href, children, description }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);
  const type = 'website';
  const style =
    'text-gray-600 hover:underline py-4 font-CGaramond lg:px-5 lg:py-0 block text-center';
  console.log(router.asPath);

  return (
    <main>
      <Head>
        {router.asPath === '/' ? (
          <title>AKA Trading Indonesia</title>
        ) : (
          <title>{browserTitle} - AKA Trading Indonesia</title>
        )}
        <link rel='icon' href='/logo.ico' />
        <meta name='robots' content='follow, index' />
        <meta content={description} name='description' />
        <meta property='og:type' content={type} />
        <meta property='og:site_name' content='HarisLab' />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={browserTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@haritssr' />
        <meta name='twitter:title' content={browserTitle} />
        <meta name='twitter:description' content={description} />
      </Head>

      {/* fixed wrapper */}
      <nav className='fixed top-0 z-20 w-full h-auto px-5 py-2 bg-white font-inter'>
        {/* max-w-5xl */}
        <section className='flex flex-col items-center max-w-5xl mx-auto lg:justify-between lg:flex-row'>
          {/*  */}
          <article className='flex flex-row items-center justify-between w-full lg:justify-start lg:space-x-5 lg:w-1/3'>
            {/* Mobile & Desktop -  Logo */}
            <article className='flex items-center h-20 w-36 justiry-center'>
              <Link href='/'>
                <a className='block'>
                  <Image
                    src='/new/logotulisan.PNG'
                    width={2245}
                    height={913}
                    layout='intrinsic'
                    alt='Logo AKA Trading Indonesia'
                    priority
                  />
                </a>
              </Link>
            </article>

            {/* Mobile - Hamburger Menu - lg:hidden */}
            <article>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='block lg:hidden focus:outline-none'
              >
                <svg
                  className='w-8 h-8 text-green-brand'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {/* Hamburger */}
                  <path
                    className={!isOpen ? 'block' : 'hidden'}
                    strokeWidth={1}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                  {/* X */}
                  <path
                    className={isOpen ? 'block' : 'hidden'}
                    strokeWidth={1}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </article>
          </article>

          {/* Mobile & Desktop - Navigation Link */}
          <article
            className={` ${
              !isOpen ? 'hidden' : 'block'
            } items-center flex-col lg:flex lg:flex-row lg:justify-end lg:w-2/3 w-full divide-y lg:divide-y-0   divide-gray-500 pt-5 lg:pt-0`}
          >
            <TopNavLink href='/' title={t.nav.home} />
            <TopNavLink href='/about' title={t.nav.about} />
            <TopNavLink href='/product' title={t.nav.product} />
            <TopNavLink href='/contact' title={t.nav.contact} />

            {/* Internasionalization button */}
            <div className='flex items-center lg:justify-center '>
              <div className='inline-block'>
                <button
                  className={`${style} px-2`}
                  onClick={() => {
                    router.push({ href }, { href }, { locale: 'EN' });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className='inline-block'>
                <button
                  className={`${style} px-2`}
                  onClick={() => router.push({ href }, { href }, { locale: 'ID' })}
                >
                  ID
                </button>
              </div>
            </div>
          </article>
        </section>
      </nav>

      <section>{children}</section>

      <Footer />
    </main>
  );
}

const TopNavLink = ({ href, title }) => {
  const router = useRouter();
  return (
    <div>
      <Link href={href}>
        <a className='flex items-center justify-between'>
          <div
            className={`${
              router.asPath === href ? 'underline' : 'text-gray-600'
            } hover:underline py-4 font-CGaramond lg:px-5 lg:py-0 block text-center`}
          >
            {title}
          </div>
          <div className='lg:hidden'>
            <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
          </div>
        </a>
      </Link>
    </div>
  );
};
