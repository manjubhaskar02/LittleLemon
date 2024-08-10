import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../Booking/FormInput";

import "./CartPage.css";

const menus = [
    {
        title: "Greek Salad",
        amount: "$12.99",
    },
    {
        title: "Bruchetta",
        amount: "$5.99",
    },
    {
        title: "Lemon Dessert",
        amount: "$5.00",
    },
    {
        title: "Pasta Margarita",
        amount: "$12.99",
    },
    {
        title: "Tilapia Lemon fish",
        amount: "$5.99",
    },
    {
        title: "Grilled Oysters",
        amount: "$5.00",
    },
];

function CartPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setIsSubmitted(true);
    };

    const location = useLocation();
    const { cart } = location.state || { cart: {} };
    const navigate = useNavigate();

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, itemTitle) => {
            const menuItem = menus.find(menu => menu.title === itemTitle);
            return total + (parseFloat(menuItem.amount.slice(1)) * cart[itemTitle]);
        }, 0).toFixed(2);
    };

    return (

        <section className="cart-page">
            <h2>Confirm Your Orders</h2>

            <div className="cart ">
                <div className=" overlay">
                    <h4 className="center">Your Cart</h4>

                    {Object.keys(cart).length === 0 ? (
                        <p className="empty-msg">Your cart is empty.</p>
                    ) : (
                        <ul>
                            {Object.keys(cart).map((itemTitle, index) => {
                                const menuItem = menus.find(menu => menu.title === itemTitle);
                                return (
                                    <li key={index}>
                                        {cart[itemTitle]}   {itemTitle} -  ${(parseFloat(menuItem.amount.slice(1)) * cart[itemTitle]).toFixed(2)}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <h4 className="center">Total :  ${calculateTotal()}</h4>
                    <button className='btn back-btn' onClick={() => navigate(-1)}>Back to Order</button>
                </div>
            </div>

            <FormInput onFormSubmit={handleFormSubmit} />

            {isSubmitted && (
                <div className='success-message'>
                    <p>Your Order has been placed!</p>
                </div>
            )}
        </section>
    );
};

export default CartPage;
