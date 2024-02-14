import "./Footer.css";
import { Link } from "react-router-dom";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
const Footer = () => {
    return (
        <footer>
            <div className="socials__container">
                <h3>Puppy Bowl 🏈</h3>
                <ul>
                    <Link>
                        <img src={Instagram} alt="instagram icon" />
                    </Link>

                    <Link>
                        <img src={Facebook} alt="facebook icon" />
                    </Link>
                    <Link>
                        <img src={Twitter} alt="twitter icon" />
                    </Link>
                </ul>
            </div>
            <div className="copyright__container">
                <p>© 2024 PuppyBowl. All Rights Reserved</p>
            </div>
            <div className="footer__links">
                <Link to="/">All Players</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;
