import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../assets/images/logo.png'
import carticon from '../assets/images/cart_icon.png'

function Header() {
  return (
   
     <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>MarketWala</p>
      </div>
     <ul className='nav-menu'>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/'>Shop</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/mens'>Mens</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/womens'>Women</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/kids'>Kid</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/Vlog/Mamun/Ahmed'>Vlog</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'active-item':'panding-item'} to='/Contact'>Contact</NavLink></li>
        
      </ul>

      <div className="nav-login-cart">
        <NavLink to='/login'><button>Login</button></NavLink>
        <NavLink to='/Cart'><img src={carticon} alt="" /></NavLink>
        <div className="nav-cart-count">0</div>
      </div>
     </div>
     
     
  )
}

export default Header