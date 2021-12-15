import Layout from '@/components/Layout';
import WrapperAlone from '@/components/WrapperAlone';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';

export default function ArabicaMountTilu() {
  return (
    <Layout
      browserTitle='Arabica Mount Tilu'
      href='/product/arabica-mount-tilu'
      description='AKA Trading Indonesia - Arabica Mount Tilu Page'
    >
      <WrapperAlone
        name='Arabica Mount Tilu (Java Preanger)'
        imgSrc='/coffee/1.png'
        mapsSrc='/maps/west_java.png'
      >
        {DataProducts[0].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperAlone>
    </Layout>
  );
}
