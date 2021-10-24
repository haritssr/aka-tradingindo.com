import { useRouter } from 'next/router';
import { EN, ID } from '../../translation';
import ProductCard from '../../components/ProductCard';
import Layout from '../../components/Layout';

export default function Product() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  const ProductData = [
    { id: '1', src: '/new/gambir.jpg', name: t.name.gambier, href: '/product/gambier' },
    { id: '2', src: '/new/kemiri.png', name: t.name.candlenut, href: '/product/candleNut' },
    { id: '3', src: '/new/kopi.png', name: t.name.coffeeBean, href: '/contact' },
    { id: '4', src: '/new/jagung.png', name: t.name.corn, href: '/contact' },
    { id: '5', src: '/new/teh.png', name: t.name.tea, href: '/contact' },
    { id: '6', src: '/new/pala.png', name: t.name.pala, href: '/contact' },
    { id: '7', src: '/new/kelapa.png', name: t.name.coconut, href: '/contact' },
    { id: '8', src: '/new/sayuran.png', name: t.name.sayuran, href: '/contact' },
  ];
  return (
    <Layout
      browserTitle={t.nav.product}
      href='/product'
      description={`AKA Trading Indonesia ${t.nav.product} Page`}
    >
      <main className='z-0 grid max-w-5xl grid-cols-1 gap-5 px-5 pt-32 mx-auto lg:px-0 sm:grid-cols-4'>
        {ProductData.map(a => (
          <div className='mb-5 sm:mx-0' key={a.id}>
            <ProductCard image={a.src} productName={`${a.name}`} href={a.href} />
          </div>
        ))}
      </main>
    </Layout>
  );
}
