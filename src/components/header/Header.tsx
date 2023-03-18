import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
