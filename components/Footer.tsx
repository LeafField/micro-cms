import styles from "../styles/footer.module.css";

import Logo from "./Logo";
import Container from "./Container";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
