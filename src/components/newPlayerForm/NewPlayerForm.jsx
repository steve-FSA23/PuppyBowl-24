import { useState } from "react";
import { addNewPlayer } from "../../API";
import { Link } from "react-router-dom";

import "./NewPlayerForm.css";

const NewPlayerForm = ({ onPlayerAdded }) => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        status: "",
        imageUrl: "",
        teamId: "",
        cohortId: "",
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the addNewPlayer function with form data
            await addNewPlayer(formData);
            // Invoke the onPlayerAdded function passed from "AllPlayer Component via react router "
            onPlayerAdded();

            alert("Player Added!");
            // Reset form data after successful addition
            setFormData({
                name: "",
                breed: "",
                status: "",
                imageUrl: "",
                teamId: "",
                cohortId: "",
            });
        } catch (error) {
            console.error("Error adding player:", error);
        }
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="new-player-form">
            <h2>New Player 🏈</h2>
            <form onSubmit={handleSubmit}>
                <div className="single__input">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="single__input">
                    <label htmlFor="name">Breed</label>
                    <input
                        type="text"
                        name="breed"
                        value={formData.breed}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="single__input">
                    <label htmlFor="name">Status</label>
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="single__input">
                    <label htmlFor="name">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="single__input">
                    <label htmlFor="name">TeamId</label>
                    <input
                        type="number"
                        name="teamId"
                        value={formData.teamId}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="single__input">
                    <label htmlFor="name">CohortId</label>
                    <input
                        type="number"
                        name="cohortId"
                        value={formData.cohortId}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="submit__btn">
                    <button type="submit" className="submit-button">
                        Add
                    </button>

                    <Link to="/">
                        <button className="submit-button back">Go Back</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default NewPlayerForm;
