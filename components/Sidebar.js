import styles from "./Sidebar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <motion.aside
      initial={{ translateX: " 100%" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: " 100%" }}
      transition={{ type: "just" }}
      className={styles.container}
    >
      <div className={styles.header}>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          <AiOutlineClose />
        </button>
      </div>

      <nav></nav>
    </motion.aside>
  );
};

export default Sidebar;
