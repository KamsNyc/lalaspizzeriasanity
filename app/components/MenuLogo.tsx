import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from './Logo';

function MenuLogo() {
  const badgeAnimation = {
    opacity: 1,
    x: 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={badgeAnimation}
      transition={{ duration: 1.2 }}
    >

      {/* DESKTOP LOGO */}
      <Image
        className="hidden md:flex object-contain"
        src={'/Logo.png'}
        alt='logo'
        width={180}
        height={46}
      />

      {/* MOBILE LOGO */}
      <div className="md:hidden">
      <Logo />
      </div>


    </motion.div>
  );
}

export default MenuLogo;