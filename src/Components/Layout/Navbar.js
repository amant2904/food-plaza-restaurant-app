import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>FoodPlaza</h1>
            <button>
                <p>Your Cart</p>
                <div>0</div>
            </button>
        </nav>
    )
}

export default Navbar;