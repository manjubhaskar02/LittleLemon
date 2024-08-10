import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./OrderPage.css";

const menus = [

    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        amount: "$12.99",
        getImageSrc: () => require("../../images/greek salad.jpg"),
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        amount: "$5.99",
        getImageSrc: () => require("../../images/BruschettaP.jpg"),
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        amount: "$5.00",
        getImageSrc: () => require("../../images/lemon dessert.jpg"),
    },
    {
        title: "Pasta Margarita",
        description: "A fresh hand made pasta with high quality tomatoes, bazil leaves and Parmezan cheese.",
        amount: "$12.99",
        getImageSrc: () => require("../../images/pasta.png"),
    },
    {
        title: "Tilapia Lemon fish",
        description: "Pan grilled tilapia with fresh herbs, olive and lemon, served with pan seared vegetables.",
        amount: "$5.99",
        getImageSrc: () => require("../../images/fish.jpg"),
    },
    {
        title: "Grilled Oysters",
        description: "Freshly caught grilled oysters with garlic, brandy and parmesan cheese served with vegetables.",
        amount: "$5.00",
        getImageSrc: () => require("../../images/oysters.JPG"),
    },

];

function OrderPage() {
    const [cart, setCart] = useState({});
    const navigate = useNavigate();

    function handleAddToCart(item) {
        setCart(prevCart => ({
            ...prevCart,
            [item.title]: (prevCart[item.title] || 0) + 1
        }))
    };

    function handleIncrement(item) {
        setCart(prevCart => ({
            ...prevCart,
            [item.title]: prevCart[item.title] + 1
        }))
    };

    function handleDecrement(item) {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[item.title] > 1) {
                newCart[item.title] -= 1;
            }
            else {
                delete newCart[item.title];
            }
            return newCart;
        })
    };
    const getTotalItems = () => {
        return Object.values(cart).reduce((total, count) => total + count, 0);
    };



    const handleCartClick = () => {
        navigate("/LittleLemon/cart", { state: { cart } });
    };


    return (
        <section className="order-page">
            <div className="place-cart">

                <h2>Order Your Favorite Dish</h2>

                <div className="cart-container">
                    <FaShoppingCart className="cart-icon" onClick={handleCartClick} />
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </div>
            </div>

            <div className="order-table">

                <div>
                    {menus.map((menu, index) => (
                        <div className=" order-item " key={index}>
                            <div className="relative"><img src={menu.getImageSrc()} alt={menu.title} className="order-image" />
                                {cart[menu.title] ? (<div className="quantity-controls ">
                                    <button className="  minus-btn" onClick={() => handleDecrement(menu)}><p className="sign">-</p></button>
                                    <span className="quantity">{cart[menu.title]}</span>
                                    <button className=" plus-btn" onClick={() => handleIncrement(menu)}><p className="sign">+</p></button>
                                </div>) :
                                    (<button className="btn menu-btn" onClick={() => handleAddToCart(menu)}>Add to Cart</button>)}
                            </div>
                            <div className="order-details" >
                                <h3 >{menu.title}</h3>
                                <div className="amount">{menu.amount}</div>
                                <div className="order-description">{menu.description}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <button className="btn auto" onClick={() => navigate('/LittleLemon/menu')}>Back to Menu</button>
        </section >
    );
}

export default OrderPage;
