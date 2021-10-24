import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  return (
    <Layout
      browserTitle={t.nav.about}
      href='/about'
      description={`AKA Trading Indonesia ${t.nav.about} Page`}
    >
      <section className='max-w-5xl px-5 mx-auto lg:px-0'>
        <div className='h-auto max-w-5xl mx-auto mt-16'>
          <Image src='/new/aboutUs.jpg' layout='intrinsic' height={1242} width={4028} priority />
        </div>
        <div className='pt-10 pb-5 text-2xl font-medium text-center font-DMSans'>{t.aboutUs}</div>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          <Image src='/new/y.jpg' width={3024} height={2493} priority />
          <div className='flex flex-col space-y-5 text-xl text-gray-700 font-DMSans'>
            <div>{t.about.one}</div>
            <div>{t.about.two}</div>
            <div>{t.about.three}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
