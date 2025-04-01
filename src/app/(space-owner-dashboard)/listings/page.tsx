'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SlidersHorizontal, Plus, Search } from 'lucide-react';
import ListingsCard from '@/components/custom-components/ListingsCard';

export default function Listings() {
  const router = useRouter();

  const handleViewListing = (id: string) => {
    router.push(`/list-space/${id}`);
  };

  const handleEditListing = (id: string) => {
    router.push(`/list-space/${id}`);
  };

  const handleDeleteListing = (id: string) => {
    console.log(`${id}`);
  };

  return (
    <section className={`px-3 py-3 md:px-10 md:py-8 space-y-5`}>
      <div className={`flex items-center justify-between`}>
        <div
          className={`flex items-center justify-between font-bold text-[#101010] text-2xl md:text-3xl`}
        >
          <h2>Listings</h2>
        </div>

        <div className={``}>
          <Link
            href={`/list-space`}
            className={`flex items-center justify-between space-x-2 bg-[#2B4B1B] py-3 px-6 text-[#FFFFFF] font-semibold text-xs md:text-sm rounded-md`}
          >
            <span>
              <Plus size={14} />
            </span>
            <span>Add Listings</span>
          </Link>
        </div>
      </div>

      <div className={`grid grid-cols-3 md:grid-cols-5 gap-5`}>
        <div className={`col-span-3 md:col-span-3`}>
          <form
            className={`w-full md:w-1/2 bg-[#FFFFFF] border rounded-sm flex items-center justify-between`}
          >
            <button
              className={`w-1/6 flex items-center justify-center bg-transparent active:bg-transparent text-[#2B4B1B]`}
              type='submit'
            >
              <Search size={14} />
            </button>
            <input
              className={`w-5/6 border-none outline-none py-2 px-2`}
              id='searchListings'
              name='searchListings'
              type='text'
              placeholder='Search listings'
            />
          </form>
        </div>

        <div className={`col-span-2 md:col-span-1`}>
          <input
            className={`w-full bg-[#FFFFFF] border rounded-sm outline-none py-2 px-2`}
            id='listigDate'
            name='listigDate'
            type='date'
          />
        </div>

        <div className={`col-span-1 md:col-span-1`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`w-full h-full space-x-3 text-[#2B4B1B] text-xs md:text-sm flex items-center justify-center font-medium bg-[#FFFFFF] border rounded-sm focus:outline-none cursor-pointer`}
              >
                <span>Filter</span>
                <SlidersHorizontal size={12} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`cursor-pointer px-2 space-y-2 w-10`}
            >
              <DropdownMenuItem
                className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
              >
                Location
              </DropdownMenuItem>

              <DropdownMenuItem
                className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
              >
                Categories
              </DropdownMenuItem>

              <DropdownMenuItem
                className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
              >
                Draft
              </DropdownMenuItem>

              <DropdownMenuItem
                className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
              >
                Hidden
              </DropdownMenuItem>

              <DropdownMenuItem
                className={`text-xs md:text-sm font-medium text-[#2B4B1B]`}
              >
                Published
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className={`h-[55dvh]`}>
        <section className={`custom_scrollable_container space-y-5`}>
          <ListingsCard
            address='No. 10, Otun street, Abule-Ijesha, Yaba Lagos Nigeria'
            dateOfListing='March 10th, 2025'
            amount='3500'
            listingId='123409876'
            listingName='Apiangwo lounge'
            numberOfSpace={3}
            status='pending'
            imageUrl=''
            editListing={handleEditListing}
            viewListing={handleViewListing}
            deleteListing={handleDeleteListing}
          />
        </section>
      </div>
    </section>
  );
}
