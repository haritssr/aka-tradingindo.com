import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurProducts from '../components/OurProducts';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { EN, ID } from '../translation';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  return (
    <Layout
      browserTitle={t.nav.home}
      href='/'
      description={`AKA Trading Indonesia ${t.nav.home} Page`}
    >
      <main className='mx-auto '>
        <Hero />
        <AboutUs />
        <OurProducts />
      </main>
    </Layout>
  );
}
