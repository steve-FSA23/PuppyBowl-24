export async function fetchPlayers() {
    try {
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players"
        );
        const result = await response.json();

        return result.data.players;
    } catch (error) {
        console.error(error);
    }
}
export async function fetchSinglePlayer(id) {
    try {
        const players = await fetchPlayers();

        const playerId = parseInt(id); // Convert received ID to number

        const player = players.find((player) => player.id === playerId);

        return player;
    } catch (error) {
        console.error("Error fetching single player:", error);
        return null;
    }
}

export async function addNewPlayer(playerObj) {
    try {
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(playerObj),
            }
        );

        if (response.status === 201) {
            const data = await response.json();
            console.log("Player added successfully:", data);
        }
    } catch (err) {
        console.error(
            "Oops, something went wrong with adding that player!",
            err
        );
    }
}

export async function removePlayer(playerId) {
    try {
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${playerId}`,
            {
                method: "DELETE",
            }
        );

        if (response.status === 204) {
            console.log(`Player #${playerId} removed from the roster.`);
        }
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
}
