// app/components/ImageLink.tsx
'use client'

import { socialLinks } from '@/lib/utils';
import Image from 'next/image'
import { motion } from 'framer-motion'

const ImageLink = ({ href, icon, name, size = 'w-6 h-6' }: { href: string; icon: string; name: string; size?: string }) => (
  <a href={href} className="contact-item">
    <motion.div className={`${size} relative theme-icon-wrapper`}
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.3 }}
    >
      <Image src={icon} alt={name} className="svg-icon" layout="fill" objectFit="contain" />
    </motion.div>
  </a>
)

export const NavLinks = () => (
  <>
    {socialLinks.slice(0, 3).map((link) => (
      <ImageLink key={link.name} {...link} />
    ))}
  </>
)

export const ContactLinks = () => (
  <>
    {socialLinks.map((link) => (
      <ImageLink key={link.name} {...link} size="w-8 h-8" />
    ))}
  </>
)