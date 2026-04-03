import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>FA</div>

      {/* Burger Menu */}
      <button
        className={`${styles.burger} ${isBurgerOpen ? styles.active : ""}`}
        onClick={toggleBurger}
        aria-label="Toggle menu"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      {/* Mobile Menu */}
      {isBurgerOpen && (
        <nav className={styles.mobileMenu}>
          <ul>
            <li><a href="/">Курси</a></li>
            <li><a href="/">Про нас</a></li>
            <li><a href="/">Контакти</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
