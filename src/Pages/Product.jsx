import React,{setState,useContext} from 'react'
import { useParams } from 'react-router';
import { ContextData } from '../App';
import '../App.css'

function Product() {

  const { dataItems, cart, setCart,addToCart } = useContext(ContextData);
  const { id } = useParams();

  
  return (
    <div className="product-page">
      {dataItems
        .filter((item, index) => item.id == id)
        .map((v) => {
          return (
            <div className="productCard" key={v.id}>
              <img src={v.image} alt={v.title} />
              <h1>{v.title}</h1>
              <p className="productPrice">${v.price}</p>
              <p className="pro-card-desc">{v.description}</p>
              <p>
                <button onClick={() => addToCart(v.id)}>Add to Cart</button>
              </p>
            </div>
          );
        })}
    </div>  )
}

export default Product