import React from 'react';
import TestimonialCard from './TestimonalCard';
import "./Testimonals.css";

const testimonials = [
    {
        rating: 5,
        getImageSrc: () => require("../../images/john.jpg"),
        name: 'John Doe',
        review: 'Amazing food and service!'
    },
    {
        rating: 4,
        getImageSrc: () => require("../../images/jane.jpg"),
        name: 'Jane Smith',
        review: 'Great atmosphere and delicious meals.'
    },
    {
        rating: 5,
        getImageSrc: () => require("../../images/paul.jpg"),
        name: 'Paul Adams',
        review: 'A wonderful experience from start to finish.'
    },
    {
        rating: 3,
        getImageSrc: () => require("../../images/lisa.jpg"),
        name: 'Lisa Brown',
        review: 'Good food but the service was a bit slow.'
    }
];

function Testimonials() {
    return (
        <article className="testimonal-section">
            <h2 className='center'>What the Customers Say!</h2>
            <div className="testimonials">

                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        rating={testimonial.rating}
                        imageSrc={testimonial.getImageSrc()}

                        name={testimonial.name}
                        review={testimonial.review}
                    />
                ))}
            </div>
        </article>
    );
};

export default Testimonials;
