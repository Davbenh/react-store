import React, {useContext, useState} from 'react';
import '../App.css';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, } from 'react-router-dom';



const Header = (props) => {
  const breadcrumbs = useBreadcrumbs();


  return (
    <>
    <header>
          <h1>The BestShop!</h1>
          
      <button onClick={props.onClick}><img src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png" width="60" alt="cart" />
      </button>
      
     
    </header>
    <div>
    {breadcrumbs.map(({ breadcrumb },i) =>  {
      return  <Link to={breadcrumb.key} >{decodeURIComponent(breadcrumb.props.children)+ ">"}</Link>}

      )
      
      }
    </div>
    </>
  );
}
export default Header;
