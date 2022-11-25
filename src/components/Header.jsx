import React from 'react';
import Cart from './Cart';
import '../App.css';

const Header = props => {
  return (
    <header>
          <h1>The BestShop!</h1>

      <button onClick={props.onClick}><img src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png" width="60" alt="cart" />
      </button>
      

    </header>
  );
}
export default Header;
