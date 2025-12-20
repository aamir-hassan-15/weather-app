import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between'>
      <Link to={'/sopore'}>Sopore</Link>
       <Link to={'/baramulla'}>Baramulla</Link>
        <Link to={'/srinagar'}>Srinagar</Link>
         <Link to={'/london'}>London</Link>
      
    </div>
  )
}

export default Header
