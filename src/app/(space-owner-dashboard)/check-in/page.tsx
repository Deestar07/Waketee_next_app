'use client';

import WakateeModal from '@/components/custom-components/WakateeModal';
import { useState } from 'react';

export default function CheckIn() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkinBookingCode, setCheckinBookingCode] = useState<string>('');
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`w-full flex items-center justify-center`}>
        <section
          className={`w-5/6 md:w-2/3 bg-[#FFFFFF] shadow-2xl py-5 px-3 space-y-10`}
        >
          <h1
            className={`text-center font-bold text-[#2B4B1B] text-lg md:text-2xl rounded-md`}
          >
            Check-in guest
          </h1>
          <div className={`space-y-5`}>
            <label
              htmlFor='checkinBookingCode'
              className={`mb-1.5 text-[#2B4B1B] text-sm md:text-base font-medium`}
            >
              Enter check-out code
            </label>
            <input
              className={`w-full p-2 border outline-none rounded-sm focus:border-[#2B4B1B] text-sm md:text-base`}
              id='checkinBookingCode'
              placeholder='ABC123'
              type='text'
              value={checkinBookingCode}
              onChange={(e) => setCheckinBookingCode(e.target.value)}
            />

            <button
              className={`w-full p-2 border-none outline-none rounded-sm bg-[#2B4B1B] text-[#FFFFFF] text-sm md:text-base`}
            >
              CONTINUE
            </button>
          </div>
        </section>
      </div>

      <WakateeModal
        isModalOpen={isModalOpen}
        modalMobileWidth={`w-5/6`}
        modalWidth={`w-1/2`}
        onClose={closeModal}
      >
        <h3>Hello World</h3>
      </WakateeModal>
    </>
  );
}
