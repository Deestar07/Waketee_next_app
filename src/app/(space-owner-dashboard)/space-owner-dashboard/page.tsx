'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { SlidersHorizontal, Landmark, HandCoins, Logs } from 'lucide-react';

export default function SpaceOwnerDashboard() {
  return (
    <section className={`px-3 py-3 md:px-10 md:py-8 space-y-5`}>
      <div className={`flex items-center justify-end`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`text-[#2B4B1B] text-xs md:text-sm flex items-center justify-between space-x-1 font-medium py-1.5 px-4 border border-[#2B4B1B] rounded-md focus:outline-none cursor-pointer`}
            >
              <span>Filter</span>
              <SlidersHorizontal size={12} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`cursor-pointer px-2 space-y-2 w-10`}>
            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Today
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Last 7 days
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Last 30 days
            </DropdownMenuItem>

            <DropdownMenuItem
              className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
            >
              Last 365 days
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={`h-[calc(100dvh-30dvh)] space-y-5`}>
        <section className={`custom_scrollable_container space-y-5`}>
          <div className={`grid grid-col-1 md:grid-cols-3 gap-5`}>
            <div
              className={`bg-[#FFFFFF] py-3 px-2 space-y-10 shadow-lg rounded-md`}
            >
              <div className={`flex items-center justify-between`}>
                <div className={`font-bold text-[#8d8888] text-2xl`}>
                  Total Bookings
                </div>
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#2B4B1B] font-bold text-[#FFFFFF]`}
                >
                  <Logs size={18} />
                </div>
              </div>

              <div className={`text-[#2B4B1B] font-bold text-2xl md:text-3xl`}>
                123
              </div>
            </div>

            <div
              className={`bg-[#FFFFFF] py-3 px-2 space-y-10 shadow-lg rounded-md`}
            >
              <div className={`flex items-center justify-between`}>
                <div className={`font-bold text-[#8d8888] text-2xl`}>
                  Total Earnings
                </div>
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#2B4B1B] font-bold text-[#FFFFFF]`}
                >
                  <HandCoins size={18} />
                </div>
              </div>

              <div className={`text-[#2B4B1B] font-bold text-2xl md:text-3xl`}>
                &#x20A6; 123
              </div>
            </div>

            <div
              className={`bg-[#FFFFFF] py-3 px-2 space-y-10 shadow-lg rounded-md`}
            >
              <div className={`flex items-center justify-between`}>
                <div className={`font-bold text-[#8d8888] text-2xl`}>
                  Total Withdrawals
                </div>
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#2B4B1B] font-bold text-[#FFFFFF]`}
                >
                  <Landmark size={18} />
                </div>
              </div>

              <div className={`text-[#2B4B1B] font-bold text-2xl md:text-3xl`}>
                &#x20A6; 123
              </div>
            </div>
          </div>

          {/* <div className={`grid grid-col-1 md:grid-cols-3 gap-5`}>
            <div
              className={`bg-[#F1F1F1] col-span-1 md:col-span-2 py-3 px-2 space-y-10 shadow-lg rounded-md`}
            >
              NO DATA
            </div>

            <div
              className={`bg-[#F1F1F1] col-span-1 py-3 px-2 space-y-10 shadow-lg rounded-md`}
            >
              NO DATA
            </div>
          </div> */}
        </section>
      </div>
    </section>
  );
}
