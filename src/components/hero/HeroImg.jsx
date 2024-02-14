import "./HeroImg.css";
import Image from "../../assets/hero-img.png";
const HeroImg = () => {
    return (
        <div className="hero__container">
            <img src={Image} alt="football image" className="hero__img" />
        </div>
    );
};

export default HeroImg;
