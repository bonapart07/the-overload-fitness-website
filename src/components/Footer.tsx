"use client";
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* FINAL CTA SECTION */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.ctaTitle}>READY TO <span>COMMIT?</span></h2>
          <p className={styles.ctaSubtitle}>
            Join The Overload Fitness today. Message us to schedule your first elite session.
          </p>
          <a href="https://wa.me/919957694990?text=I%20want%20to%20join%20The%20Overload%20Fitness" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            <MessageCircle size={24} />
            Join on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* FOOTER BOTTOM */}
      <div className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h4>THE OVERLOAD FITNESS</h4>
            <p>Guwahati's most premium strength and conditioning sanctuary.</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">Instagram</a>
              &nbsp;&nbsp;&bull;&nbsp;&nbsp;
              <a href="#" className={styles.socialIcon} aria-label="Youtube">YouTube</a>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Visit Us</h4>
            <p className="flex items-center gap-2"><MapPin size={16}/> GS Road, Guwahati, Assam</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +91 99576 94990</p>
            <p className="flex items-center gap-2"><Mail size={16}/> hello@overloadfitness.in</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Hours</h4>
            <p>Monday - Friday: 5:00 AM - 10:00 PM</p>
            <p>Saturday: 6:00 AM - 8:00 PM</p>
            <p>Sunday: 7:00 AM - 12:00 PM</p>
          </div>
        </div>
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} The Overload Fitness. All rights reserved. Built for Elite Performance.
        </div>
      </div>
    </footer>
  );
}
