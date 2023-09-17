import React from 'react'
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
        <div className="nav_container">
            <input type='text' className='search-text' placeholder='Enter your search item.' />
        </div>
        <div className="profile-container">
            <a href="#">
                <FiHeart className='nav-icons' />
            </a>
            <a href='#'>
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href='#'>
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>
    </nav>
  )
}
