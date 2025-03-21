import Image from 'next/image';
import listPlaceHolder from '/public/images/house-placeholder.jpg';
import { Pencil, Trash2, Eye } from 'lucide-react';
import * as motion from 'motion/react-client';

type ListingCardProps = {
  imageUrl?: string;
  listingId: string;
  status: string;
  listingName: string;
  amount: string;
  address: string;
  numberOfSpace: number;
  dateOfListing: string;
  viewListing?: (id: string) => {};
  editListing?: (id: string) => {};
  deleteListing?: (id: string) => {};
};

export default function ListingsCard({
  imageUrl,
  listingId,
  address,
  amount,
  dateOfListing,
  listingName,
  numberOfSpace,
  status,
  deleteListing,
  editListing,
  viewListing,
}: ListingCardProps) {
  return (
    <div
      className={`w-full h-[60vh] md:h-[40vh] flex flex-col md:flex-row shadow-md`}
    >
      <section
        className={`w-full md:w-1/3 h-1/3 md:h-full flex items-center justify-center`}
      >
        <Image
          src={imageUrl?.length ? imageUrl : listPlaceHolder}
          alt='image'
          width={0}
          height={0}
          className={`w-full h-full object-cover`}
        />
      </section>

      <section
        className={`w-full md:w-2/3 h-2/3 md:h-full bg-[#FFFFFF] p-5 space-y-2`}
      >
        <div className={`flex items-center justify-between`}>
          <div
            className={`flex items-center justify-start font-semibold text-[#B7B7B7] text-xs md:text-sm`}
          >
            Listing ID: {listingId}
          </div>

          <div className={`flex items-center justify-end`}>
            <span
              className={`py-1 px-4 rounded-3xl flex items-center justify-center text-xs md:text-sm ${
                status === 'pending'
                  ? 'bg-[#E6A4B4] text-[#CE5959]'
                  : 'bg-[#16C47F] text-[#347928]'
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <div className={`font-semibold text-base text-[#101010]`}>
          {listingName}
        </div>

        <div className={`font-bold text-2xl md:text-4xl text-[#101010]`}>
          &#x20A6; {amount}
        </div>

        <div className={`font-normal text-base text-[#101010]`}>{address}</div>

        <div
          className={`flex items-center justify-start font-semibold text-[#B7B7B7] text-xs md:text-sm`}
        >
          Spaces/Rooms: {numberOfSpace}
        </div>

        <div className={`flex items-center justify-between`}>
          <div
            className={`flex items-center justify-start font-semibold text-[#B7B7B7] text-xs md:text-sm`}
          >
            Listed on: {dateOfListing}
          </div>

          <div className={`flex items-center justify-end space-x-3`}>
            <motion.span
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Pencil size={14} />
            </motion.span>

            <motion.span
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={14} />
            </motion.span>

            <motion.span
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Trash2 size={14} />
            </motion.span>
          </div>
        </div>
      </section>
    </div>
  );
}
