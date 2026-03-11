'use client'

import Link from 'next/link'
import { Instagram, Send, ArrowUpRight } from 'lucide-react'
import EmailCaptureWidget from './EmailCaptureWidget'

const footerLinks = {
  services: [
    { href: '/services', label: 'All Services' },
    { href: '/premium/weddings', label: 'Weddings' },
    { href: '/premium/retreats', label: 'Retreats' },
    { href: '/premium/corporate', label: 'Corporate' },
    { href: '/premium/photoshoots', label: 'Photoshoots' },
    { href: '/premium/membership', label: 'Membership' },
  ],
  neighborhoods: [
    { href: '/chiado', label: 'Chiado' },
    { href: '/principe-real', label: 'Príncipe Real' },
    { href: '/baixa', label: 'Baixa' },
    { href: '/avenida', label: 'Avenida' },
    { href: '/alfama', label: 'Alfama' },
    { href: '/belem', label: 'Belém' },
    { href: '/sintra', label: 'Sintra' },
    { href: '/cascais', label: 'Cascais' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
    { href: '/guides', label: 'Guides' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/faq', label: 'FAQ' },
  ],
  partnerships: [
    { href: '/partnerships', label: 'Hotel Partnerships' },
    { href: '/for-photographers', label: 'For Photographers' },
    { href: '/join-our-team', label: 'Join Our Network' },
    { href: '/ai-info', label: 'For AI Assistants' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-custom">
        {/* Upper section: Brand + Newsletter */}
        <div className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-white/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Brand block */}
            <div className="max-w-md">
              <Link href="/" className="inline-block group mb-8" aria-label="Good Hands Home">
                <span className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                  <span className="text-white group-hover:text-gold transition-colors duration-300">Good</span>
                  <span className="mx-2 text-gold">·</span>
                  <span className="text-white group-hover:text-gold transition-colors duration-300">Hands</span>
                </span>
              </Link>
              <p className="text-white/50 text-base leading-relaxed mb-0 max-w-sm">
                Lisbon&apos;s luxury beauty concierge. We match you with
                personally vetted professionals for hair, makeup, spa,
                and wellness.
              </p>
            </div>

            {/* Newsletter */}
            <div className="lg:justify-self-end w-full max-w-md">
              <EmailCaptureWidget />
            </div>
          </div>
        </div>

        {/* Middle section: Link columns */}
        <div className="py-16 md:py-20 border-b border-white/8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Neighborhoods</h4>
              <ul className="space-y-3">
                {footerLinks.neighborhoods.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Work With Us</h4>
              <ul className="space-y-3">
                {footerLinks.partnerships.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/8">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-200"
                >
                  Book a Service <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact + Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a
                href="mailto:hello@beautysalonlisbon.com"
                className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
              >
                hello@beautysalonlisbon.com
              </a>
              <span className="hidden sm:block text-white/20">|</span>
              <p className="text-sm text-white/30">
                © {new Date().getFullYear()} Good Hands
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/goodhands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://x.com/goodhands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors duration-200"
                aria-label="Follow us on X"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/goodhands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors duration-200"
                aria-label="Join us on Telegram"
              >
                <Send className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Legal */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
