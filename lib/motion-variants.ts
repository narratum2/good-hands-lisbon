/**
 * Centralized Framer Motion Animation Variants
 * Consistent animations across the entire application
 */

import { Variants } from 'framer-motion'

// Button animations
export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
}

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
}

// Fade in animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Slide animations
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

// Card hover effect
export const cardHover = {
  y: -4,
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3 },
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Page transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
}

// Modal animations
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
}

// Parallax effect
export const parallax = (speed: number = 0.5) => ({
  y: [-30 * speed, 30 * speed],
  transition: {
    repeat: Infinity,
    repeatType: 'reverse' as const,
    duration: 10,
    ease: 'easeInOut',
  },
})

// Pulse effect
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Rotate effect
export const rotate = {
  rotate: 360,
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  },
}

// Bounce effect
export const bounce = {
  y: [0, -10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeOut',
  },
}
