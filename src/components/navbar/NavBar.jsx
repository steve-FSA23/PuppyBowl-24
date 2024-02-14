import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
    return (
        <nav>
            <h3>Puppy Bowl 🏈</h3>
            <div className="nav__links">
                <Link to="/">All Players</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
