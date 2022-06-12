/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CustomLink from "./CustomLink";
import styles from "./HomeProduct.module.scss";
import { FaChevronDown } from "react-icons/fa";

const HomeProduct = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.mainImage}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
        alt=""
      />

      <img
        className={styles.mainImageMobile}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD"
        alt=""
      />

      <div className={styles.content}>
        <h2 className={styles.heading}>Model 3</h2>
        <div className={styles.text}>
          <p>Order online for </p>
          <CustomLink href="" className={styles.link}>
            Touchless Delivery
          </CustomLink>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.actions}>
          <CustomLink href="" className={styles.darklink}>
            CUSTOM ORDER
          </CustomLink>
          <CustomLink href="" className={styles.link}>
            EXISTING INVENTORY
          </CustomLink>
        </div>

        <span className={styles.scrollIcon}>
          <FaChevronDown />
        </span>
      </div>
    </section>
  );
};

export default HomeProduct;
