import CustomLink from "./CustomLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <CustomLink href="/">Tesla © 2022</CustomLink>
      <CustomLink href="/">Privacy & Legal</CustomLink>
      <CustomLink href="/">Vehicle Recalls</CustomLink>
      <CustomLink href="/">Contact</CustomLink>
      <CustomLink href="/">Careers</CustomLink>
      <CustomLink href="/">News</CustomLink>
      <CustomLink href="/">Engage</CustomLink>
      <CustomLink href="/">Locations</CustomLink>
    </footer>
  );
};

export default Footer;
