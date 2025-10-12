'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface FullWidthImageBreakProps {
  image: string
  alt: string
  overlayText?: string
  overlaySubtext?: string
  height?: 'small' | 'medium' | 'large'
  parallax?: boolean
}

export default function FullWidthImageBreak({
  image,
  alt,
  overlayText,
  overlaySubtext,
  height = 'medium',
  parallax = true,
}: FullWidthImageBreakProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const heightClasses = {
    small: 'h-[40vh]',
    medium: 'h-[60vh]',
    large: 'h-[80vh]',
  }

  return (
    <section
      ref={ref}
      className={`relative w-full ${heightClasses[height]} overflow-hidden`}
    >
      {/* Parallax Image */}
      <motion.div
        style={parallax ? { y } : {}}
        className="absolute inset-0 w-full h-[120%]"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/40" />

      {/* Optional Text Overlay */}
      {(overlayText || overlaySubtext) && (
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {overlayText && (
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                {overlayText}
              </h2>
            )}
            {overlaySubtext && (
              <p className="text-lg md:text-xl text-white/90">
                {overlaySubtext}
              </p>
            )}
          </motion.div>
        </div>
      )}

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  )
}

