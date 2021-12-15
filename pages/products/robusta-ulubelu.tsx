import Layout from '@/components/Layout';
import WrapperAlone from '@/components/WrapperAlone';
import DaftarIsi from '@/components/DaftarIsi';
import { DataProducts } from 'lib/data';

export default function RobustaUlubelu() {
  return (
    <Layout
      browserTitle='Robusta Ulubelu'
      href='/product/robusta-ulubelu'
      description='AKA Trading Indonesia - Robusta Ulubelu Page'
    >
      <WrapperAlone name='Robusta Ulubelu' imgSrc='/coffee/11.png' mapsSrc='/maps/lampung.png'>
        {DataProducts[10].map(a => (
          <DaftarIsi key={a.point} point={a.point} desc={a.desc} />
        ))}
      </WrapperAlone>
    </Layout>
  );
}
