import Image from 'next/image';

export default function OurProducts() {
  return (
    <>
      <div className='pt-10 pb-5 text-3xl font-semibold text-center font-DMSans'>Our Products</div>
      <div className='grid max-w-5xl grid-cols-1 gap-5 px-5 mx-auto lg:px-0 sm:grid-cols-4'>
        <Image src='/new/gambir.jpg' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/jagung.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/kelapa.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/kemiri.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/kopi.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/pala.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/sayuran.png' width={1000} height={1000} priority className='rounded-md' />
        <Image src='/new/teh.png' width={1000} height={1000} priority className='rounded-md' />
      </div>
    </>
  );
}
