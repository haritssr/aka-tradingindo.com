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
        <ProductCard src='/new/kopi.png' name={t.name.coffeeBean} href='/contact' />
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
      {/* // 1, 2, 3 */}
      <main className='grid max-w-2xl grid-cols-1 gap-5 px-5 mx-auto mt-32 sm:gap-[110px] xs:grid-cols-3 sm:grid-cols-3 lg:px-0'>
        <ProductCard
          src='/coffee/1.png'
          name='Arabica Mount Tilu (Java Preanger)'
          href='/products/arabica-mount-tilu'
          className='sm:w-60 sm:-ml-10'
        />
        <ProductCard
          src='/coffee/2.png'
          name='Arabica Golewa'
          href='/products/arabica-golewa'
          className='sm:w-60 sm:-ml-10'
        />
        <ProductCard
          src='/coffee/3.png'
          name='Robusta Sumedang'
          href='/products/robusta-sumedang'
          className='sm:w-60 sm:-ml-10'
        />
      </main>
      {/* //4, 5 */}
      <main className='grid max-w-5xl grid-cols-1 gap-5 px-5 mx-auto mt-5 lg:px-0 sm:grid-cols-4'>
        <ProductCard
          src='/coffee/9.png'
          name='Arabica & Robusta Gayo'
          href='/products/arabica-robusta-gayo'
          className='sm:col-start-2'
        />
        <ProductCard
          src='/coffee/11.png'
          name='Robusta Ulubelu'
          href='/products/robusta-ulubelu'
          className='sm:col-start-3'
        />
      </main>
    </Layout>
  );
}
