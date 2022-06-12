/* eslint-disable @next/next/no-img-element */
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CustomLink from "./CustomLink";
import styles from "./Header.module.scss";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarHandler = () => setSidebarOpen((state) => !state);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.logo}
          src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
          alt="logo"
        />
      </Link>

      <nav className={styles.nav__menu}>
        <CustomLink className={styles.navlink} href="">
          Model S
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Model 3
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Model X
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Model Y
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Solar Roof
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Solar Panels
        </CustomLink>
      </nav>

      <div className={styles.nav__right}>
        <CustomLink className={styles.navlink} href="">
          Shop
        </CustomLink>
        <CustomLink className={styles.navlink} href="">
          Account
        </CustomLink>
        <button className={styles.menu} onClick={toggleSidebarHandler}>
          Menu
        </button>
      </div>

      <AnimatePresence>
        {sidebarOpen && <Sidebar toggleSidebar={toggleSidebarHandler} />}
      </AnimatePresence>
    </header>
  );
};
export default Header;
