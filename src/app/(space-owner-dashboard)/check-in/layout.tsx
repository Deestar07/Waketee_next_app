'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const subPageRoutes = [
  {
    href: '/check-in',
    name: 'CHECK-IN',
  },
  {
    href: '/check-in/check-out',
    name: 'CHECK-OUT',
  },
];

export default function CheckInCheckOutLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className={`w-full h-full space-y-5 px-3 py-3 md:px-10 md:py-8`}>
      <div className={`flex items-center w-full space-x-8 mx-auto py-3`}>
        {subPageRoutes.map((sub, i) => (
          <Link
            key={i}
            href={sub.href}
            className={`flex flex-col justify-between items-center space-y-1 font-medium text-sm md:text-base ${
              sub.href === pathname ? 'text-[#2B4B1B]' : 'text-[#718EBF]'
            }`}
          >
            <div className={``}>{sub.name}</div>
            <div
              className={`w-2/3 h-1 rounded-tl-lg rounded-tr-lg ${
                sub.href === pathname ? 'bg-[#394f2e]' : 'bg-transparent'
              }`}
            ></div>
          </Link>
        ))}
      </div>

      <section className={``}>{children}</section>
    </div>
  );
}
