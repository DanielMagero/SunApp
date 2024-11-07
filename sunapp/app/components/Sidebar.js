import Link from "next/link";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={closeSidebar}>
        & time;
      </button>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Sidebar;
