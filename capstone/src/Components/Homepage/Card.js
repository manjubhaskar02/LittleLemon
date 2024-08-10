import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imageSrc, amount }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card">
                <img src={imageSrc} alt={title} className="card-image" />
                <div className="card-content">
                    <div className="card-header">
                        <h3>{title}</h3>
                        <span className="amount">{amount}</span>
                    </div>
                    <p className="ellipsis-paragraph">{description}</p>
                    <div className="">
                        <button href="#" className="order- btn"
                            onClick={() => navigate('/LittleLemon/order')}
                        >
                            Order a Delivery

                            <span className="" > <FaMotorcycle />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;