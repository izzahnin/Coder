import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Nurul Izzah</h1>
      <div className={styles.navmenu}>
        <a className={styles.navitem} href="/">
          Home
        </a>
        <a className={styles.navitem} href="/">
          About
        </a>
        <a className={styles.navitem} href="/">
          Service
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
