import styles from "./Sidebar.module.css";

interface SidebarProps {
  user?: { name: string; avatar: string } | null;
}

export const Sidebar = ({ user }: SidebarProps) => {
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
        {user ? (
          //authorised
          <div className={styles.userProfile}>
            <img src={user.avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.logout}>Вийти</span>
            </div>
          </div>
        ) : (
          //unauthorised
          <button className={styles.loginBtn}>Увійти</button>
        )}
      </div>
    </div>
  );
};
