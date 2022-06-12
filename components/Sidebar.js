import styles from "./Sidebar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import { Fade } from "react-reveal";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <motion.aside
      initial={{ translateX: " 100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: " 100%", opacity: 0 }}
      transition={{ type: "just" }}
      className={styles.container}
    >
      <div className={styles.header}>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          <AiOutlineClose />
        </button>
      </div>

      <Fade right>
        <nav className={styles.navmenu}>
          <CustomLink className={styles.navLink} href="">
            Model S
          </CustomLink>

          <CustomLink className={styles.navLink} href="">
            Model 3
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Model X
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Model Y
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Solar Roof
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Solar Panel
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Existing Inventory
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Used Inventory
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Trade-In
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Test Drive
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Insurance
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Cybertruck
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Roadster
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Semi
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Charging
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Powerwall
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Commercial Energy
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Utilities
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Find Us
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Support
          </CustomLink>
          <CustomLink className={styles.navLink} href="">
            Investor Relations
          </CustomLink>
        </nav>
      </Fade>
    </motion.aside>
  );
};

export default Sidebar;
