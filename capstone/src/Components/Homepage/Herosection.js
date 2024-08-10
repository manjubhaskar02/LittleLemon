import './Herosection.css';

import HeroImage from "../../images/restauranfood.jpg"
import { useNavigate } from 'react-router-dom';

function Herosection() {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/LittleLemon/booking');
    };

    return (
        <>
            <section className="hero-section">
                <div className=""></div>
                <div className="hero-content">
                    <div className="text-content">
                        <h1 className="title">Little Lemon</h1>
                        <h2 className="subheading">Chicago</h2>
                        <p className="description">We are a  family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            Our warm and inviting atmosphere ensures a delightful dining experience for every guest.
                        </p>
                        <button className="btn" onClick={handleReserveClick} >Reserve a Table</button>
                    </div>
                    <div className="image-content">
                        <img src={HeroImage} alt="Hero" width={"500"} height={500} className="hero-image" />
                    </div>
                </div>
            </section>

        </>
    )
}
export default Herosection;