import { useRouter } from 'next/router';
import { EN, ID } from '../../translation';
import ProductCard from '../../components/ProductCard';
import Layout from '../../components/Layout';

export default function Product() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;

  return (
    <Layout
      browserTitle={t.nav.product}
      href='/products'
      description={`AKA Trading Indonesia ${t.nav.product} Page`}
    >
      <div className='z-0 mt-40 mb-10 text-3xl font-semibold text-center text-gray-700 font-DMSans'>
        Our Products
      </div>
      <main className='grid max-w-5xl grid-cols-1 gap-5 px-5 mx-auto mb-10 xs:grid-cols-3 sm:grid-cols-4 lg:px-0'>
        <ProductCard src='/new/kopi.png' name={t.name.coffeeBean} href='/products/coffee-beans' />
        <ProductCard src='/new/kemiri.png' name={t.name.candlenut} href='/contact' />
        <ProductCard src='/new/jagung.png' name={t.name.corn} href='/contact' />
        <ProductCard src='/new/pala.png' name={t.name.pala} href='/contact' />
        <ProductCard  
          src='/new/gambir.jpg'
          name={t.name.gambier}
          href='/contact'
          className='sm:col-start-2'
        />
        <ProductCard
          src='/new/kelapa.png'
          name={t.name.coconut}
          href='/contact'
          className='sm:col-start-3'
        />
      </main>
    </Layout>
  );
}
