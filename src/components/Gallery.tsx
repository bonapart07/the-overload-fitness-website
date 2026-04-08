"use client";
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

export default function Gallery() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="gallery" className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>The <span>Arsenal</span></h2>
      </motion.div>

      <motion.div 
        className={styles.galleryGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={`${styles.imageContainer} ${styles.item1}`} variants={item}>
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80" alt="Premium Gym Main Floor" />
        </motion.div>
        <motion.div className={`${styles.imageContainer} ${styles.item2}`} variants={item}>
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" alt="Free Weights" />
        </motion.div>
        <motion.div className={`${styles.imageContainer} ${styles.item3}`} variants={item}>
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80" alt="Heavy Equipment" />
        </motion.div>
        <motion.div className={`${styles.imageContainer} ${styles.item4}`} variants={item}>
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80" alt="Kettlebells" />
        </motion.div>
        <motion.div className={`${styles.imageContainer} ${styles.item5}`} variants={item}>
          <img src="https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=1200&q=80" alt="Squat Rack" />
        </motion.div>
      </motion.div>
    </section>
  );
}
