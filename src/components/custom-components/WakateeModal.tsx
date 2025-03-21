import { X } from 'lucide-react';
import * as motion from 'motion/react-client';

type WakateeModalProps = {
  isModalOpen: boolean;
  modalWidth: string;
  modalMobileWidth: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function WakateeModal({
  isModalOpen,
  onClose,
  modalWidth,
  modalMobileWidth,
  children,
}: WakateeModalProps) {
  const transition = {
    duration: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const initial = { scale: 0 };
  const animate = { scale: 1 };
  if (!isModalOpen) return null;

  return (
    <div className='fixed z-50 inset-0 flex justify-center items-center'>
      {/* Backdrop */}
      <div className='w-full absolute inset-0 bg-[#2B4B1B] opacity-75 backdrop-blur-sm'></div>

      {/* Modal Content */}
      <div
        className={`relative bg-white ${modalMobileWidth} md:${modalWidth} py-3 px-5 rounded-lg z-10`}
      >
        <div className={`flex items-center justify-end`}>
          <span onClick={onClose} className='cursor-pointer'>
            <X size={20} />
          </span>
        </div>

        <section>{children}</section>
      </div>
    </div>
  );
}
