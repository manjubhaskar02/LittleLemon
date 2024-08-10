import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./Menu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


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

// Custom arrow components
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};

function Menu() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="menu">
            <div className="menu-header">
                <h2>This Week's Specials!</h2>
                <button className="btn"
                    onClick={() => navigate('/LittleLemon/order')}>Online Menu</button>
            </div>
            <Slider {...settings} className="menu-carousel">
                {menus.map((menu) => (
                    <Card
                        key={menu.title}
                        title={menu.title}
                        description={menu.description}
                        amount={menu.amount}
                        imageSrc={menu.getImageSrc()}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Menu;
