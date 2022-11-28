import React, { useEffect, useState, createContext } from "react";
import "./App.css";

import Main from "./components/Main";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [dataItems, setDataItems] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const addToCart = (id) => {
    const itemAdd = dataItems.filter((item) => item.id == id);
    const isInCart = cart.findIndex((item) => item.id == id);
    if (isInCart < 0) {
      itemAdd[0].qty += 1;
      setCart((current) => [...current, ...itemAdd]);
      setSideBarOpen("sidebar open");
    } else {
      cart[isInCart].qty += 1;
      setCart((current) => [...current]);
      setSideBarOpen("sidebar open");
    }
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setDataItems(json.map((v) => ({ ...v, qty: (v.value = Number(0)) })))
      );
  }, []);

  return (
    <div className="App">
      <ContextData.Provider
        value={{ dataItems, cart, setCart, addToCart, cartQty, cartSum }}
      >
        <Header onClick={handleViewSidebar} />
        <Cart isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        <Main />
      </ContextData.Provider>
    </div>
  );
}

export const ContextData = createContext({});
export const MyCart = createContext([]);

export default App;
