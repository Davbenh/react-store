import React from "react";
import {BrowserRouter, Route, Routes,Navigate } from "react-router-dom";


//Pages import routes
import CategoriesList from "../Pages/CategoriesList";
import Product from "../Pages/Product";
import NotFound from "../Pages/NotFound";
import ProductsList from "../Pages/ProductsList";
import '../App.css'


function Main() {
  return (
    <main>
        <Routes>
          <Route path="/" element={ <Navigate to="/category" /> }/>
          <Route path="/category" element={<CategoriesList />}/>
          <Route path="/category/:catid" element={<ProductsList />} />
          <Route path="/category/:catid/item/:id" element={<Product />} />
          <Route path="/category/:catid/item/" element={ <Navigate to="/category" /> }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
  );
}

export default Main;
