'use client';

import { X } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function ListSpace() {
  return (
    <section className={`px-3 py-3 md:px-10 md:py-8 space-y-5`}>
      <div className={`flex items-center justify-between`}>
        <div
          className={`flex items-center justify-between font-bold text-[#101010] text-2xl md:text-3xl`}
        >
          <h2>List Space</h2>
        </div>

        <div className={``}>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: '#2B4B1B',
              color: '#FFFFFF',
              transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
            }}
            className={`flex items-center justify-between space-x-2 bg-transparent py-3 px-6 text-[#2B4B1B] border border-[#2B4B1B] font-semibold text-xs md:text-sm rounded-md`}
          >
            <span>
              <X size={14} />
            </span>
            <span>Cancel</span>
          </motion.button>
        </div>
      </div>

      <div className={`h-[65dvh]`}>
        <form className={`custom_scrollable_container space-y-6`}>
          {/* GENERAL INFORMATION */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              General information
            </h3>

            <div className={`space-y-2 text-sm md:text-base font-normal`}>
              <label htmlFor='spaceTitle' className={``}>
                Space title
              </label>
              <div className={`bg-[#EFEFEF] border rounded-md`}>
                <input
                  className={`w-full h-full p-2 md:p-2.5 bg-transparent rounded-md`}
                  id='spaceTitle'
                  placeholder='e.g Luxe Homes Presidential 2 Bedroom apartment'
                />
              </div>
            </div>

            <div className={`space-y-2 text-sm md:text-base font-normal`}>
              <label htmlFor='spaceCategories' className={``}>
                Space Category
              </label>
              <div className={`bg-[#EFEFEF] border rounded-md`}>
                <select
                  className={`w-full h-full p-2 md:p-2.5 bg-transparent rounded-md`}
                  id='spaceCategories'
                >
                  <option>Select a Category</option>
                  <option>Apartments</option>
                  <option>Event space</option>
                  <option>Hotel</option>
                  <option>Warehouse</option>
                </select>
              </div>
            </div>

            <div className={`space-y-2 text-sm md:text-base font-normal`}>
              <label htmlFor='spaceDescription' className={``}>
                Description
              </label>
              <div className={`bg-[#EFEFEF] border rounded-md`}>
                <textarea
                  className={`w-full h-full p-2 md:p-2.5 bg-transparent rounded-md`}
                  id='spaceDescription'
                  placeholder='Type space description here'
                ></textarea>
              </div>
            </div>
          </section>

          {/* LOCATION */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              Location
            </h3>

            <div className={`space-y-2 text-sm md:text-base font-normal`}>
              <label htmlFor='spaceAddress' className={``}>
                Address
              </label>
              <div className={`bg-[#EFEFEF] border rounded-md`}>
                <input
                  className={`w-full h-full p-2 md:p-2.5 bg-transparent rounded-md`}
                  id='spaceAddress'
                  placeholder='e.g 20 example street'
                />
              </div>
            </div>
          </section>

          {/* MEDIA */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>Media</h3>
            MEDIA
          </section>

          {/* SPACE DETAILS */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              Space details
            </h3>
          </section>

          {/* SPACE AVAILABILITY */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              Space availability
            </h3>
            SPACE AVAILABILITY
          </section>

          {/* PRICE */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>Price</h3>
            PRICE
          </section>

          {/* RULES */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>Rules</h3>
            RULES
          </section>

          {/* STATUS */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              Status
            </h3>
            STATUS
          </section>

          {/* LISTING COMPLETION */}
          <section
            className={`bg-[#FFFFFF] shadow-md rounded-md py-6 px-4 space-y-4`}
          >
            <h3 className={`mb-4 font-semibold text-base md:text-lg`}>
              Listing completion
            </h3>
            LISTING COMPLETION
          </section>
        </form>
      </div>
    </section>
  );
}
