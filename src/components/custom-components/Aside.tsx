'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '/public/images/wakatee.png';
import {
  LayoutDashboard,
  Hotel,
  HousePlus,
  HandCoins,
  User,
  LogOut,
  ListPlus,
  ListMinus,
  Logs,
} from 'lucide-react';

import { useWakateeContext } from '@/store/WakateeContext';

export default function Aside() {
  const pathName = usePathname();
  const { handleCloseMobileNav } = useWakateeContext();

  return (
    <>
      <div className={`hidden md:flex flex-col items-center justify-between`}>
        <div className={`h-[70px] flex items-center justify-center`}>
          <Link
            href={`/space-owner-dashboard`}
            className={`h-full flex items-center justify-center`}
          >
            <Image
              src={logo}
              width={0}
              height={0}
              alt='logo'
              className={`w-2/3`}
            />
          </Link>
        </div>

        <div className={`w-full py-5 space-y-4`}>
          <Link
            className={`px-5 py-2 font-semibold flex items-center ${
              pathName.startsWith('/space-owner-dashboard')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/space-owner-dashboard`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <LayoutDashboard size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Dashboard
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/listings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/listings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <Hotel size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Listings
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/list-space')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/list-space`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <HousePlus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              List space
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/bookings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/bookings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <Logs size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Bookings
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/account')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/account`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <User size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Account
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/earnings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/earnings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <HandCoins size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Earnings
            </span>
          </Link>
        </div>

        <div className={`w-full py-5 space-y-2`}>
          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName === '/check-in'
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/check-in`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <ListPlus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Check-in
            </span>
          </Link>

          <Link
            className={`px-5 py-2 font-semibold flex items-center  ${
              pathName === '/check-in/check-out'
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/check-in/check-out`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <ListMinus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Check-out
            </span>
          </Link>

          <div
            className={`px-5 py-2 font-semibold flex items-center text-[#FFFFFF] cursor-pointer`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <LogOut size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className={`md:hidden flex flex-col items-center justify-between`}>
        <div className={`w-full py-5 space-y-4`}>
          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center ${
              pathName.startsWith('/space-owner-dashboard')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/space-owner-dashboard`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <LayoutDashboard size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Dashboard
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/listings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/listings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <Hotel size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Listings
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/list-space')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/list-space`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <HousePlus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              List space
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/bookings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/bookings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <Logs size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Bookings
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/account')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/account`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <User size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Account
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName.startsWith('/earnings')
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/earnings`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <HandCoins size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Earnings
            </span>
          </Link>
        </div>

        <div className={`w-full py-5 space-y-2`}>
          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName === '/check-in'
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/check-in`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <ListPlus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Check-in
            </span>
          </Link>

          <Link
            onClick={() => handleCloseMobileNav()}
            className={`px-20 py-2 font-semibold flex items-center  ${
              pathName === '/check-in/check-out'
                ? 'text-[#2B4B1B] bg-[#FFFFFF]'
                : 'text-[#FFFFFF] bg-transparent'
            } `}
            href={`/check-in/check-out`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <ListMinus size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Check-out
            </span>
          </Link>

          <div
            className={`px-20 py-2 font-semibold flex items-center text-[#FFFFFF] cursor-pointer`}
          >
            <span className={`mr-2 flex items-center justify-center`}>
              <LogOut size={18} />
            </span>
            <span
              className={`flex items-center justify-center text-sm md:text-base`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
