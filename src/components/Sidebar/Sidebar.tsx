import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>FUTURE ACADEMY</div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}></li>
          <li className={styles.navItem}></li>
          <li className={styles.navItem}></li>
        </ul>
      </nav>
      <div className={styles.sidebarFooter}>
        <span className={styles.footerText}>Навчайтесь у власному темпі</span>
      </div>
    </div>
  );
};
