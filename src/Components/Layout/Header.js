import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <h1>FoodPlaza</h1>
                <button>
                    <p>Your Cart</p>
                    <div>0</div>
                </button>
            </nav>
            <div className="header_img"></div>
        </header>
    )
}

export default Header;
