import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>Xanho</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Education 2.0</h1>
            <p className={s.bannerDesc}>A universally accessible, goal-oriented, data-driven education platform</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
