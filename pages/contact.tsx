import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AddressIcon, ContactIcon, EmailIcon } from '../components/icons-contact';
import Layout from '../components/Layout';
import emailjs from 'emailjs-com';

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
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

  const ab =
    'px-2 py-1.5 placeholder-gray-500  bg-gray-200 rounded focus:outline-none  w-full  focus:ring focus:ring-1 focus:ring-green-brand';
  return (
    <Layout
      browserTitle={t.nav.contact}
      href='/contact'
      description={`AKA Trading Indonesia ${t.nav.contact} Page`}
    >
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
            {/* Address */}
            <div className='mb-2 text-xl font-semibold text-gray-700'>Head Office</div>
            <div className='flex flex-row items-start justify-start p-2'>
              <AddressIcon />

              <div className='pb-2 -mt-1'>
                QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44, Tanjung Barat, Jagakarsa
                – Jakarta Selatan 12530
              </div>
            </div>
            {/* Contact */}
            <div className='mb-2 text-xl font-semibold'>{t.contactSocialMedia}</div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              {/* phone number */}
              <a
                href='tel:089612631275'
                className='flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand hover:bg-gray-100 bg-gray-50'
              >
                <ContactIcon />
                <div>089612631275</div>
              </a>

              {/* email */}
              <div className='flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand hover:bg-gray-100 bg-gray-50'>
                <EmailIcon />
                <a href='mailto:AKAtradingindo@gmail.com'>akatradingindo@gmail.com</a>
              </div>

              {/* fb  */}
              <a
                href='https://www.facebook.com/AKA-Trading-Indonesia-108120014669787'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex flex-row items-center p-2 border rounded-lg border-[#1777F2] hover:bg-gray-100 bg-gray-50'>
                  <FaFacebookSquare color='#1777F2' size={20} />
                  <div className='ml-2 text-sm font-bold text-[#1777F2]'>AKA Trading Indonesia</div>
                </div>
              </a>

              {/* ln */}
              <a
                href='https://www.linkedin.com/company/aka-tradingindo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex flex-row items-center p-2 border rounded-lg border-[#2867B2] hover:bg-gray-100 bg-gray-50'>
                  <FaLinkedin color='#2867B2' size={20} />
                  <div className='ml-2 text-sm font-bold text-[#2867B2]'>AKA Trading Indonesia</div>
                </div>
              </a>

              {/* ig  */}
              <a
                href='https://www.instagram.com/akatradingindo'
                target='_blank'
                rel='noopener noreferrer'
              >
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
          <div className='mt-5 mb-2 text-xl font-semibold text-gray-700'>{t.officeLocation}</div>
          <div>
            <iframe
              className='w-full h-80'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.656300461767!2d106.83740851413296!3d-6.30880499543414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2b940afd89%3A0x6186386a52b3ee04!2sQP%20OFFICE!5e0!3m2!1sen!2sid!4v1613370918140!5m2!1sen!2sid'
              allowFullScreen
              aria-hidden='false'
              tabIndex={0}
            />
          </div>
        </section>

        {/* enquiry */}
        <form
          className='h-auto p-5 space-y-4 bg-gray-100 border rounded-lg border-green-brand md:mx-auto md:mr-5'
          onSubmit={sendEmail}
        >
          <div className='grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-600' htmlFor='fullName'>
                {t.form.fullName}
              </label>
              <input className={ab} id='fullName' type='text' name='full_name' />
            </div>

            <div>
              <label className='text-gray-600' htmlFor='companyName'>
                {t.form.companyName}
              </label>
              <input className={ab} id='companyName' type='text' name='company_Name' />
            </div>

            <div>
              <label className='text-gray-600' htmlFor='email'>
                {t.form.email}
              </label>
              <input className={ab} id='email' type='email' name='email' />
            </div>

            <div>
              <label className='text-gray-600' htmlFor='phoneNumber'>
                {t.form.phoneNumber}
              </label>
              <input className={ab} id='phoneNumber' type='tel' name='phone_number' />
            </div>
          </div>

          <div>
            <label className='text-gray-600' htmlFor='Address'>
              {t.form.address}
            </label>
            <input className={ab} id='Address' type='text' name='address' />
          </div>

          <div>
            <label className='text-gray-600' htmlFor='country'>
              {t.form.country}
            </label>
            <input className={ab} id='country' type='text' name='country' />
          </div>

          <div>
            <label className='text-gray-600' htmlFor='subject'>
              {t.form.subject}
            </label>
            <input className={ab} id='subject' type='text' name='subject' />
          </div>

          <div>
            <label className='text-gray-600' htmlFor='messages'>
              {t.form.message}
            </label>
            <textarea
              className='w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md focus:ring-1 focus:outline-none focus:ring-green-brand '
              name='message'
              id='messages'
              cols={20}
              rows={5}
              placeholder={t.form.textarea}
            ></textarea>
          </div>

          {/* send button */}
          <div className='flex justify-end '>
            <input
              className='h-10 px-5 font-semibold text-white rounded cursor-pointer bg-green-brand hover:bg-opacity-90'
              type='submit'
              value={t.form.send}
            />
          </div>
        </form>
      </main>
    </Layout>
  );
}
