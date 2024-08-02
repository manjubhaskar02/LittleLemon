import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import "./Card.css"

const Card = ({ title, description, imageSrc, amount }) => {
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
                        <button href="#" className="order- btn">
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