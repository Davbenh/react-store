import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import Cart from './Cart';
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
          <Route path="/" element={<CategoriesList />} />
          <Route path="/category" element={<CategoriesList />} />
          <Route path="/category/product" element={<ProductsList />} />
          <Route path="/item/id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </main>
  );
}

export default Main;
