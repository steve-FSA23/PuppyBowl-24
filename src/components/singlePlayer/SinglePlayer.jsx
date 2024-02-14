import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../../API";

import "./SinglePlayer.css";

const SinglePlayer = () => {
    const { id } = useParams();

    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPlayer() {
            const fetchedPlayer = await fetchSinglePlayer(id);
            setPlayer(fetchedPlayer);
        }
        getPlayer();
    }, [id]);

    const handleButtonClick = () => {
        navigate("/");
    };
    return (
        <div className="single-player-container">
            <div className="single-player-header">
                <h2>Single Player</h2>
            </div>
            {player ? (
                <div className="player-details">
                    <h3>{player.name}</h3>
                    <p>Breed: {player.breed}</p>
                    <p>CohortId: {player.cohortId}</p>
                    <p>Status: {player.status}</p>
                    <p>Team: {player.teamId}</p>
                </div>
            ) : (
                <p>Loading player data...</p>
            )}
            <button className="back-button" onClick={handleButtonClick}>
                Back to All Players
            </button>
        </div>
    );
};

export default SinglePlayer;
