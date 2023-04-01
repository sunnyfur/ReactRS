import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './header.module.scss';
const Header = () => {
  const location = useLocation();
  const [namePage, setNamePage] = useState('');
  useEffect(() => {
    let path;
    switch (location.pathname) {
      case '/':
        path = 'Main page';
        break;
      case '/about':
        path = 'About page';
        break;
      case '/form':
        path = 'Form page';
        break;
      default:
        path = '404 Page';
    }
    setNamePage(path);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{namePage}</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? styles.active : isActive ? styles.active : styles.pending
          }
        >
          Main
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? styles.active : isActive ? styles.active : styles.pending
          }
        >
          About
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive, isPending }) =>
            isPending ? styles.active : isActive ? styles.active : styles.pending
          }
        >
          Form
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
