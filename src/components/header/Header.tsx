import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../withRouter/withRouter';

import styles from './header.module.scss';
class Header extends React.Component<WithRouterProps> {
  render() {
    let namePage;
    switch (this.props.location.pathname) {
      case '/':
        namePage = 'Main page';
        break;
      case '/about':
        namePage = 'About page';
        break;
      case '/form':
        namePage = 'Form page';
        break;
      default:
        namePage = '404 Page';
    }

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
  }
}

export default withRouter(Header);
