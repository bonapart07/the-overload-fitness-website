"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className={styles.heroSection}>
      {/* Dark gradient accent */}
      <div className={styles.gradientBg} />
      
      <div className={styles.container}>
        {/* Left Side: Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            <motion.span 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ display: 'block' }}
            >
              BUILD POWER.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }} // delayed appearing
              className={styles.highlight}
            >
              BREAK LIMITS.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 1.6 }} // appear after headlines
            className={styles.subheading}
          >
            The ultimate strength training experience in Guwahati.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 2.2 }} // button appears last
            className={styles.ctaWrapper}
          >
            <a 
              href="https://wa.me/919957694990?text=I%20want%20to%20join%20The%20Overload%20Fitness" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              ENTER THE GYM
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Visual Placeholder for global 3D Scene */}
        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ y: yParallax }} // subtle parallax effect on scroll
        >
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 3.0 }}
        style={{ opacity: opacityFade }}
      >
        <span>SCROLL</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <MousePointer2 size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
