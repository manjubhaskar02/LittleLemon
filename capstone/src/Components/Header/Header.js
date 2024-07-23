import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingBasket } from 'react-icons/fa';
import './Header.css';

import Logo from "../../images/LogoNew.jpg";
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <div className="header">
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <img src={Logo} alt="Little Lemon" className="logo" />
                <div className="basket">
                    <FaShoppingBasket />
                </div>
                <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>

                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li>  <a href="#about" onClick={handleClick}>About</a></li>
                        <li> <a href="#menu" onClick={handleClick}>Menu</a></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Header;
