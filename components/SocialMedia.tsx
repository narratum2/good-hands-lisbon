import Link from 'next/link'
import { Instagram, Send } from 'lucide-react'

export default function SocialMedia() {
  const socials = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/goodhandslisbon',
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/goodhandslisbon',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/goodhandslisbon',
      icon: <Send className="w-5 h-5" />,
    },
  ]

  return (
    <div className="flex justify-center items-center gap-4">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-gold text-ink hover:bg-gold-dark transition-all duration-300 hover:scale-110"
          aria-label={`Follow Good Hands on ${social.name}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

