/* eslint-disable @next/next/no-img-element */
import CustomLink from "./CustomLink";
import styles from "./HomeProduct.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const HomeProduct = ({
  id,
  type,
  mobileImage,
  desktopImage,
  model,
  shortDesc,
  showFooter,
}) => {
  return (
    <section className={styles.container}>
      <img className={styles.mainImage} src={desktopImage} alt="" />

      <img className={styles.mainImageMobile} src={mobileImage} alt="" />

      <Fade bottom>
        <div className={styles.content}>
          <h2 className={styles.heading}>{model}</h2>

          <div className={styles.text}>
            <p>{type === "car" ? "Order Online for" : shortDesc}</p>

            {type === "car" && (
              <CustomLink href="" className={styles.link}>
                Touchless Delivery
              </CustomLink>
            )}
          </div>
        </div>
      </Fade>

      <div className={styles.bottom}>
        <Fade bottom>
          <div className={styles.actions}>
            {type === "car" && (
              <>
                <CustomLink href="" className={styles.darklink}>
                  Custom Order
                </CustomLink>
                <CustomLink href="" className={styles.link}>
                  Existing Inventory
                </CustomLink>
              </>
            )}

            {type === "solar" && (
              <>
                <CustomLink href="" className={styles.darklink}>
                  Order Now
                </CustomLink>
                <CustomLink href="" className={styles.link}>
                  Learn More
                </CustomLink>
              </>
            )}

            {type === "other" && (
              <>
                <CustomLink href="" className={styles.darklink}>
                  Shop Now
                </CustomLink>
              </>
            )}
          </div>
        </Fade>

        {id === "1" && (
          <span className={styles.scrollIcon}>
            <FaChevronDown />
          </span>
        )}
        {showFooter && <Footer />}
      </div>
    </section>
  );
};

export default HomeProduct;
