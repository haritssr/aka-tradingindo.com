import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi';

const TopNavLink = ({ href, title }) => {
  const router = useRouter();
  return (
    <div>
      <Link href={href}>
        <a className='flex items-center justify-between'>
          <div
            className={`${
              router.asPath === href ? 'underline' : 'text-gray-600'
            } hover:underline py-4 font-CGaramond lg:px-5 lg:py-0 block font-medium text-center text-lg`}
          >
            {title}
          </div>
          <div className='lg:hidden'>
            <HiOutlineChevronRight className='w-5 h-5 text-gray-600' />
          </div>
        </a>
      </Link>
    </div>
  );
};
export default TopNavLink;
