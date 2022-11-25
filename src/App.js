import { BrowserRouter } from "react-router-dom";
import React,{useEffect, useState, useContext} from 'react';
import './App.css';

import Main from './components/Main';
import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';





function App() {
  const [data,setData] = useState('')
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
    .then(getData=> setData(getData.data))
    .catch(err => console.log('error:', err))
    
  },[])

  
  return (
    <div className="App">
      <Header onClick={handleViewSidebar}/>
      <Cart isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
     {console.log(data)}
    </div>
  );
}

export default App;
