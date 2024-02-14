import "./Poster.css";
import PuppyImg from "../../assets/puppy-img.png";
const Poster = () => {
    return (
        <div className="poster__container">
            <div className="puppy__img__container">
                <img
                    src={PuppyImg}
                    alt="puppy running"
                    className="puppy__img"
                />
            </div>
            <div className="puppy__text__container">
                <h2>Puppy Tournament </h2>
                <p>
                    Get ready for the cutest showdown of the year! Join us for
                    the Puppy Super Bowl, where adorable pups take the field to
                    play the game of tail-wagging touchdowns and paw-some
                    interceptions. Cheer on your favorite furry athletes as they
                    compete for the title of MVP (Most Valuable Pup)!
                </p>
            </div>
        </div>
    );
};

export default Poster;
