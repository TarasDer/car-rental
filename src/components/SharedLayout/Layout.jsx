import Logo from "../Header/Logo";
import { Outlet } from "react-router-dom";
import Container from "components/Shared/Container";
import Navigation from "../Header/Navigation";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={styles.pageHeader}>
        <Container>
          <div className={styles.wrapper}>
            <Logo />
            <Navigation className={styles.mainNav} />
          </div>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
