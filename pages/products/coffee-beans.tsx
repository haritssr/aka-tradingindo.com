import Layout from '@/components/Layout';
import WrapperAlone from '@/components/WrapperAlone';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';
import ProductCard from '../../components/ProductCard';

export default function ArabicaMountTilu() {
  return (
    <Layout
      browserTitle='Arabica Mount Tilu'
      href='/product/arabica-mount-tilu'
      description='AKA Trading Indonesia - Arabica Mount Tilu Page'
    >
      <div className='z-0 mt-40 mb-10 text-3xl font-semibold text-center text-gray-700 font-DMSans'>
        Our Products
      </div>

      {/* // 1, 2, 3 */}
      <main className='grid max-w-2xl grid-cols-1 gap-5 px-5 mx-auto  sm:gap-[110px] xs:grid-cols-3 sm:grid-cols-3 lg:px-0'>
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
          src='/coffee/arabica-robusta-gayo.png'
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
