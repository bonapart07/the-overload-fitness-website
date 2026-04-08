"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header} style={{ padding: scrolled ? '1rem 5%' : '1.5rem 5%' }}>
      <Link href="/" className={styles.logo}>
        OVERLOAD<span>.</span>
      </Link>
      
      <nav className={styles.nav}>
        <a href="#ethos" className={styles.navLink}>Ethos</a>
        <a href="#facilities" className={styles.navLink}>Facilities</a>
        <a href="#gallery" className={styles.navLink}>Arsenal</a>
      </nav>

      <a href="https://wa.me/919957694990" target="_blank" rel="noopener noreferrer" className={styles.joinBtn}>
        JOIN NOW
      </a>
    </header>
  );
}
