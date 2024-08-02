import "./Display.css";
import Imgone from "../../images/restaurant.jpg";
import Imgtwo from "../../images/restaurant chef B.jpg";
import Imgthree from "../../images/fish.jpg";



function Display() {


    return (
        <section className="display-section">
            <div className="image-grid">
                <img src={Imgone} alt="restaurant" />
                <img src={Imgtwo} alt="chef" />
                <img src={Imgthree} alt="menu" />
            </div>


        </section>
    )
}
export default Display