import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';

const contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_ibi2aip', 'contact_form', e.target, 'user_E6WrSXVVfdvAp9k2YeHDO')
      .then(
        result => {
          alert('Message sent successfully');
          console.log(result.text);
        },
        error => {
          console.log('GAGAL', error);
        }
      );
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);
  const navigation =
    'text-gray-600 hover:underline py-4 font-CGaramond lg:px-5 lg:py-0 block text-center';
  const ab =
    'h-10 px-2 placeholder-gray-500  bg-gray-200 rounded  focus:outline-none  w-full  focus:ring focus:ring-1 focus:ring-green-brand  ';

  return (
    <main className='min-h-screen mx-auto '>
      <Head>
        <title>{`${t.nav.contact} ∙ AKA Trading Indonesia`}</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      {/* fixed wrapper */}
      <nav className='fixed top-0 z-20 w-full h-auto px-5 py-2 bg-white md:px-10 font-inter'>
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
            } items-center flex-col lg:flex lg:flex-row lg:justify-end lg:w-2/3 w-full divide-y lg:divide-y-0  divide-gray-500 pt-5 lg:pt-0`}
          >
            <div>
              <Link href='/'>
                <a className='flex items-center justify-between '>
                  <div className={navigation}>{t.nav.home}</div>
                  <div className='lg:hidden'>
                    <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href='/about'>
                <a className='flex items-center justify-between'>
                  <div className={navigation}>{t.nav.about}</div>
                  <div className='lg:hidden'>
                    <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href='/product'>
                <a className='flex items-center justify-between'>
                  <div className={navigation}>{t.nav.product}</div>
                  <div className='lg:hidden'>
                    <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href='/contact'>
                <a className='flex items-center justify-between'>
                  <div className={navigation}>{t.nav.contact}</div>
                  <div className='lg:hidden'>
                    <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
                  </div>
                </a>
              </Link>
            </div>

            {/* Internasionalization button */}
            <article className='flex items-center lg:justify-center '>
              <div className='inline-block'>
                <button
                  className={`${navigation} px-2`}
                  onClick={() => {
                    router.push('/contact', '/', { locale: 'EN' });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className='inline-block'>
                <button
                  className={`${navigation} px-2`}
                  onClick={() => router.push('/contact', '/', { locale: 'ID' })}
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>
      <div className='max-w-4xl px-5 pt-24 mx-auto text-center font-DMSans sm:px-0'>
        <div className='py-3 text-3xl font-semibold'>{t.contactUs}</div>
        <div className='mb-2 sm:mb-0'>{t.contact1}</div>
        <div>{t.contact2}</div>
      </div>
      <main className='grid max-w-5xl grid-cols-1 gap-5 px-5 mx-auto pt-14 lg:grid-cols-2 lg:px-0 md:flex-row'>
        {/* Address + Concact + Maps */}
        <section>
          {/* Address + Contact */}
          <section className='space-y-2 font-sans text-gray-700 rounded-lg '>
            <div className='mb-2 text-xl font-semibold'>Head Office</div>
            <div></div>

            {/* Address */}
            <div className='flex flex-row items-start justify-start p-2'>
              <div>
                <svg
                  className='w-5 h-5 mr-1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              </div>
              <div className='pb-2 -mt-1'>
                QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44, Tanjung Barat, Jagakarsa
                – Jakarta Selatan 12530
              </div>
            </div>

            {/* Contact */}
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              {/* phone number */}
              <div className='flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand hover:bg-gray-100 bg-gray-50'>
                <svg
                  className='w-5 h-5 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>

                <div className=''>081223191932</div>
              </div>

              {/* email */}
              <div className='flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand hover:bg-gray-100 bg-gray-50'>
                <div>
                  <svg
                    className='w-5 h-5 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className=''>
                  <a className='hover:underline' href='mailto:AKAtradingindo@gmail.com'>
                    akatradingindo@gmail.com
                  </a>
                </div>
              </div>

              {/* fb  */}
              <a
                href='https://www.facebook.com/AKA-Trading-Indonesia-108120014669787'
                target='_blank'
              >
                <div className='flex flex-row items-center p-2 border rounded-lg border-[#1777F2] hover:bg-gray-100 bg-gray-50'>
                  <FaFacebookSquare color='#1777F2' size={20} />
                  <div className='ml-2 text-sm font-bold text-[#1777F2]'>AKA Trading Indonesia</div>
                </div>
              </a>

              {/* ln */}
              <a href='https://www.linkedin.com/company/aka-tradingindo' target='_blank'>
                <div className='flex flex-row items-center p-2 border rounded-lg border-[#2867B2] hover:bg-gray-100 bg-gray-50'>
                  <FaLinkedin color='#2867B2' size={20} />
                  <div className='ml-2 text-sm font-bold text-[#2867B2]'>AKA Trading Indonesia</div>
                </div>
              </a>

              {/* ig  */}
              <a href='https://www.instagram.com/akatradingindo' target='_blank'>
                <div className='flex flex-row items-center p-2 border rounded-lg border-[#1777F2] hover:bg-gray-100 bg-gray-50'>
                  <AiFillInstagram color='#EC4899' size={20} />
                  <div className='ml-2 text-sm font-bold text-transparent bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 bg-clip-text'>
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* maps */}
          <div>
            <iframe
              className={`w-full mt-5 h-80`}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.656300461767!2d106.83740851413296!3d-6.30880499543414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2b940afd89%3A0x6186386a52b3ee04!2sQP%20OFFICE!5e0!3m2!1sen!2sid!4v1613370918140!5m2!1sen!2sid'
              allowFullScreen
              aria-hidden='false'
              tabIndex={0}
            />
          </div>
        </section>

        {/* enquiry */}
        <form
          className='h-auto p-5 space-y-5 bg-gray-100 border rounded border-green-brand md:mx-auto md:mr-5'
          onSubmit={sendEmail}
        >
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            <input
              placeholder={`${t.form.fullName}`}
              className={ab}
              id='nama'
              type='text'
              name='full_name'
            />

            <div className=''>
              <input
                placeholder={`${t.form.companyName}`}
                className={ab}
                id='nama'
                type='text'
                name='company_Name'
              />
            </div>

            <input
              placeholder={`${t.form.email}`}
              className={ab}
              id='email'
              type='email'
              name='email'
            />
            <div className=''>
              <input
                placeholder={`${t.form.phoneNumber}`}
                className={ab}
                id='Email'
                type='tel'
                name='phone_number'
              />
            </div>
          </div>

          <input
            placeholder={`${t.form.address}`}
            className={ab}
            id='Address'
            type='text'
            name='address'
          />

          <input
            placeholder={`${t.form.country}`}
            className={ab}
            id='Country'
            type='text'
            name='country'
          />

          <input
            placeholder={`${t.form.subject}`}
            className={ab}
            id='Subject'
            type='text'
            name='subject'
          />

          <textarea
            className='w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md focus:ring-1 focus:outline-none focus:ring-green-brand '
            name='message'
            id='message'
            cols='20'
            rows='5'
          ></textarea>

          {/* send button */}
          <div className='flex justify-end '>
            <input
              className='h-10 px-5 font-semibold text-white rounded cursor-pointer bg-green-brand hover:bg-opacity-90'
              type='submit'
              value={`${t.form.send}`}
            />
          </div>
        </form>
      </main>
      <Footer />
    </main>
  );
};

export default contact;
