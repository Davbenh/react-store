import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'




function CategoriesList() {
  
const [cat,setCat] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories/')
  .then((response) => response.json())
  .then((data) => setCat(data)).catch(err => console.log(err));
  
  }, []);


  console.log(cat);


  return (
    <div className='catContainer'>
        {cat.map((item, index) => (
          <Link key={index} to={item} style={{ textDecoration: 'none' }}><div className='catList'><span className='catText'>{item}</span></div></Link>
        ))}

    </div>
  )
}

export default CategoriesList