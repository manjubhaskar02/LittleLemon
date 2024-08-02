import React from "react";
import Card from "./Card";
import "./Menu.css";

const menus = [
    {
        title: "Greek Salad",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        amount: "$12.99",
        getImageSrc: () => require("../../images/greek salad.jpg"),
    },
    {
        title: "Bruchetta",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        amount: "$5.99",

        getImageSrc: () => require("../../images/BruschettaP.jpg"),

    },
    {
        title: "Lemon Dessert",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        amount: "$5.00",
        getImageSrc: () => require("../../images/lemon dessert.jpg"),
    },
];

function Menu() {
    return (

        <>
            <div className="menu">
                <div className="menu-header">
                    <h2 >This Week's Specials!</h2>
                    <button className="btn">Online Menu</button>
                </div>
                <div className="menu-grid">
                    {menus.map((menu) => (
                        <Card
                            key={menu.title}
                            title={menu.title}
                            description={menu.description}
                            amount={menu.amount}
                            imageSrc={menu.getImageSrc()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;