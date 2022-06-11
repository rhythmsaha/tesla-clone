/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CustomLink from "./CustomLink";
import styles from "./HomeProduct.module.scss";

const HomeProduct = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.mainImage}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
        alt=""
      />

      <div>
        <h2>Model 3</h2>

        <div>
          <p>Order online for </p>
          <Link href="">Touchless Delivery</Link>
        </div>
      </div>

      <div>
        <CustomLink href="">CUSTOM ORDER</CustomLink>
        <CustomLink href="">EXISTING INVENTORY</CustomLink>
      </div>
    </section>
  );
};

export default HomeProduct;
