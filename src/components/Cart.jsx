import React, { useContext } from "react";
import "../App.css";
import { ContextData } from "../App";

const Cart = (props) => {
  const { dataItems, cart, setCart, addToCart } = useContext(ContextData);

  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
       <div className="cart-item">
      {cart.map((item, index) => {
        return (
          
            <div className="cart-item-header" key={index}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: 50, height: 50 }}
              />
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-price">price: ${item.price}</div>
              <div className="cart-item-qty">total: {item.qty}</div>
            </div>
        );
      })}
      </div>
      <div className="cart-item-footer">dasdasdd</div>
    </div>
  );
};

export default Cart;
