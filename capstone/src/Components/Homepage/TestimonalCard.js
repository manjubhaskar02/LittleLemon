import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ rating, imageSrc, name, review }) => {
    return (
        <div className="testimonial-card">
            <div className="rating">
                {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                ))}
            </div>
            <div className="profile">
                <img src={imageSrc} alt={name} className="profile-pic" />

                <span className="name">{name}</span>
            </div>
            <p className="review">{review}</p>
        </div>
    );
};

export default TestimonialCard;
