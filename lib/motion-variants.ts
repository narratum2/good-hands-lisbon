import { Variants } from 'framer-motion'

/**
 * GOOD HANDS - Centralized Framer Motion Variants
 * 
 * Animation Philosophy:
 * - Subtle, purposeful, slow
 * - Never distracting from content
 * - Enhances luxury brand perception
 * - Follows boutique hotel/Design Hotels aesthetic
 * 
 * Created: October 13, 2025
 */

/* ===== BASIC FADE VARIANTS ===== */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const fadeInSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== SLIDE VARIANTS ===== */

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== SCALE VARIANTS ===== */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const scaleInSubtle: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== STAGGER VARIANTS ===== */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== HOVER ANIMATIONS (for whileHover) ===== */

export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

export const hoverScaleSubtle = {
  scale: 1.01,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

export const hoverLiftSubtle = {
  y: -2,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

export const hoverRotate = {
  rotate: 2,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

/* ===== TAP ANIMATIONS (for whileTap) ===== */

export const tapScale = {
  scale: 0.98,
}

export const tapScaleSubtle = {
  scale: 0.99,
}

/* ===== PAGE TRANSITIONS ===== */

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const pageTransitionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== MODAL/OVERLAY VARIANTS ===== */

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== DRAWER VARIANTS ===== */

export const drawerFromRight: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const drawerFromLeft: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== NOTIFICATION VARIANTS ===== */

export const notificationSlideIn: Variants = {
  hidden: { opacity: 0, y: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== IMAGE REVEAL VARIANTS ===== */

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const imageZoomOut: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== CUSTOM LUXURY ANIMATIONS ===== */

export const luxuryFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const editorialSlide: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

/* ===== USAGE EXAMPLES ===== */

/*
// Basic usage with slideUp
import { slideUp } from '@/lib/motion-variants'

<motion.div
  variants={slideUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content
</motion.div>

// Stagger container usage
import { staggerContainer, staggerItem } from '@/lib/motion-variants'

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>

// Hover + Tap usage
import { hoverLift, tapScale } from '@/lib/motion-variants'

<motion.button
  whileHover={hoverLift}
  whileTap={tapScale}
>
  Button
</motion.button>

// Page transition usage
import { AnimatePresence } from 'framer-motion'
import { pageTransition } from '@/lib/motion-variants'

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    variants={pageTransition}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {children}
  </motion.div>
</AnimatePresence>
*/
