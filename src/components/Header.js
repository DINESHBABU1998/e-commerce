import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Header() {
return (
      <div>
          <h1 className='heading'>Bella</h1>
          <div className='nav-box' >
          <NavLink className="text" to='/'><i class="fa-solid fa-house"></i>Home</NavLink>
          <NavLink className="text" to='/fashion'><i class="fa-solid fa-shirt"></i>Fashion</NavLink>
          <NavLink className="text" to='/laptops'><i class="fa-solid fa-laptop"></i>Laptops</NavLink>
          <NavLink className="text" to='/mobiles'><i class="fa-solid fa-mobile"></i>Mobiles</NavLink>
          <NavLink className="text" to='/accesories'><i class="fa-solid fa-headphones"></i>Accesories</NavLink> 
         </div>
         <div>
          <NavLink className="text1" to='/profile'><i class="fa-solid fa-user"></i>My Profile</NavLink>
          <NavLink className="text2" to='/addcart'><i class="fa-solid fa-cart-arrow-down"></i>Cart</NavLink>
          <form>
            <input className='search' type='search' placeholder='Search'/>
          </form>
          </div>
      </div> 
        
    )
}

export default Header
