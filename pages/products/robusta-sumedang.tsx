import Layout from '@/components/Layout';
import WrapperAlone from '@/components/WrapperAlone';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';

export default function RobustaSumedang() {
  return (
    <Layout
      browserTitle='Robusta Sumedang'
      href='/product/robusta-sumedang'
      description='AKA Trading Indonesia - Robusta Sumedang Page'
    >
      <WrapperAlone name='Robusta Sumedang' imgSrc='/coffee/3.png' mapsSrc='/maps/west_java.png'>
        {DataProducts[2].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperAlone>
    </Layout>
  );
}
