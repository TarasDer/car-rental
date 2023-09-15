import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={styles.link}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={styles.link}>
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
