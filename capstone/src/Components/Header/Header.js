import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import Logo from "../../images/LogoNew.jpg";
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function handleClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    }



    return (
        <>
            <div className="header">
                <div className='flex'>
                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <img src={Logo} alt="Little Lemon" className="logo" />
                </div>

                <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>

                    <ul className="nav-list">
                        <li><Link to="/LittleLemon">Home</Link></li>

                        <li>  <a href="#about" onClick={handleClick}>About</a></li>

                        <li> <a href="#menu" onClick={handleClick}>Menu</a></li>
                        <li><Link to="/LittleLemon/booking">Reservations</Link></li>
                        <li><Link to="/LittleLemon/order">Order Online</Link></li>
                        <li><Link to="/LittleLemon/form">Login</Link></li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Header;
