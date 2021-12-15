import Image from 'next/image';

const WrapperAlone = ({ children, name, imgSrc, mapsSrc }) => {
  return (
    <div className='flex flex-col-reverse max-w-5xl gap-10 px-5 mx-auto mt-32 text-gray-700 md:flex-row lg:px-10'>
      {/* Nama, Data, Maps */}
      <div className='flex-col space-y-5 sm:w-2/3'>
        <div className='text-4xl font-semibold font-DMSans'>{name}</div>
        <div className='space-y-1 text-lg text-gray-600 font-DMSans'>{children}</div>
        <div className=''>
          <Image src={mapsSrc} alt='Maps' width='1700' height='623' />
        </div>
      </div>
      {/* Gambar */}
      <div className='h-full sm:w-1/3'>
        <Image
          src={imgSrc}
          alt={name}
          height='2048'
          width='1365'
          objectFit='cover'
          className='p-1 rounded-md shadow-md'
        />
      </div>
    </div>
  );
};

export default WrapperAlone;
