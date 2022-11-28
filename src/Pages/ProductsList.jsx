import React, { useContext, useState } from "react";
import { ContextData } from "../App";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function ProductsList() {
  const { dataItems, cart, setCart,addToCart } = useContext(ContextData);
  const { catid } = useParams();

  console.log(dataItems);
  return (
    <div className="productList">
      {dataItems
        .filter((item, index) => item.category === catid)
        .map((v) => {
          return (
              <Link className="link" key={v.id} to={'item/'+v.id} style={{ textDecoration: "none", color: "black"}} >
            <div className="card" key={v.id}>
             <img src={v.image} alt={v.title} />
             
              <h1>{v.title}</h1>
              <p className="price">${v.price}</p>
              <p className="card-desc">{v.description}</p>
             
              
              <Link>
              <p>
               <button onClick={() => addToCart(v.id)}>Add to Cart</button>
              </p>
              </Link>
            </div>
            </Link>
            
              
            
          );
        })}
    </div>
  );
}

export default ProductsList;
