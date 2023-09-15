import { ReactComponent as HeaderLogo } from "../../img/car-logo.svg";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={styles.link}>
      <HeaderLogo className={styles.logo} />
    </Link>
  );
};

export default Logo;
