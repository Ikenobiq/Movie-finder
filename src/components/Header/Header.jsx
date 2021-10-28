import Navigation from "../clients/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
