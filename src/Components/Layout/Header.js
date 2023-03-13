import React from 'react';
import "./Header.css";
import headerImage from "../../assets/header_img.jpg";
import CartButton from './CartButton';

const Header = (props) => {
    return (
        <header>
            <nav className='navbar'>
                <h1>FoodPlaza</h1>
                <CartButton cartBtn_handler={props.cartBtn_handler} />
            </nav>
            <div>
                <img src={headerImage} alt="Delicious Dishes" />
            </div>
        </header>
    )
}

export default Header;
