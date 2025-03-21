import * as motion from 'motion/react-client';

type Props = {
  children: React.ReactNode;
};

export default function DashboardTemplate({ children }: Props) {
  const transition = {
    duration: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const initial = { x: 500, opacity: 0 };
  const animate = { x: 0, opacity: 1 };

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
