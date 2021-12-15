import Image from 'next/image';

const Wrapper = ({ children, imgSrc, imgAlt }) => {
  return (
    <div className='flex flex-col-reverse max-w-5xl gap-10 px-5 mx-auto text-gray-700 mb-14 md:flex-row lg:px-10'>
      <div className='flex-col space-y-5 md:w-1/2'>
        <div className='space-y-1 text-lg text-gray-600 font-DMSans'>{children}</div>
      </div>
      <div className=' md:w-1/2'>
        <Image src={imgSrc} alt={imgAlt} height='422' width='600' objectFit='cover' />
      </div>
    </div>
  );
};

export default Wrapper;
