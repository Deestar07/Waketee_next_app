'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from '/public/images/wakatee_logo_green.svg';
import * as motion from 'motion/react-client';

import { AlignJustify, Bell, CircleUserRound } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useWakateeContext } from '@/store/WakateeContext';

export default function Header() {
  const { handleOpenMobileNav } = useWakateeContext();
  const route = useRouter();

  const handleNavigateToProfile = () => {
    route.push('/account');
  };

  return (
    <div
      className={`px-5 w-full h-full flex items-center justify-between md:justify-end  md:w-1/3`}
    >
      <div className={`w-1/4 h-full flex items-center justify-start md:hidden`}>
        <AlignJustify
          size={20}
          className={`cursor-pointer`}
          onClick={() => handleOpenMobileNav()}
        />
      </div>

      <div
        className={`w-2/4 h-full flex items-center justify-center md:hidden`}
      >
        <Link
          href={`/space-owner-dashboard`}
          className={`h-full flex items-center justify-center`}
        >
          <Image
            src={logo}
            width={0}
            height={0}
            alt='logo'
            className={`w-full`}
          />
        </Link>
      </div>

      <div className={`hidden h-full md:flex items-center justify-center`}>
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: '#2B4B1B',
            color: '#FFFFFF',
            transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
          }}
          whileTap={{ scale: 0.9 }}
          className={`py-2 px-6 outline-none border rounded-xl text-[#2B4B1B] text-sm font-medium`}
        >
          Switch to guest
        </motion.button>
      </div>

      <div className={`h-full flex items-center justify-end w-1/5`}>
        <Bell size={20} />
      </div>

      {/* <div className={`w-1/5 h-full flex items-center justify-end`}>
        <CircleUserRound size={20} />
      </div> */}

      <div className={`w-1/5 h-full flex items-center justify-end`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CircleUserRound size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`cursor-pointer px-2 space-y-2 w-10`}>
            <DropdownMenuItem
              onClick={handleNavigateToProfile}
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B] md:hidden`}
            >
              Switch to guest
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
