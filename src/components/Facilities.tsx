"use client";
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Users } from 'lucide-react';
import styles from './Facilities.module.css';

export default function Facilities() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="facilities" className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>Our <span>Facilities</span></h2>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.card} variants={item}>
          <div className={styles.iconWrapper}><Dumbbell size={40} /></div>
          <h3 className={styles.cardTitle}>Strength & Hypertrophy</h3>
          <p className={styles.cardDesc}>
            Custom-built Olympic standard lifting platforms, premium barbells, and an extensive range of precision-calibrated plates to push your maximum lifts in a safe, elite environment.
          </p>
        </motion.div>

        <motion.div className={styles.card} variants={item}>
          <div className={styles.iconWrapper}><Activity size={40} /></div>
          <h3 className={styles.cardTitle}>Performance Conditioning</h3>
          <p className={styles.cardDesc}>
            Top-tier cardio machines and dedicated high-intensity interval training zones designed to brutally test and expand your cardiovascular capacity and raw stamina.
          </p>
        </motion.div>

        <motion.div className={styles.card} variants={item}>
          <div className={styles.iconWrapper}><Users size={40} /></div>
          <h3 className={styles.cardTitle}>Elite Coaching</h3>
          <p className={styles.cardDesc}>
            Access to Guwahati`&apos;`s most experienced strength and conditioning coaches, offering bespoke programming, meticulous technique correction, and customized nutrition protocols.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
