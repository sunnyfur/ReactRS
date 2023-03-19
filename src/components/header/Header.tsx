import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../withRouter/withRouter';

import styles from './header.module.scss';
interface Props extends WithRouterProps {}

class Header extends React.Component<Props> {
  render() {
    let namePage;
    switch (this.props.location.pathname) {
      case '/':
        namePage = 'Main page';
        break;
      case '/about':
        namePage = 'About page';
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
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
