import React from 'react';
import "./Header.css";
import headerImage from "../../assets/header_img.jpg";
import CartButton from './CartButton';

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <h1>FoodPlaza</h1>
                <CartButton />
            </nav>
            <div>
                <img src={headerImage} alt="Delicious Dishes" />
            </div>
        </header>
    )
}

export default Header;
