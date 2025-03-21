'use client';

import Aside from '@/components/custom-components/Aside';
import { X } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useWakateeContext } from '@/store/WakateeContext';
import Header from '@/components/custom-components/Header';

export default function SpaceOwnerDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { handleCloseMobileNav, isMobileNavOpen } = useWakateeContext();

  const transition = {
    duration: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const initial = { left: 0 };
  const animate = { left: '-100vw' };

  return (
    <div className='w-screen h-screen grid grid-cols-[0_1fr] md:grid-cols-[18%_1fr] grid-rows-[70px_1fr]'>
      <header className='col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-center md:justify-end bg-white border-t-4 border-t-[#2B4B1B] shadow-md  z-10'>
        <Header />
      </header>

      <aside className='col-start-1 col-end-2 row-start-1 row-end-3 bg-[#2B4B1B] z-10 hidden md:block'>
        <Aside />
      </aside>

      <main className='col-start-2 col-end-3 row-start-2 row-end-3'>
        <section className={`h-full w-full bg-[#EFEFEF]`}>{children}</section>

        {/* ASIDE CONTAINER FOR MOBILE SCREENS */}
        <motion.div
          initial={isMobileNavOpen ? initial : animate}
          animate={isMobileNavOpen ? initial : animate}
          transition={transition}
          className={`w-full h-screen fixed top-[70px] z-10 flex justify-between  md:hidden sm:hidden`}
        >
          <section className='w-[85%] bg-[#2B4B1B]'>
            {/* <DashboardAsideContainer /> */}
            <Aside />
          </section>

          <section className='w-[15%] bg-[#2B4B1B] opacity-30'>
            <X
              size={42}
              className='mt-6 mx-auto cursor-pointer text-[#FFFFFF] font-extrabold opacity-100'
              onClick={() => handleCloseMobileNav()}
            />
          </section>
        </motion.div>
      </main>
    </div>
  );
}
