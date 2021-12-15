import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({
  href,
  src,
  name,
  className,
}: {
  href: string;
  src: string;
  name: string;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <a className={`relative w-full h-52 sm:h-60 ${className}`}>
        <Image
          alt='Mountains'
          src={src}
          layout='fill'
          objectFit='cover'
          quality={75}
          className='rounded-md'
          priority
        />
        <div className='absolute flex items-center justify-center w-full h-full text-lg text-center text-white bg-gradient-to-b from-white/0 via-black/10 to-white/0 hover:via-black/20'>
          <div>{name}</div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
