import Layout from '@/components/Layout';
import WrapperAlone from '@/components/WrapperAlone';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';

export default function ArabicaGolewa() {
  return (
    <Layout
      browserTitle='Arabica Golewa'
      href='/product/arabica-golewa'
      description='AKA Trading Indonesia - Arabica Golewa Page'
    >
      <WrapperAlone
        name='Arabica Golewa'
        imgSrc='/coffee/2.png'
        mapsSrc='/maps/east_nusa_tenggara.png'
      >
        {DataProducts[1].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperAlone>
    </Layout>
  );
}
