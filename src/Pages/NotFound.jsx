import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function NotFound() {
  return (
    <div>NotFound
      <div>
      <Link to={'/category'}>לחץ לחזרה</Link>
      </div>
    </div>
  )
}

export default NotFound