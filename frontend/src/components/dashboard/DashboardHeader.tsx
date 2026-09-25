"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Dashboard.module.css";

export function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeMenu(event: MouseEvent | KeyboardEvent) {
      if (event instanceof KeyboardEvent && event.key === "Escape") setMenuOpen(false);
      if (event instanceof MouseEvent && !menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeMenu);
    return () => { document.removeEventListener("mousedown", closeMenu); document.removeEventListener("keydown", closeMenu); };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="ABC Pay home">
        <Image src="/images/abc-logo.jpg" alt="ABC Pay" width={190} height={200} priority />
        <span>ABC Pay</span>
      </Link>
      <p className={styles.demoLabel}>Individual dashboard <span>Demo data</span></p>
      <div className={styles.menuWrap} ref={menuRef}>
        <button className={styles.accountButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-haspopup="menu">
          <span className={styles.avatar}>AS</span><span className={styles.accountName}>Account</span><span aria-hidden="true">⌄</span>
        </button>
        {menuOpen && <div className={styles.accountMenu} role="menu">
          <p>Demo individual account</p>
          <Link href="/" role="menuitem" onClick={() => setMenuOpen(false)}>Return to home</Link>
        </div>}
      </div>
    </header>
  );
}
