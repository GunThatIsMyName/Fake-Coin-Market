import React from 'react';
import { NavbarWrapper } from '../styles/Navbar.style';

function Navbar() {
  return <NavbarWrapper>
      <img className='navbar__logo' src="https://logos-download.com/wp-content/uploads/2018/04/Binance_logo_coin.png" alt="logo" />
      <h1 className='navbar__title' >FAKE NANCE</h1>
  </NavbarWrapper>;
}

export default Navbar;
