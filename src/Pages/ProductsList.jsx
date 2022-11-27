import React,{useContext,useState} from 'react'
import { ContextData } from '../App'
import { useParams } from 'react-router-dom'
import '../App.css'



function ProductsList() {

  const { dataItems, cartItems ,setCartItems} = useContext(ContextData)
  const { catid } = useParams()


  console.log(dataItems);
  return (<div className='productList'>
    { dataItems.filter((item,index) => item.category == catid).map((v) => {

return (<div className="card" key={v.id}>
<img src={v.image} alt={v.title}/>
<h1>{v.title}</h1>
<p className="price">${v.price}</p>
<p className='card-desc'>{v.description}</p>
<p><button>Add to Cart</button></p>
</div>)
    } )}
    
  </div>
  )
}

export default ProductsList