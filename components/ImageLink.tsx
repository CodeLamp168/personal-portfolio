// app/components/ImageLink.tsx
import Image from 'next/image'

const socialLinks = [
  { name: 'Github', href: 'https://github.com/CodeLamp168', icon: '/svgs/github.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/calebsimdev/', icon: '/svgs/linkedin.svg' },
  { name: 'Gmail', href: 'https://mail.google.com/mail/?view=cm&source=mailto&to=dylansim168@gmail.com&body=This%20is%20mail%20body&su=Hello%20Caleb%20', icon: '/svgs/gmail.svg' },
  { name: 'Discord', href: '#', icon: '/svgs/discord.svg' },
]

const ImageLink = ({ href, icon, name, size = 'w-6 h-6' }: { href: string; icon: string; name: string; size?: string }) => (
  <a href={href} className="contact-item">
    <Image src={icon} alt={name} className={`contact-logo ${size}`} width={32} height={32} />
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