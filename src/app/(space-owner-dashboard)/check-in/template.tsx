import * as motion from 'motion/react-client';

type Props = {
  children: React.ReactNode;
};

export default function CheckinCheckoutTemplate({ children }: Props) {
  const transition = {
    duration: 0.8,
    delay: 1,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const initial = { y: 100, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
