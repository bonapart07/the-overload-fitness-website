"use client";
import { motion } from 'framer-motion';
import styles from './Ethos.module.css';

export default function Ethos() {
  return (
    <section id="ethos" className={styles.section}>
      <motion.div 
        className={styles.textContent}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.headline}>
          We don't just build muscle.<br />
          We strip away <span className={styles.accent}>weakness.</span>
        </h2>
        <p className={styles.paragraph}>
          The Overload Fitness isn't for the casual gym-goer. It's a sanctuary for those dedicated to pushing boundaries and redefining their physical limits.
        </p>
        <p className={styles.paragraph}>
          Located in the heart of Guwahati, we provide elite conditioning environments tailored precisely for raw strength and peak performance.
        </p>
      </motion.div>
    </section>
  );
}
