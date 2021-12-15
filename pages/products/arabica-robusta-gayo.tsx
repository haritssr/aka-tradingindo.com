import Layout from '@/components/Layout';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import WrapperReverse from '@/components/WrapperReverse';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';

export default function ArabicaRobustaGayo() {
  return (
    <Layout
      browserTitle='Kopi Aceh'
      href='/product/kopi-aceh'
      description='AKA Trading Indonesia - Kopi Aceh Page'
    >
      <div className='max-w-5xl px-5 mx-auto text-4xl font-semibold font-DMSans mt-36 lg:px-10'>
        Arabica Gayo
      </div>

      <div className='max-w-2xl px-5 mx-auto my-10'>
        <Image src='/maps/aceh.png' alt='Maps' width='1700' height='623' />
      </div>

      {/* Natural Coffee */}
      <Wrapper imgSrc='/coffee/4.png' imgAlt='Natural Coffee'>
        {DataProducts[3].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </Wrapper>

      {/* Honey Coffee */}
      <WrapperReverse imgSrc='/coffee/5.png' imgAlt='Honey Coffee'>
        {DataProducts[4].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperReverse>

      {/* Wine Coffee */}
      <Wrapper imgSrc='/coffee/6.png' imgAlt='Wine Coffee'>
        {DataProducts[5].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </Wrapper>

      {/* Luwak Coffee */}
      <WrapperReverse imgSrc='/coffee/7.png' imgAlt='Luwak Coffee'>
        {DataProducts[6].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperReverse>

      {/* Arabica Speciality */}
      <Wrapper imgSrc='/coffee/8.png' imgAlt='Arabica Speciality'>
        {DataProducts[7].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </Wrapper>

      <div className='max-w-5xl px-5 mx-auto mb-10 text-4xl font-semibold font-DMSans mt-36 lg:px-10'>
        Robusta Gayo
      </div>

      {/* Robusta Gayo */}
      <WrapperReverse imgSrc='/coffee/8.png' imgAlt='Robusta Gayo'>
        {DataProducts[8].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperReverse>

      {/* Wine Coffe Robusta */}
      <Wrapper imgSrc='/coffee/8.png' imgAlt='Wine Coffe Robusta'>
        {DataProducts[9].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </Wrapper>
    </Layout>
  );
}
