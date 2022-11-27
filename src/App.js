
import React, { useEffect, useState, createContext } from "react";
import "./App.css";

import Main from "./components/Main";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";






function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [dataItems, setDataItems] = useState([]);

  
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setDataItems(json))
  }, []);


  
  return (
    <div className="App">
      <ContextData.Provider value={{ dataItems, cartItems ,setCartItems}}>
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
