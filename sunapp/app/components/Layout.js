"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <button className={styles.openBtn} onClick={openSidebar}>
        &#9776; Open Navigation
      </button>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
