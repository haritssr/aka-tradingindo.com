import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product, image, productName }) => {
  return (
    <Link href={`${product}`}>
      <a className='relative block text-center cursor-pointer '>
        <Image
          src={`${image}`}
          width={1000}
          height={1000}
          priority
          className='absolute z-0 object-cover w-full h-full rounded-md'
        />
        <div className='relative z-10 flex items-center justify-center h-full text-center'>
          {productName}
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
