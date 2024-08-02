import Logo from "../../images/Copyright-logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    function handleClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <>
            <footer>
                <div className="footer-content">
                    <img src={Logo} alt="" width={100} />
                    <div>
                        <h4>Doormat navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>  <a href="#about" onClick={handleClick}>About</a></li>

                            <li> <a href="#menu" onClick={handleClick}>Menu</a></li>
                            <li><Link to="/booking">Reservations</Link></li>
                            <li><Link to="/">Order Online</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><Link to="/">Address</Link></li>
                            <li><Link to="/">Phone Number</Link></li>
                            <li><Link to="/">Email</Link></li>
                        </ul>

                    </div>
                    <div>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Instagram</Link></li>


                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;