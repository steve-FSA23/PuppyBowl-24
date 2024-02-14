import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPlayers, removePlayer } from "../../API";
import "./AllPlayers.css";

const AllPlayers = () => {
    // State to hold the player details
    const [players, setPlayers] = useState([]);
    // State to hold the search input value
    const [searchValue, setSearchValue] = useState("");

    // Fetching player details from API
    useEffect(() => {
        async function getPlayers() {
            try {
                const fetchedPlayers = await fetchPlayers();
                setPlayers(fetchedPlayers);
            } catch (error) {
                console.error(error);
            }
        }
        getPlayers();
    }, []);

    const navigate = useNavigate();

    // Function to fetch updated player list after adding a player
    const handlePlayerAdded = async () => {
        try {
            const updatedPlayers = await fetchPlayers();
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error(
                "Error fetching players after adding a new player:",
                error
            );
        }
    };

    // Function to remove a player
    const handleRemovePlayer = async (playerId) => {
        try {
            await removePlayer(playerId);
            // Fetch updated player list
            const updatedPlayers = players.filter(
                (player) => player.id !== playerId
            );
            setPlayers(updatedPlayers);
            // Display alert message
            alert(`Player #${playerId} removed from the roster.`);
        } catch (error) {
            console.error("Error removing player:", error);
            // Display error message
            alert("Error removing player. Please try again.");
        }
    };

    // Filtered players based on search input
    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Function to navigate to the add player route
    const navigateToAddPlayer = () => {
        navigate("/addplayer", { onPlayerAdded: handlePlayerAdded });
    };
    return (
        <div className="parent__container">
            <div className="title__input">
                <h2>🐶 All Players 🏈</h2>

                <input
                    type="text"
                    placeholder="Search Player"
                    className="player__search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className="players__container">
                {filteredPlayers.length > 0 ? (
                    filteredPlayers.map((player) => (
                        <div key={player.id}>
                            <h4 className="player__name">{player.name}</h4>
                            <img
                                src={player.imageUrl}
                                alt={player.breed}
                                className="player__img"
                            />
                            <div className="player__btn__container">
                                <Link to={`/players/${player.id}`}>
                                    <button className="player__btn">
                                        See Details
                                    </button>
                                </Link>
                                <button
                                    className="remove__player__btn"
                                    onClick={() =>
                                        handleRemovePlayer(player.id)
                                    }
                                >
                                    Remove Player
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No Players Found.</h2>
                )}
            </div>

            {/* <Link to="/addplayer"> */}
            <div className="add__player__container">
                <button
                    className="add__player__btn"
                    onClick={navigateToAddPlayer}
                >
                    Add New Player
                </button>
            </div>
            {/* </Link> */}
        </div>
    );
};

export default AllPlayers;
